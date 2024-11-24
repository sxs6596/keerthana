"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const PeerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    thesisId: "",
    comments: "",
    rating: "",
  });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authorization directly from localStorage
    const userData = localStorage.getItem("user");

    if (!userData) {
      console.warn("No user data found. Redirecting to login.");
      router.push("/login");
      return;
    }

    try {
      const user = JSON.parse(userData);

      if (!user.role) {
        console.error("User role is missing. Redirecting to login.");
        router.push("/login");
        return;
      }

      // Check if user has the required role
      const allowedRoles = ["REVIEWER", "ADMIN"];
      if (!allowedRoles.includes(user.role)) {
        console.warn(`Access Denied. User Role: ${user.role}`);
        router.push("/unauthorized"); // Redirect to unauthorized page
        return;
      }

      setIsAuthorized(true); // User is authorized
    } catch (error) {
      console.error("Error parsing user data:", error);
      router.push("/login");
    }
  }, [router]);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/peerReviews");
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      } else {
        toast.error("Failed to fetch reviews.");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("An error occurred while fetching reviews.");
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchReviews();
    }
  }, [isAuthorized]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/peerReviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Review submitted successfully!");
        fetchReviews(); // Refresh the list of reviews
        setFormData({ thesisId: "", comments: "", rating: "" });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting the review.");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Peer Reviews</h2>

      {/* List of Reviews */}
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content">
          <h3 className="text-xl font-semibold mb-4 text-white">Recent Reviews</h3>
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="bg-neutral-focus p-4 rounded-lg shadow-md"
              >
                <p className="text-white">
                  <strong>Thesis ID:</strong> {review.thesisId}
                </p>
                <p className="text-white">
                  <strong>Reviewer:</strong> {review.reviewer.name}
                </p>
                <p className="text-white">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="text-white">
                  <strong>Comments:</strong> {review.comments}
                </p>
                <p className="text-sm text-gray-500">
                  Reviewed on {new Date(review.reviewedAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submit Review Form */}
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Submit a Review</h3>
          <div className="mb-4">
            <label htmlFor="thesisId" className="block text-white">
              Thesis ID
            </label>
            <input
              type="number"
              id="thesisId"
              name="thesisId"
              placeholder="Enter thesis ID"
              value={formData.thesisId}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comments" className="block text-white">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Enter comments"
              value={formData.comments}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-white">
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Enter rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default PeerReview;
