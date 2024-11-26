

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white text-center"
    data-aos="fade-up"
    data-aos-duration="800"
    
       >
      <h2 className="text-3xl font-bold mb-4">Projets</h2>
      <div className="flex justify-center space-x-8">
        {/* Repeat for multiple projects */}
        <div className="w-64 bg-gray-800 p-4 rounded-lg">
          <img src="/public/ocoffee.png" alt="Project Name" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold">Projets Github</h3>
          <p className="text-sm mb-4"></p>
          <a href="https://github.com/Stephsas" className="text-blue-500 cursor-pointer">Voir les projets</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
