import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { faqData } from './data';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 rounded-lg text-left font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        {question}
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-3 leading-relaxed text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="duvidas" className="scroll-mt-20 bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionTitle eyebrow="Dúvidas frequentes" title="Antes de agendar, você pode estar se perguntando…" />
      </Reveal>
      <div className="mt-12 space-y-3">
        {faqData.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
