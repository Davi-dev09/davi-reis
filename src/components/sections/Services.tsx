'use client'

import { Code2, Zap, Rocket, BarChart3, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const services = [
  {
    id: '1',
    title: 'Desenvolvimento de Sites Profissionais',
    description: 'Websites modernos, rápidos e escaláveis utilizando as melhores tecnologias do mercado.',
    icon: <Code2 className="w-8 h-8" />,
    features: ['Design responsivo e moderno', 'Otimizado para SEO', 'Performance máxima', 'Integração com CMS'],
  },
  {
    id: '2',
    title: 'Landing Pages de Alta Conversão',
    description: 'Landing pages estratégicas focadas em resultados, com análise de dados e otimização contínua.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Copy persuasivo', 'Otimização de conversão', 'A/B Testing', 'Analytics integrado'],
  },
  {
    id: '3',
    title: 'Sistemas Web Personalizados',
    description: 'Plataformas completas e customizadas para sua empresa com arquitetura robusta.',
    icon: <Rocket className="w-8 h-8" />,
    features: ['Backend robusto', 'Dashboard intuitivo', 'Autenticação segura', 'Escalabilidade garantida'],
  },
  {
    id: '4',
    title: 'Otimização e Performance',
    description: 'Melhora de velocidade, SEO e experiência do usuário em projetos existentes.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Auditoria completa', 'Otimização de código', 'Melhor Core Web Vitals', 'Monitoramento contínuo'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Serviços</span> que entrego
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Soluções completas de desenvolvimento web para empresas que querem crescer
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative glass p-8 rounded-xl hover:border-blue-500/50 transition-all overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors text-blue-400">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-400 font-medium pt-4 group-hover:gap-3 transition-all">
                    Saiba mais <ArrowRight className="w-4 h-4" />
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