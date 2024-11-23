"use client";

import { useState } from "react";

const Search = () => {
  const [searchInputs, setSearchInputs] = useState({
    title: "",
    author: "",
    year: "",
    keywords: "",
  });

  const [results, setResults] = useState([]); // State to store search results
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/theses/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchInputs),
      });

      if (response.ok) {
        const results = await response.json();
        setResults(results); // Update results state
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch search results.");
      }
    } catch (error) {
      setError("An error occurred during the search. Please try again.");
      console.error("Error during search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Search Theses</h2>
      
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-white">
              Search by Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter thesis title..."
              value={searchInputs.title}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-white">
              Search by Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name..."
              value={searchInputs.author}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-white">
              Search by Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter year..."
              value={searchInputs.year}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="keywords" className="block text-white">
              Search by Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Enter keywords..."
              value={searchInputs.keywords}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Search
          </button>
        </form>
      </div>

      {/* Display loading state */}
      {isLoading && <p className="text-center text-gray-400 mt-6">Loading results...</p>}

      {/* Display error message */}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      {/* Display search results */}
      {results.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-300 mb-4">Search Results</h3>
          <ul className="space-y-4">
            {results.map((thesis) => (
              <li
                key={thesis.id}
                className="bg-neutral-focus p-4 rounded-lg shadow-md text-neutral-content"
              >
                <h4 className="text-xl font-semibold text-white">{thesis.title}</h4>
                <p className="text-gray-400">Author: {thesis.author.name}</p>
                <p className="text-gray-400">Year: {thesis.year}</p>
                <p className="text-gray-400">Abstract: {thesis.abstract}</p>
                <p className="text-gray-400">
                  Keywords: {thesis.keywords.map((k) => k.name).join(", ")}
                </p>
                <a
                  href={thesis.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Download Thesis
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display no results message */}
      {!isLoading && !error && results.length === 0 && (
        <p className="text-center text-gray-400 mt-6">No results found.</p>
      )}
    </section>
  );
};

export default Search;
