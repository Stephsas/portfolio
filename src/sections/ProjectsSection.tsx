import { useState } from 'react';

const ProjectsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOpenVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section
      id="projects"
      className="py-16 bg-black text-white text-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className="text-3xl font-bold mb-4">Projets</h2>
      <div className="flex justify-center space-x-8">
        {/* Project: Github */}
        <div className="w-64 bg-gray-800 p-4 rounded-lg">
          <img
            src="/ocoffee.png?v=1"
            alt="Project Name"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold">Projets Github</h3>
          <a
            href="https://github.com/Stephsas"
            className="text-blue-500 cursor-pointer"
          >
            Voir les projets
          </a>
        </div>

        {/* Project: CinéDélices */}
        <div className="w-64 bg-gray-800 p-4 rounded-lg">
          <img
            src="/accueil.png?v=1"
            alt="Project Name"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold">Projet CinéDélices</h3>
          <a
            onClick={handleOpenVideo}
            className="text-blue-500 cursor-pointer"
          >
            Voir le projet
          </a>
        </div>
      </div>

      {/* Modal for Video */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl">
            <button
              onClick={handleCloseVideo}
              className="text-white font-bold float-right"
            >
              X
            </button>
            <video
              src="/Cinedélices1.mp4"
              controls
              className="w-full rounded-md"
            ></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
