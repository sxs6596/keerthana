import AboutTeamCard from '../../components/AboutTeamCard';

const AboutPage = () => {
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
        <h2 className="text-3xl font-bold text-gray-400 text-center">
          Meet the Team
        </h2>
        <h2 className="text-3xl font-bold text-gray-400 text-center mt-2">
          You can reach us at: team7@gmail.com
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <AboutTeamCard
            name="Amulya Mekala"
            role="Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <AboutTeamCard
            name="Keerthana Metpally"
            role="Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <AboutTeamCard
            name="Venkata Keerthi Matta"
            role="Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <AboutTeamCard
            name="Kevin Binu Mathew"
            role="Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <AboutTeamCard
            name="Vamsikrishna Malineni"
            role="Developer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>

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
            thesis usage, such as views and downloads.
          </p>
          <p className="leading-loose mt-4">
            The development of the system involved defining clear roles and
            relationships between key entities, as outlined in the
            Entity-Relationship (ER) Diagram. Entities like "Author," "Thesis,"
            "User," "Review," and "Statistics" were created to ensure a
            structured and efficient database design.
          </p>
          <p className="leading-loose mt-4">
            The architecture of the repository was built around a database
            schema that supported the management of theses with an emphasis on
            metadata, user roles, and statistics. Throughout its development,
            the repository was designed to be user-friendly, incorporating
            advanced search capabilities and submission guidelines to ensure
            consistency and ease of access.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
