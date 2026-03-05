'use client'

import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const skills = [
  'Desenvolvimento Full-Stack',
  'Design Responsivo',
  'Performance Web',
  'Segurança Digital',
  'SEO Avançado',
  'Arquitetura de Sistemas',
  'Otimização de Conversão',
  'Desenvolvimento Ágil',
]

const expertise = [
  {
    title: 'Frontend Moderno',
    description: 'React, Next.js, TypeScript e design systems escaláveis com TailwindCSS.',
  },
  {
    title: 'Backend Robusto',
    description: 'Node.js, APIs RESTful e GraphQL com arquitetura limpa e performance.',
  },
  {
    title: 'Bancos de Dados',
    description: 'PostgreSQL, MongoDB e otimização de queries para máxima eficiência.',
  },
  {
    title: 'DevOps & Deployment',
    description: 'Docker, CI/CD, AWS e Vercel para deployments seguros e automáticos.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <div className="space-y-20">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Sobre mim</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Desenvolvedor com mais de 8 anos de experiência transformando ideias em
              produtos digitais de alto impacto
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Minha missão é criar experiências digitais que não apenas funcionam
                perfeitamente, mas que transformam o modo como as pessoas interagem com
                a tecnologia. Acredito que código bom é código elegante, eficiente e
                feito com propósito.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Especializei-me em construir plataformas escaláveis que crescem com seu
                negócio, sempre mantendo foco em performance, segurança e experiência do
                usuário excepcional.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Quando não estou codificando, estou aprendendo novas tecnologias,
                contribuindo para open source ou ajudando outros desenvolvedores a
                crescerem profissionalmente.
              </p>
            </div>

            {/* Right - Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-4 glass rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="glass p-8 rounded-xl hover:border-blue-500/50 transition-colors group"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}