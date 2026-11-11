// Cabeçalho de seção: título forte e texto de apoio. Sem rótulo acima do título.
function SectionTitle({ title, text, dark = false, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Tag className={`titulo text-3xl sm:text-[2.6rem] ${dark ? 'text-white' : 'text-tinta'}`}>{title}</Tag>
      {text && (
        <p className={`mt-5 max-w-[62ch] text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-mudo'}`}>{text}</p>
      )}
    </div>
  );
}

export default SectionTitle;
