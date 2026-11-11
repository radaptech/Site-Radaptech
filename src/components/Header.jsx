import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { WHATSAPP_CONTATO, WHATSAPP_DEMO_EPI } from '../contato'

const linksHome = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'SGEPI', href: '#epi' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

const linksEpi = [
  { label: 'O problema', href: '#problema' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem', href: '#beneficios' },
  { label: 'Dúvidas', href: '#duvidas' },
]

const foco = 'foco foco-claro rounded-sm'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isHomePage = useLocation().pathname === '/'

  const links = isHomePage ? linksHome : linksEpi
  const cta = isHomePage
    ? { label: 'Fale conosco', href: WHATSAPP_CONTATO }
    : { label: 'Agendar demonstração', href: WHATSAPP_DEMO_EPI }
  const ctaAttrs = { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <header className="fita fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {isHomePage ? (
          <a href="#home" className={foco}><Logo /></a>
        ) : (
          <Link to="/" className={foco}><Logo /></Link>
        )}

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[0.95rem] font-semibold text-white/75 [font-stretch:85%] transition-colors hover:text-white ${foco}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cta.href}
            {...ctaAttrs}
            className={`hidden rounded-[3px] bg-azul px-4 py-2.5 text-sm font-bold text-white [font-stretch:90%] transition-colors hover:bg-azul-escuro sm:inline-flex ${foco}`}
          >
            {cta.label}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 text-white/80 transition-colors hover:text-white lg:hidden ${foco}`}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fita absolute left-0 top-full w-full border-t border-white/10 lg:hidden">
          <nav className="flex flex-col px-4 py-3 sm:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 font-semibold text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              {...ctaAttrs}
              onClick={() => setIsOpen(false)}
              className="my-4 inline-flex justify-center rounded-[3px] bg-azul px-6 py-3 font-bold text-white"
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
