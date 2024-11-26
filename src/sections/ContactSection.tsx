

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-6 px-6 border-4 border-blue-400 rounded-lg max-w-4xl mx-auto"
    data-aos="fade-up"
      data-aos-duration="1000" >
      <div className="max-w-4xl py-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
        <p className="text-lg font-semibold mb-6">
          Envoyez moi un message, <span className="text-blue-400">Je serai ravi de vous répondre 👋</span>
        </p>
        <form className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
