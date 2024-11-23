const LatestUpdates = () => {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-400 text-center">
          Latest Updates
        </h2>
        <div className="mt-10 bg-gray-800 text-gray-200 rounded-lg shadow-lg shadow-indigo-500/50 p-6 animated-border">
          <ul className="list-disc list-inside mt-4">
            {[
              "Thesis Update: New Submission",
              "Repository Usage Insights",
              "Peer Review Updates",
              "System Maintenance Notice",
              "New Templates Released",
              "Most Downloaded Theses of the Month",
            ].map((feed, index) => (
              <li key={index} className="mt-2 text-gray-400 text-xl text-semibold">
                {feed}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default LatestUpdates;
  