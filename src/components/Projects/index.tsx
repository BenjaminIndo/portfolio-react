import './index.scss'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
interface Project {
  title: string
  subtitle: string
  technologies: string[]
  description: string[]
  link: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  const handleCardClick = (project: Project): void => {
    setSelectedProject(project)
    setOpen(true)
  }
  const handleClose = () => {
    setSelectedProject(null)
    setOpen(false)
  }

  const projects: Project[] = [
    {
      title:
        'Eventos Beauchef - Plataforma de Gestión de Eventos Universitarios',
      subtitle: 'Proyecto grupal de Ingeniería de Software | 2025',
      technologies: ['Django 3.2', 'SQLite', 'JavaScript', 'Git', 'GitHub'],
      description: [
        'Desarrollo de una aplicación Web implementando un sistema de login con roles (asistente/organizador)',
        'Diseño de interfaz personalizada por rol y uso de control de versiones',
        'Trabajo colaborativo en equipo de 6 integrantes aplicando metodologías ágiles de desarrollo',
      ],
      link: 'https://copy-eventos-beauchef.onrender.com/',
    },
    {
      title: 'Clasificación de Rendimiento Estudiantil',
      subtitle: 'Proyecto grupal de Minería de Datos | 2025',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      description: [
        'Desarrollo y evaluación de modelos de clasificación para predecir el rendimiento académico',
        'Implementación específica de la solución a la pregunta 2: Predicción de Calificación Final',
        'Aplicación de técnicas de validación para asegurar la precisión del modelo',
        'Trabajo colaborativo en equipo de 4 integrantes',
      ],
      link: 'https://colab.research.google.com/drive/1HkGdPb9Iyio1EzS4GEaVdNsg0bbTkuvg?usp=sharing',
    },
    {
      title: 'Final Reality Tactics',
      subtitle:
        'Proyecto individual en Scala de Metodologías de Diseño y Programación | 2024',
      technologies: ['Scala', 'OOP', 'Design Patterns'],
      description: [
        'Desarrollo de simulación de juego por turnos inspirado en Final Fantasy',
        'Enfocado en OOP y diseño basado en patrones',
        'Estructuración del código modular y testeable, con clases reutilizables y documentación',
      ],
      link: 'https://github.com/BenjaminIndo/tarea-0-BenjaminIndo-publico',
    },
    {
      title: 'Diseño e Implementación de Base de Datos Educacional',
      subtitle: 'Proyecto grupal de Bases de Datos | 2024',
      technologies: ['PostgreSQL', 'SQL', 'Modelado ER'],
      description: [
        'Modelado entidad-relación y relacional de datos académicos de estudiantes en Chile',
        'Desarrollo de esquema relacional completo con datos reales de datos.gob.cl',
        'Creación de índices y vistas materializadas para optimizar consultas analíticas',
        'Diseño e implementación de consultas parametrizadas para prevenir inyección SQL',
        'Desarrollo colaborativo en equipo de 4 integrantes',
      ],
      link: 'https://docs.google.com/document/d/1wn6yqD7bVIcIiHb4r6yZ_rxZIwCHjcQN6VH5nYLDmFI/edit?usp=sharing',
    },
  ]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <Typography variant="h2" component="h1" className="projects-title">
          Proyectos
        </Typography>
        <Typography variant="h5" component="h2" className="projects-subtitle">
          Experiencia Académica
        </Typography>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="project-card-small"
            elevation={0}
            variant="outlined"
            onClick={() => handleCardClick(project)}
          >
            <CardContent className="card-content-small">
              <Typography
                variant="h6"
                component="h3"
                className="project-title-small"
              >
                {project.title}
              </Typography>
              <Typography variant="body2" className="project-year">
                {project.subtitle.split('|')[1]?.trim()}
              </Typography>
              <Box className="tech-preview">
                {project.technologies.slice(0, 2).map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    className="tech-chip-small"
                    size="small"
                    variant="outlined"
                  />
                ))}
                {project.technologies.length > 2 && (
                  <span className="tech-more">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className="project-modal">
          <Box className="modal-content">
            {selectedProject ? (
              <>
                <div className="modal-header">
                  <Typography
                    variant="h4"
                    component="h2"
                    className="modal-title"
                  >
                    {selectedProject.title}
                  </Typography>
                  <IconButton onClick={handleClose} className="close-button">
                    <CloseIcon />
                  </IconButton>
                </div>
                <Box className="modal-technologies">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      className="tech-chip-modal"
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#264fa3',
                        border: '2px solid #274fa3',
                        backgroundColor: 'transparent',
                        fontWeight: 600,
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.9rem',
                        letterSpacing: '0.5px',
                      }}
                    />
                  ))}
                </Box>
                <Box className="modal-description">
                  <Typography variant="h6" className="description-title">
                    Descripción del Proyecto
                  </Typography>
                  {selectedProject.description.map((item, itemIndex) => (
                    <Typography
                      key={itemIndex}
                      variant="body1"
                      className="description-item-modal"
                    >
                      • {item}
                    </Typography>
                  ))}
                </Box>

                <Box className="modal-link">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-modal"
                  >
                    <OpenInNewIcon className="link-icon" />
                    Ver Proyecto
                  </a>
                </Box>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Projects
