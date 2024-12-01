import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Envoyer les données sous forme d'objet avec les clés correspondantes à votre template
    emailjs
      .send(
        'service_ox87fng', // Remplacez par votre Service ID
        'template_46805w8', // Remplacez par votre Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'Bv7myfnb82gOyGu6G' // Clé publique (Public Key)
      )
      .then(
        () => setStatus('Message envoyé avec succès!'),
        () => setStatus('Erreur lors de l\'envoi du message')
      );

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-black text-white py-6 px-6 border-4 border-blue-400 rounded-lg max-w-4xl mx-auto">
      <div className="max-w-4xl py-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
          />
          <button type="submit" className="px-4 py-2 bg-blue-400 text-black font-semibold rounded-lg">
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
