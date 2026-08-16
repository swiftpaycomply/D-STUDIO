import '../styles/Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Trading Platform Suite',
      category: 'Platform',
      description: 'Enterprise trading platform with real-time data processing and order management.',
      technologies: ['Node.js', 'React', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    },
    {
      id: 2,
      title: 'Casino Management System',
      category: 'Enterprise',
      description: 'Comprehensive casino operations and player management system.',
      technologies: ['Node.js', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    },
    {
      id: 3,
      title: 'Media Generation Engine',
      category: 'AI/ML',
      description: 'AI-powered content and image generation service.',
      technologies: ['Python', 'TensorFlow', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'Platform',
      description: 'Full-featured e-commerce solution with payment integration.',
      technologies: ['React', 'Node.js', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      description: 'Real-time analytics and reporting dashboard.',
      technologies: ['React', 'D3.js', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    },
    {
      id: 6,
      title: 'Mobile App',
      category: 'Mobile',
      description: 'Cross-platform mobile application for iOS and Android.',
      technologies: ['React Native', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      clientLink: null,
      clientLabel: 'Client demo available on request'
    }
  ]

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  return (
    <>
      <section className="projects-hero">
        <p className="eyebrow">
          <span className="dot"></span>OUR WORK
        </p>
        <h1>Project Portfolio</h1>
        <p>Illustrative case studies and reference builds that show our technical capabilities. We present work with context, evidence, and clear scope.</p>
      </section>

      <section className="projects-grid">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-media">
                <img src={project.image} alt={`${project.title} preview`} />
                <video controls muted loop playsInline poster={project.image}>
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>

              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              {project.clientLink ? (
                <a href={project.clientLink} className="project-link" target="_blank" rel="noreferrer">Try client demo →</a>
              ) : (
                <span className="project-link muted-link">{project.clientLabel}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
