// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { withAuthorization } from '../../hoc/withAuthorization';

// const PeerReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({
//     thesisId: "",
//     comments: "",
//     rating: "",
//   });

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch("/api/peerReviews");
//       if (response.ok) {
//         const data = await response.json();
//         setReviews(data.reviews);
//       } else {
//         toast.error("Failed to fetch reviews.");
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       toast.error("An error occurred while fetching reviews.");
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/peerReviews", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         toast.success("Review submitted successfully!");
//         fetchReviews(); // Refresh the list of reviews
//         setFormData({ thesisId: "", comments: "", rating: "" });
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error || "Failed to submit review.");
//       }
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       toast.error("An error occurred while submitting the review.");
//     }
//   };

//   return (
//     <section className="container mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center text-gray-400">Peer Reviews</h2>

//       {/* List of Reviews */}
//       <div className="mt-10 max-w-4xl mx-auto">
//         <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content">
//           <h3 className="text-xl font-semibold mb-4 text-white">Recent Reviews</h3>
//           <ul className="space-y-4">
//             {reviews.map((review) => (
//               <li
//                 key={review.id}
//                 className="bg-neutral-focus p-4 rounded-lg shadow-md"
//               >
//                 <p className="text-white">
//                   <strong>Thesis ID:</strong> {review.thesisId}
//                 </p>
//                 <p className="text-white">
//                   <strong>Reviewer:</strong> {review.reviewer.name}
//                 </p>
//                 <p className="text-white">
//                   <strong>Rating:</strong> {review.rating} / 5
//                 </p>
//                 <p className="text-white">
//                   <strong>Comments:</strong> {review.comments}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Reviewed on {new Date(review.reviewedAt).toLocaleDateString()}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Submit Review Form */}
//       <div className="mt-10 max-w-2xl mx-auto">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content"
//         >
//           <h3 className="text-xl font-semibold mb-4 text-white">Submit a Review</h3>
//           <div className="mb-4">
//             <label htmlFor="thesisId" className="block text-white">
//               Thesis ID
//             </label>
//             <input
//               type="number"
//               id="thesisId"
//               name="thesisId"
//               placeholder="Enter thesis ID"
//               value={formData.thesisId}
//               onChange={handleChange}
//               className="input input-bordered w-full bg-neutral-focus text-neutral-content"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="comments" className="block text-white">
//               Comments
//             </label>
//             <textarea
//               id="comments"
//               name="comments"
//               placeholder="Enter comments"
//               value={formData.comments}
//               onChange={handleChange}
//               className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="rating" className="block text-white">
//               Rating (1-5)
//             </label>
//             <input
//               type="number"
//               id="rating"
//               name="rating"
//               placeholder="Enter rating"
//               min="1"
//               max="5"
//               value={formData.rating}
//               onChange={handleChange}
//               className="input input-bordered w-full bg-neutral-focus text-neutral-content"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-full">
//             Submit Review
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default withAuthorization(PeerReview, ["REVIEWER", "ADMIN"]);

// // // export default withAuthorization(SubmitThesis, ["AUTHOR", "Admin"]);

// // "use client";

// // import { useState, useEffect } from "react";
// // import { toast } from "react-hot-toast";

// // const PeerReview = () => {
// //   const [reviews, setReviews] = useState([]);
// //   const [formData, setFormData] = useState({
// //     thesisId: "",
// //     comments: "",
// //     rating: "",
// //   });

// //   // Fetch all reviews from the server
// //   const fetchReviews = async () => {
// //     try {
// //       const response = await fetch("/api/peerReviews");
// //       if (response.ok) {
// //         const data = await response.json();
// //         setReviews(data.reviews);
// //       } else {
// //         toast.error("Failed to fetch reviews.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching reviews:", error);
// //       toast.error("An error occurred while fetching reviews.");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchReviews();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("/api/peerReviews", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         toast.success("Review submitted successfully!");
// //         fetchReviews(); // Refresh the list of reviews
// //         setFormData({ thesisId: "", comments: "", rating: "" });
// //       } else {
// //         const errorData = await response.json();
// //         toast.error(errorData.error || "Failed to submit review.");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting review:", error);
// //       toast.error("An error occurred while submitting the review.");
// //     }
// //   };

