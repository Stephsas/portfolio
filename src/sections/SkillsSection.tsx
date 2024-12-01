import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiSass, SiDocker, SiVite, SiGitlab, SiExpress, SiSequelize } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-gray-200 py-16 px-8" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-center text-4xl font-bold mb-10">About Me</h1>
      <p className="text-center text-lg text-gray-400 mb-20 mx-auto max-w-4xl">
        Je suis une développeuse passionnée, spécialisée dans les technologies modernes comme React, Node.js, et bien d'autres. 
        J'aime créer des applications web performantes et évolutives tout en mettant l'accent sur l'expérience utilisateur.
        Je suis toujours à la recherche de projets intéressants pour continuer à apprendre et m'améliorer. Si vous avez un projet sur lequel vous souhaitez collaborer, n’hésitez pas à me contacter !
      </p>
      <h2 className="text-center text-3xl font-bold mb-8">Professional Skillset</h2>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="relative group">
          <FaJsSquare size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            JavaScript
          </span>
        </div>
        <div className="relative group">
  <SiTypescript size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Typescript
  </span>
</div>
        <div className="relative group">
          <FaNodeJs size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Node.js
          </span>
        </div>
        <div className="relative group">
          <FaReact size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            React
          </span>
        </div>
        <div className="relative group">
          <FaCss3Alt size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            CSS3
          </span>
        </div>
        <div className="relative group">
          <FaHtml5 size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            HTML5
          </span>
        </div>
        <div className="relative group">
          <SiTailwindcss size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tailwind CSS
          </span>
        </div>
        <div className="relative group">
  <SiSass size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Sass
  </span>
</div>
<div className="relative group">
  <SiPostgresql size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    PostgreSQL
  </span>
</div>
<div className="relative group">
  <SiMongodb size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    MongoDB
  </span>
</div>
<div className="relative group">
  <FaGitAlt size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Git
  </span>
</div>
<div className="relative group">
  <FaGithub size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    GitHub
  </span>
</div>
<div className="relative group">
  <SiGitlab size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    GitLab
  </span>
</div>
<div className="relative group">
  <SiExpress size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Express
  </span>
</div>
<div className="relative group">
  <SiSequelize size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Sequelize
  </span>
</div>
<div className="relative group">
  <SiNextdotjs size={50} />
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    NextJs
  </span>
</div>

      </div>

      <h2 className="text-center text-3xl font-bold mt-16 mb-8">Tools</h2>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="relative group">
          <VscCode size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            VsCode
          </span>
        </div>
        <div className="relative group">
          <SiDocker size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Docker
          </span>
        </div>
        <div className="relative group">
          <SiVite size={50} />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Vite
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
