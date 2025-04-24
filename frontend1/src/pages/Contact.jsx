import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/caio-cesar-1175811b6/",
      type: "link"
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/caiocesarsilva7",
      type: "link"
    },
    {
      title: "E-mail",
      icon: <FaEnvelope />,
      link: "mailto:caiocesarsilva7@example.com",
      type: "email"
    }
  ];

  return (
    <section className="contact-page">
      <h2>Contato</h2>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a 
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">{contact.icon}</div>
            <h3>{contact.title}</h3>
            {contact.type === 'email' ? (
              <p>caiocesarsilva7@gmail.com</p>
            ) : (
              <p>{contact.link.replace('https://', '').split('/')[0]}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}