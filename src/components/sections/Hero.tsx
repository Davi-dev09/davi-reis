'use client'

import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/50">
              ✨ Desenvolvedor Senior & Consultant
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Código que</span>
                <span className="gradient-text block">gera resultados</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 max-w-md leading-relaxed">
              Desenvolvimento web premium com foco em performance, conversão e experiência do usuário extraordinária.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <p className="text-sm text-gray-400">Projetos</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">100%</div>
                <p className="text-sm text-gray-400">Satisfação</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">8+</div>
                <p className="text-sm text-gray-400">Anos</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="primary" size="lg">
                Ver Projetos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                className="p-3 rounded-lg glass hover:border-blue-400 transition-colors"
              >
                <Github className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 rounded-lg glass hover:border-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://twitter.com"
                className="p-3 rounded-lg glass hover:border-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-lg font-semibold">David Reis</p>
                  <p className="text-sm text-gray-400">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}