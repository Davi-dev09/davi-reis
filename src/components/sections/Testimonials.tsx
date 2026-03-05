'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    id: '1',
    name: 'Marina Silva',
    role: 'CEO',
    company: 'TechStart Co.',
    content:
      'David transformou completamente a presença digital da nossa empresa. O resultado superou todas as expectativas e gerou mais leads em 3 meses do que em todo o ano anterior.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marina',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Founder',
    company: 'Digital Agency Pro',
    content:
      'Profissionalismo e qualidade em cada detalhe. David entrega projetos que não só funcionam perfeitamente, mas que também impressionam clientes. Recomendo fortemente.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    rating: 5,
  },
  {
    id: '3',
    name: 'Juliana Costa',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content:
      'Raro encontrar um desenvolvedor que compreende tanto de tecnologia quanto de negócios. David não só codifica, mas estrategiza. Parceria de valor agregado genuíno.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O que dizem sobre <span className="gradient-text">meu trabalho</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Depoimentos de clientes que transformaram seus negócios
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="glass p-12 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl text-gray-200 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-lg glass hover:border-blue-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-blue-500 w-6' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-lg glass hover:border-blue-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}