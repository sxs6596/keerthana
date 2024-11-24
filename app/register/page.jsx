"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "AUTHOR", // Default role
  });

  const router = useRouter();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);

    try {
      // Make a POST request to the backend register endpoint
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the backend
      if (response.ok) {
        const data = await response.json();
        toast.success("You have successfully registered.");

        // Redirect to login page after successful registration
        router.push("/login");
      } else {
        // If the response is not ok, extract the error message
        const errorData = await response.json();
        console.error("Backend error:", errorData);
        toast.error(errorData.error || "Registration failed");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      toast.error("An error occurred. Please try again later.");
    }

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "AUTHOR",
    });
  };

  return (
    <section className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          Register
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-200">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="AUTHOR">Author</option>
              <option value="REVIEWER">Reviewer</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md font-medium"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