// //   return (
// //     <section className="container mx-auto px-4 py-16">
// //       <h2 className="text-3xl font-bold text-center text-gray-400">Peer Reviews</h2>

// //       {/* List of Reviews */}
// //       <div className="mt-10 max-w-4xl mx-auto">
// //         <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content">
// //           <h3 className="text-xl font-semibold mb-4 text-white">Recent Reviews</h3>
// //           <ul className="space-y-4">
// //             {reviews.map((review) => (
// //               <li
// //                 key={review.id}
// //                 className="bg-neutral-focus p-4 rounded-lg shadow-md"
// //               >
// //                 <p className="text-white">
// //                   <strong>Thesis ID:</strong> {review.thesisId}
// //                 </p>
// //                 <p className="text-white">
// //                   <strong>Reviewer:</strong> {review.reviewer.name}
// //                 </p>
// //                 <p className="text-white">
// //                   <strong>Rating:</strong> {review.rating} / 5
// //                 </p>
// //                 <p className="text-white">
// //                   <strong>Comments:</strong> {review.comments}
// //                 </p>
// //                 <p className="text-sm text-gray-500">
// //                   Reviewed on {new Date(review.reviewedAt).toLocaleDateString()}
// //                 </p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Submit Review Form */}
// //       <div className="mt-10 max-w-2xl mx-auto">
// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content"
// //         >
// //           <h3 className="text-xl font-semibold mb-4 text-white">Submit a Review</h3>
// //           <div className="mb-4">
// //             <label htmlFor="thesisId" className="block text-white">
// //               Thesis ID
// //             </label>
// //             <input
// //               type="number"
// //               id="thesisId"
// //               name="thesisId"
// //               placeholder="Enter thesis ID"
// //               value={formData.thesisId}
// //               onChange={handleChange}
// //               className="input input-bordered w-full bg-neutral-focus text-neutral-content"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="comments" className="block text-white">
// //               Comments
// //             </label>
// //             <textarea
// //               id="comments"
// //               name="comments"
// //               placeholder="Enter comments"
// //               value={formData.comments}
// //               onChange={handleChange}
// //               className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="rating" className="block text-white">
// //               Rating (1-5)
// //             </label>
// //             <input
// //               type="number"
// //               id="rating"
// //               name="rating"
// //               placeholder="Enter rating"
// //               min="1"
// //               max="5"
// //               value={formData.rating}
// //               onChange={handleChange}
// //               className="input input-bordered w-full bg-neutral-focus text-neutral-content"
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary w-full">
// //             Submit Review
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PeerReview;

"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { withAuthorization } from "../../hoc/withAuthorization";

const PeerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    thesisId: "",
    comments: "",
    rating: "",
  });

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
    fetchReviews();
  }, []);

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

  return (
    <section className="container mx-auto px-6 py-12 min-h-screen bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-8">
        Peer Reviews
      </h2>

      {/* List of Reviews */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Recent Reviews</h3>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="bg-gray-700 p-5 rounded-lg shadow-md text-gray-100"
                >
                  <p>
                    <strong>Thesis ID:</strong> {review.thesisId}
                  </p>
                  <p>
                    <strong>Reviewer:</strong> {review.reviewer?.name || "Anonymous"}
                  </p>
                  <p>
                    <strong>Rating:</strong> {review.rating} / 5
                  </p>
                  <p>
                    <strong>Comments:</strong> {review.comments}
                  </p>
                  <p className="text-sm text-gray-400">
                    Reviewed on{" "}
                    {new Date(review.reviewedAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No reviews available yet.</p>
          )}
        </div>
      </div>

      {/* Submit Review Form */}
      <div className="mt-12 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Submit a Review</h3>
          <div className="mb-6">
            <label
              htmlFor="thesisId"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
              Thesis ID
            </label>
            <input
              type="number"
              id="thesisId"
              name="thesisId"
              placeholder="Enter thesis ID"
              value={formData.thesisId}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="comments"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Enter comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="rating"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
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
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-gray-100 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default withAuthorization(PeerReview, ["REVIEWER", "ADMIN"]);

