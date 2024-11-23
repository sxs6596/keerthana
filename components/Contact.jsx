import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-400 text-center">Contact Us</h2>
      <div className="mt-10 max-w-2xl mx-auto">
        <form className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-400 text-center">Frequently Asked Questions</h3>
        <div className="mt-8 max-w-3xl mx-auto bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
          <div className="mb-4">
            <h4 className="font-semibold text-white">1. What is the purpose of the Digital Thesis Repository?</h4>
            <p className="text-gray-300">The repository serves as a centralized platform for storing, accessing, and showcasing theses and dissertations, with additional functionalities like peer review and usage statistics.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">2. How can I submit my thesis?</h4>
            <p className="text-gray-300">To submit your thesis, you can navigate to the "Submit Thesis" page, where you will find submission guidelines and a form for uploading your thesis.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">3. Who can access the theses in the repository?</h4>
            <p className="text-gray-300">All users can browse and view publicly available theses. However, certain theses might have restricted access based on the author’s preferences.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">4. How is the peer review process handled?</h4>
            <p className="text-gray-300">Peer reviews can be conducted through the "Peer Review" section. Users can leave feedback and comments on the theses after logging in.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">5. Can I track the popularity of my thesis?</h4>
            <p className="text-gray-300">Yes, the repository provides statistical insights, including the number of views and downloads for each thesis. You can access these statistics through the "Statistics" page.</p>
          </div>
        </div>
      </div>
      {/* You can reach us :  */}
           <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-400 text-center">You can reach us :</h3>
        <div className="mt-8 max-w-3xl mx-auto bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
          <div className="mb-4">
            <h4 className="font-semibold text-white">1. Email</h4>
            <p className="text-gray-300">Email: team7@gmail.com</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">2. Phone</h4>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-white">3. Address</h4>
            <p className="text-gray-300">Address: 123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
