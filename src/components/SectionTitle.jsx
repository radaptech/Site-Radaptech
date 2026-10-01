// Cabeçalho padrão de seção: eyebrow azul, título forte e texto de apoio.
function SectionTitle({ eyebrow, title, text, dark = false, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wider ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
      )}
    </div>
  );
}

export default SectionTitle;
