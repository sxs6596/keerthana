import React from 'react';

const theses = [
  { title: 'Thesis Title 1', description: 'This is a brief description of the thesis, explaining its focus and key takeaways.' },
  { title: 'Thesis Title 2', description: 'This is a brief description of the thesis, explaining its focus and key takeaways.' },
  { title: 'Thesis Title 3', description: 'This is a brief description of the thesis, explaining its focus and key takeaways.' }
];

const FeaturedTheses = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-400 text-center">Featured Theses</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {theses.map((thesis, index) => (
          <div key={index} className="bg-gray-800 text-gray-200 rounded-lg shadow-lg shadow-indigo-500/50 p-6">
            <h3 className="text-xl font-bold text-gray-400">{thesis.title}</h3>
            <p className="mt-2 text-gray-400">{thesis.description}</p>
            <a href="#" className="mt-4 inline-block text-indigo-400 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTheses;
