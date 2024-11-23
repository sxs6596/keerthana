import React from "react";
import Navbar from "./Navbar"; // Make sure the path is correct

const AboutUs = () => {
  return (
    <div data-theme="dark">
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-400 text-center">
          About Us
        </h2>
        <div className="mt-10 max-w-4xl mx-auto bg-neutral p-8 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
          <p className="leading-loose">
            Welcome to the Digital Thesis Repository. Our mission is to provide
            a centralized platform for storing and showcasing academic theses
            from various disciplines. We aim to make academic research
            accessible to a global audience, fostering knowledge sharing and
            collaboration.
          </p>
          <p className="leading-loose mt-4">
            Our team consists of dedicated professionals and researchers who are
            passionate about promoting academic excellence and making research
            available to everyone. We are committed to providing a user-friendly
            platform that supports searching, submitting, and reviewing academic
            work.
          </p>
          <p className="leading-loose mt-4">
            Thank you for visiting our repository, and we hope you find it
            valuable for your academic endeavors.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        {/* 
        Amulya Mekala
Keerthana Metpally
Kevin binu Mathew
Venkata keerthi Matta
Vamsikrishna Malineni
        */}
        <h2 className="text-3xl font-bold text-gray-400 text-center">
          Meet the Team
        </h2>
        <h2 className="text-3xl font-bold text-gray-400 text-center mt-2">you can reach us : team7@gmail.com</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-neutral p-8 rounded-lg shadow-lg shadow-indigo-500/50 text-neutral-content">
            <h3 className="text-xl font-bold text-gray-400">Amulya Mekala</h3>
            <p className="mt-2 text-gray-400">Developer</p>
            {/* TODO */}
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* TODO */}
          <div className="bg-neutral p-8 rounded-lg shadow-lg shadow-indigo-500/50 text-neutral-content">
            <h3 className="text-xl font-bold text-gray-400">
              Keerthana Metpally
            </h3>
            <p className="mt-2 text-gray-400">Developer</p>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* TODO */}

          <div className="bg-neutral p-8 rounded-lg shadow-lg shadow-indigo-500/50 text-neutral-content">
            <h3 className="text-xl font-bold text-gray-400">
              Venkata keerthi Matta
            </h3>
            <p className="mt-2 text-gray-400">Developer</p>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-neutral p-8 rounded-lg shadow-lg shadow-indigo-500/50 text-neutral-content">
            <h3 className="text-xl font-bold text-gray-400">
            Kevin binu Mathew
            </h3>
            <p className="mt-2 text-gray-400">Developer</p>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* TODO */}
          <div className="bg-neutral p-8 rounded-lg shadow-lg shadow-indigo-500/50 text-neutral-content">
            <h3 className="text-xl font-bold text-gray-400">
              Vamsikrishna Malineni
            </h3>
            <p className="mt-2 text-gray-400">Developer</p>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      {/* TODO */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-400 text-center">
          History & Development
        </h2>
        <div className="mt-10 max-w-4xl mx-auto bg-neutral p-8 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
          <p className="leading-loose">
            The Digital Thesis Repository project was initiated with the goal of
            providing a centralized platform for managing academic theses and
            dissertations. Its primary objectives included simplifying the
            process of storing, searching, and retrieving academic works,
            facilitating peer review, and providing statistical insights into
            thesis usage, such as views and downloads. The development of the
            system involved defining clear roles and relationships between key
            entities, as outlined in the Entity-Relationship (ER) Diagram.
            Entities like "Author," "Thesis," "User," "Review," and "Statistics"
            were created to ensure a structured and efficient database design,
            with each thesis linked to corresponding authors, reviewers, and
            statistics. The architecture of the repository was built around a
            database schema that supported the management of theses with an
            emphasis on metadata, user roles, and statistics. Throughout its
            development, the repository was designed to be user-friendly,
            incorporating advanced search capabilities and submission guidelines
            to ensure consistency and ease of access. Several development roles
            were critical in bringing the project to life, including front-end
            and back-end developers, a database administrator, content managers,
            and data analysts. These roles ensured that both the user interface
            and database functions worked seamlessly together, creating a
            platform that met the needs of academic institutions, students, and
            researchers alike.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
