import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { WHATSAPP_CONTATO, WHATSAPP_DEMO_EPI } from '../contato'

const linksHome = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sistemas', href: '#epi' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

const linksEpi = [
  { label: 'O problema', href: '#problema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas', href: '#duvidas' },
]

const foco = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isHomePage = useLocation().pathname === '/'

  const links = isHomePage ? linksHome : linksEpi
  const cta = isHomePage
    ? { label: 'Fale conosco', href: WHATSAPP_CONTATO }
    : { label: 'Agendar demonstração', href: WHATSAPP_DEMO_EPI }
  const ctaAttrs = { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 font-sans backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {isHomePage ? (
          <a href="#home" className={`group rounded-lg ${foco}`}><Logo /></a>
        ) : (
          <Link to="/" className={`group rounded-lg ${foco}`}><Logo /></Link>
        )}

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cta.href}
            {...ctaAttrs}
            className={`hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:inline-flex ${foco}`}
          >
            {cta.label}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 text-slate-300 transition-colors hover:text-white lg:hidden ${foco}`}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-slate-800 bg-slate-950 lg:hidden">
          <nav className="flex flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              {...ctaAttrs}
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
