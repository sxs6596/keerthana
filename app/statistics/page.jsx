"use client";

import { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [thesisData, setThesisData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/api/statistics");
        if (response.ok) {
          const data = await response.json();
          setThesisData(data);
        } else {
          console.error("Failed to fetch statistics.");
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (isLoading) {
    return <p className="text-center text-white">Loading statistics...</p>;
  }

  if (thesisData.length === 0) {
    return <p className="text-center text-white">No statistics available.</p>;
  }

  // Prepare data for charts
  const barChartData = {
    labels: thesisData.map((thesis) => thesis.title),
    datasets: [
      {
        label: "Views",
        data: thesisData.map((thesis) => thesis.views),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Downloads",
        data: thesisData.map((thesis) => thesis.downloads),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Views", "Downloads"],
    datasets: [
      {
        data: [
          thesisData.reduce((acc, curr) => acc + curr.views, 0),
          thesisData.reduce((acc, curr) => acc + curr.downloads, 0),
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-400 text-center">
        Thesis Statistics Dashboard
      </h2>

      <div className="flex flex-wrap justify-around mt-10 max-w-6xl mx-auto">
        {/* Bar Chart */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-6">
          <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">
            Views vs Downloads (Bar Chart)
          </h3>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>

        {/* Pie Chart */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-6">
          <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">
            Overall Views vs Downloads (Pie Chart)
          </h3>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Thesis Data Table */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-300 mb-4">Thesis Data (Detailed View)</h3>
        <table className="table-auto w-full bg-neutral shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Thesis Title</th>
              <th className="py-3 px-4 text-left">Views</th>
              <th className="py-3 px-4 text-left">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {thesisData.map((thesis, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "border-b border-gray-700" : "border-b bg-neutral-focus"
                }
              >
                <td className="py-3 px-4 text-white">{thesis.title}</td>
                <td className="py-3 px-4 text-white">{thesis.views}</td>
                <td className="py-3 px-4 text-white">{thesis.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Statistics;
