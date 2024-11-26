

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-black text-white flex items-center justify-center text-center"
      data-aos="fade-up"
      data-aos-duration="1000" 
    >
      <div>
        <img
          src="/public/20240507_131804 - Copie.jpg"
          alt="My Profile Picture"
          className="w-45 h-40 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Hi, I'm Stephanie </h1>
        <p className="text-xl">Developpeuse Fullstack</p>
        <p className="mt-2 text-gray-400">I code beautifully simple things, and I love what I do.</p>
      </div>
    </section>
  );
};

export default HeroSection;