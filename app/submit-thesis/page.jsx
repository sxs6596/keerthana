"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const SubmitThesis = () => {
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    authorId: "",
    year: "",
    file: null,
  });

  // Fetch authorId after hydration
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user?.id) {
        setFormData((prevData) => ({
          ...prevData,
          authorId: user.id,
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const thesisData = new FormData();
    thesisData.append("title", formData.title);
    thesisData.append("abstract", formData.abstract);
    thesisData.append("authorId", formData.authorId);
    thesisData.append("year", formData.year);
    thesisData.append("file", formData.file); // This must be a valid File object

    try {
      const response = await fetch("/api/theses", {
        method: "POST",
        body: thesisData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Thesis submitted successfully!");
        setFormData({
          title: "",
          abstract: "",
          authorId: formData.authorId, // Keep authorId
          year: "",
          file: null,
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting thesis:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">
        Submit Your Thesis
      </h2>

      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-white">
              Thesis Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter thesis title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="abstract" className="block text-white">
              Abstract
            </label>
            <textarea
              id="abstract"
              name="abstract"
              placeholder="Enter abstract"
              value={formData.abstract}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-white">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter year of submission"
              value={formData.year}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-white">
              Upload Thesis (PDF)
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Thesis
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitThesis;
