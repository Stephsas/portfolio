

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <p>Contactez moi ici : </p>
        <a
          href="mailto:stephanie0marchand@gmail.com"
          className="text-gray-400 cursor-pointer"
        >
          stephanie0marchand@gmail.com
        </a>
      <div className="space-x-4">
        <a href="https://www.linkedin.com/in/stephanie-marchand-dev/" className="text-gray-400 cursor-pointer">LinkedIn</a>
        <a href="https://github.com/Stephsas" className="text-gray-400 cursor-pointer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
