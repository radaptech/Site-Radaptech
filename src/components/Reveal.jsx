import { motion } from 'framer-motion';

// Fade-up ao entrar na tela. Mesmo efeito que as seções já usavam, num lugar só.
function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
