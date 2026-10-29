import Logo from './Logo'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_CONTATOS } from '../contato'

function Footer() {
  return (
    <footer className="bg-slate-950 py-10 font-sans text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
        <Logo />
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-white">RadapTech</span>. Todos os direitos reservados.
        </p>
        <div className="flex flex-col gap-2">
          {WHATSAPP_CONTATOS.map(({ nome, exibicao, link }) => (
            <a
              key={nome}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {nome} {exibicao}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
