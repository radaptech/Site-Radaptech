import Logo from './Logo'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_CONTATOS } from '../contato'

function Footer() {
  return (
    <footer className="fita py-8 text-sm text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Logo />
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          {WHATSAPP_CONTATOS.map(({ nome, exibicao, link }) => (
            <a
              key={nome}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="foco foco-claro inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-ciano" aria-hidden="true" />
              {nome} <span className="font-mono">{exibicao}</span>
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} RadapTech</p>
      </div>
    </footer>
  )
}

export default Footer
