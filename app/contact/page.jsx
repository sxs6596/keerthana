// const ContactPage = () => {
//     return (
//       <section className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-gray-400 text-center">Contact Us</h2>
//         <div className="mt-10 max-w-2xl mx-auto">
//           <form
//             action="/api/contact" // API route to handle form submission
//             method="POST"
//             className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
//           >
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-white">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="input input-bordered w-full bg-neutral-focus text-neutral-content"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-white">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full bg-neutral-focus text-neutral-content"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-white">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Enter your message"
//                 className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
  
//         {/* FAQ Section */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-gray-400 text-center">
//             Frequently Asked Questions
//           </h3>
//           <div className="mt-8 max-w-3xl mx-auto bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">
//                 1. What is the purpose of the Digital Thesis Repository?
//               </h4>
//               <p className="text-gray-300">
//                 The repository serves as a centralized platform for storing,
//                 accessing, and showcasing theses and dissertations, with
//                 additional functionalities like peer review and usage statistics.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">2. How can I submit my thesis?</h4>
//               <p className="text-gray-300">
//                 To submit your thesis, navigate to the "Submit Thesis" page, where
//                 you will find submission guidelines and a form for uploading your
//                 thesis.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">
//                 3. Who can access the theses in the repository?
//               </h4>
//               <p className="text-gray-300">
//                 All users can browse and view publicly available theses. Certain
//                 theses might have restricted access based on the author’s
//                 preferences.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">
//                 4. How is the peer review process handled?
//               </h4>
//               <p className="text-gray-300">
//                 Peer reviews can be conducted through the "Peer Review" section.
//                 Users can leave feedback and comments on theses after logging in.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">
//                 5. Can I track the popularity of my thesis?
//               </h4>
//               <p className="text-gray-300">
//                 Yes, the repository provides statistical insights, including the
//                 number of views and downloads for each thesis. You can access
//                 these statistics through the "Statistics" page.
//               </p>
//             </div>
//           </div>
//         </div>
  
//         {/* Contact Information */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-gray-400 text-center">
//             You can reach us:
//           </h3>
//           <div className="mt-8 max-w-3xl mx-auto bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50">
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">1. Email</h4>
//               <p className="text-gray-300">Email: team7@gmail.com</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">2. Phone</h4>
//               <p className="text-gray-300">Phone: (123) 456-7890</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold text-white">3. Address</h4>
//               <p className="text-gray-300">123 Main St, Anytown, USA</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default ContactPage;
const ContactPage = () => {
  return (
    <section className="container mx-auto px-6 py-12 min-h-screen bg-gray-900">
      {/* Contact Us Heading */}
      <h2 className="text-4xl font-extrabold text-gray-100 text-center">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          action="/api/contact"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-md shadow-indigo-500/50 text-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-100">Send us a Message</h3>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-gray-100 font-bold rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-100 text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md shadow-indigo-500/50">
          {[
            {
              question: "What is the purpose of the Digital Thesis Repository?",
              answer:
                "The repository serves as a centralized platform for storing, accessing, and showcasing theses and dissertations, with additional functionalities like peer review and usage statistics.",
            },
            {
              question: "How can I submit my thesis?",
              answer:
                "To submit your thesis, navigate to the 'Submit Thesis' page, where you will find submission guidelines and a form for uploading your thesis.",
            },
            {
              question: "Who can access the theses in the repository?",
              answer:
                "All users can browse and view publicly available theses. Certain theses might have restricted access based on the author’s preferences.",
            },
            {
              question: "How is the peer review process handled?",
              answer:
                "Peer reviews can be conducted through the 'Peer Review' section. Users can leave feedback and comments on theses after logging in.",
            },
            {
              question: "Can I track the popularity of my thesis?",
              answer:
                "Yes, the repository provides statistical insights, including the number of views and downloads for each thesis. You can access these statistics through the 'Statistics' page.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                {index + 1}. {faq.question}
              </h4>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-100 text-center mb-8">
          You can reach us:
        </h3>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md shadow-indigo-500/50">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-100 mb-2">1. Email</h4>
            <p className="text-gray-300">team7@gmail.com</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-100 mb-2">2. Phone</h4>
            <p className="text-gray-300">(123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-100 mb-2">3. Address</h4>
            <p className="text-gray-300">123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
