'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <div className="glass p-12 md:p-16 rounded-2xl border border-blue-500/20 text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Vamos <span className="gradient-text">transformar</span> sua ideia em realidade
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tenho expertise e paixão por criar soluções digitais excepcionais. Vamos conversar sobre seu projeto.
          </p>

          {/* CTA Button */}
          <div>
            <Button variant="primary" size="lg">
              Iniciar Projeto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Email */}
          <p className="text-gray-400">
            Ou envie um email:{' '}
            <a
              href="mailto:contato@davidreis.com"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              contato@davidreis.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}