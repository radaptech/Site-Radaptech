// Código de barras decorativo, gerado a partir do texto (sempre o mesmo desenho para o mesmo texto).
function CodigoBarras({ texto, className = 'h-8 w-full' }) {
  const barras = [];
  let x = 0;
  for (const c of `*${texto}*`) {
    const n = c.charCodeAt(0);
    for (let i = 0; i < 4; i++) {
      const largura = 1 + ((n >> i) & 1) + ((n >> (i + 3)) & 1);
      if (i % 2 === 0) barras.push(<rect key={x} x={x} width={largura} height="40" />);
      x += largura;
    }
    x += 1;
  }
  return (
    <svg viewBox={`0 0 ${x} 40`} preserveAspectRatio="none" className={className} fill="currentColor" aria-hidden="true">
      {barras}
    </svg>
  );
}

export default CodigoBarras;
