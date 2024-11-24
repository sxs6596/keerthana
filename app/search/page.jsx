"use client";

import { useState } from "react";

const Search = () => {
  const [searchInputs, setSearchInputs] = useState({
    title: "",
    author: "",
    year: "",
  });

  const [results, setResults] = useState([]); // State to store search results
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setResults([]); // Clear previous results

    try {
      const response = await fetch("/api/theses/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchInputs),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch search results.");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setResults(data);
      } else {
        setError("No results found for the provided search criteria.");
      }
    } catch (error) {
      setError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 min-h-screen bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">
        Search Theses
      </h2>

      <div className="mt-10 max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-300 mb-2">
              Search by Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter thesis title..."
              value={searchInputs.title}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-300 mb-2">
              Search by Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name..."
              value={searchInputs.author}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-gray-300 mb-2">
              Search by Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter year..."
              value={searchInputs.year}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>

      {isLoading && (
        <p className="text-center text-gray-300 mt-6 animate-pulse">
          Searching for theses...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-6 bg-red-100 p-3 rounded shadow-md">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-300 mb-4">Search Results</h3>
          <ul className="space-y-4">
            {results.map((thesis) => (
              <li
                key={thesis.id}
                className="bg-gray-700 p-6 rounded-lg shadow-md text-white"
              >
                <h4 className="text-xl font-semibold">{thesis.title}</h4>
                <p className="text-gray-300">Author: {thesis.author?.name || "Unknown"}</p>
                <p className="text-gray-300">Year: {thesis.year || "N/A"}</p>
                <p className="text-gray-300">
                  Abstract: {thesis.abstract || "No abstract available."}
                </p>
                {thesis.fileUrl && (
                  <a
                    href={thesis.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Download Thesis
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isLoading && !error && results.length === 0 && (
        <p className="text-center text-gray-400 mt-6">
          No results found. Try refining your search criteria.
        </p>
      )}
    </section>
  );
};

export default Search;
