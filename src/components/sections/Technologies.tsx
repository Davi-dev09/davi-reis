'use client'

import {
  Code2,
  Database,
  Zap,
  Server,
  Layers,
  Shield,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

const techGroups = [
  {
    title: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    technologies: ['React', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    technologies: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Bancos de Dados',
    icon: <Database className="w-6 h-6" />,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Zap className="w-6 h-6" />,
    technologies: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'GitHub Actions'],
  },
  {
    title: 'Ferramentas',
    icon: <Layers className="w-6 h-6" />,
    technologies: ['Git', 'Webpack', 'Vite', 'NPM', 'Linux'],
  },
  {
    title: 'Segurança',
    icon: <Shield className="w-6 h-6" />,
    technologies: ['JWT', 'OAuth 2.0', 'SSL/TLS', 'OWASP', 'Encryption'],
  },
]

export function Technologies() {
  return (
    <section id="tech" className="py-20 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Tecnologias</span> que domino
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stack moderno e as melhores práticas de desenvolvimento
            </p>
          </div>

          {/* Tech Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techGroups.map((group) => (
              <div
                key={group.title}
                className="glass p-8 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors text-blue-400">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                    {group.title}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-300 font-medium text-sm hover:bg-blue-500/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="glass p-8 rounded-xl border border-blue-500/20 text-center space-y-4">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Além disso, estou sempre aprendendo e explorando novas tecnologias para
              entregar as melhores soluções. Especialista em otimização, performance e
              arquitetura escalável.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div>
                <span className="text-blue-400 font-bold">8+ anos</span>
                <p className="text-gray-400">Experiência</p>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <span className="text-blue-400 font-bold">50+ Projetos</span>
                <p className="text-gray-400">Entregues</p>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <span className="text-blue-400 font-bold">100%</span>
                <p className="text-gray-400">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}