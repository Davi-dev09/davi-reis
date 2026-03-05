'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const projects = [
  {
    id: '1',
    title: 'SaaS Analytics Platform',
    description: 'Plataforma completa de analytics em tempo real com dashboard intuitivo.',
    category: 'Web Application',
    image: 'https://via.placeholder.com/600x400?text=SaaS+Analytics',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    result: '+300% em performance',
  },
  {
    id: '2',
    title: 'E-commerce Luxury Brand',
    description: 'Loja online de alta-end com design minimalista e experiência premium.',
    category: 'E-commerce',
    image: 'https://via.placeholder.com/600x400?text=Luxury+Ecommerce',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    result: '+450% em vendas',
  },
  {
    id: '3',
    title: 'Digital Marketing Agency Website',
    description: 'Website moderno e responsivo para agência de marketing com portfólio interativo.',
    category: 'Corporate',
    image: 'https://via.placeholder.com/600x400?text=Marketing+Agency',
    technologies: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    result: '+250% em leads',
  },
  {
    id: '4',
    title: 'FinTech Mobile App',
    description: 'Aplicação financeira com interface intuitiva e segurança de ponta.',
    category: 'FinTech',
    image: 'https://via.placeholder.com/600x400?text=FinTech+App',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    result: '+180% em user retention',
  },
  {
    id: '5',
    title: 'SaaS Project Management',
    description: 'Ferramenta de gerenciamento de projetos colaborativa com real-time sync.',
    category: 'SaaS',
    image: 'https://via.placeholder.com/600x400?text=Project+Management',
    technologies: ['Next.js', 'WebSockets', 'PostgreSQL'],
    result: '+500% em produtividade',
  },
  {
    id: '6',
    title: 'Personal Branding Landing Page',
    description: 'Landing page de alto impacto com design moderno e conversão otimizada.',
    category: 'Landing Page',
    image: 'https://via.placeholder.com/600x400?text=Personal+Brand',
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    result: '+600% em conversão',
  },
]

const categories = ['Todos', 'Web Application', 'E-commerce', 'Corporate', 'SaaS', 'Landing Page', 'FinTech']

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Portfólio</span> de projetos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Projetos em que deixei minha marca, com foco em qualidade e resultados
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl glass hover:border-blue-500/50 transition-all"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                      >
                        Ver Projeto
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-blue-400 font-medium">{project.category}</p>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-sm font-semibold text-green-400">
                      Resultado: {project.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}