// Fetch data from the API route dynamically
async function fetchTheses() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/theses`, {
      cache: "no-store", // Prevent caching for dynamic updates
    });
    return res.json();
  }
  
  export default async function FeaturedThesesPage() {
    const theses = await fetchTheses();
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-400 text-center">
          Featured Theses
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {theses.length > 0 ? (
            theses.map((thesis) => (
              <div
                key={thesis.id}
                className="bg-gray-800 text-gray-200 rounded-lg shadow-lg shadow-indigo-500/50 p-6"
              >
                <h3 className="text-xl font-bold text-gray-400">{thesis.title}</h3>
                <p className="mt-2 text-gray-400">{thesis.abstract}</p>
                <a
                  href={`/thesis/${thesis.id}`}
                  className="mt-4 inline-block text-indigo-400 hover:underline"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">
              No featured theses available.
            </p>
          )}
        </div>
      </section>
    );
  }
  