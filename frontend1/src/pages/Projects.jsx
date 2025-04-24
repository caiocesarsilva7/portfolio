import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestão de Tarefas",
      description: "API RESTful com autenticação JWT e Spring Security",
      tech: ["Java 17", "Spring Boot 3", "H2", "JWT"],
      link: "https://github.com/seuuser/task-manager" // Link real do projeto
    },
    {
      title: "Plataforma E-Commerce",
      description: "Microsserviços com Spring Cloud e Docker",
      tech: ["Spring Cloud", "RabbitMQ", "Docker", "OAuth2"],
      link: "https://github.com/seuuser/ecommerce-platform" // Link real do projeto
    }
  ]

  return (
    <section className="projects-page">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}