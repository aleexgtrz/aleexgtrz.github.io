import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu,
  X
} from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, PROJECTS, DOMAINS } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-16 flex flex-col selection:bg-white selection:text-black">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Alex Gutierrez</span>
          <h1 className="text-4xl font-light tracking-tighter uppercase whitespace-nowrap">Portfolio</h1>
        </motion.div>

        <nav className="flex flex-wrap gap-x-10 gap-y-4 items-center text-sm uppercase tracking-widest">
          <div className="ml-0 md:ml-6 lang-switch">
            <span 
              onClick={() => setLang('en')}
              className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-white' : 'text-neutral-600 hover:text-white'}`}
            >
              EN
            </span>
            <span className="text-neutral-600">/</span>
            <span 
              onClick={() => setLang('es')}
              className={`cursor-pointer transition-colors ${lang === 'es' ? 'text-white' : 'text-neutral-600 hover:text-white'}`}
            >
              ES
            </span>
          </div>
          
          <button 
            className="md:hidden ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mb-12 flex flex-col gap-4 items-start"
          >
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-link-elegant text-xl">{t.navProjects}</a>
            <a href="#domains" onClick={() => setMobileMenuOpen(false)} className="nav-link-elegant text-xl">{t.navDomains}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link-elegant text-xl">{t.navContact}</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1 items-start">
        {/* Projects Section */}
        <section id="projects" className="col-span-1 md:col-span-7 flex flex-col">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-8">{t.navProjects}</h2>
          <div className="space-y-12">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-baseline border-b border-neutral-900 pb-4 group-hover:border-neutral-700 transition-colors">
                  <h3 className="text-2xl font-light">{project.title}</h3>
                  <span className="text-xs text-neutral-500 italic">
                    {project.tags.join(' / ')} / {project.year}
                  </span>
                </div>
                <p className="mt-4 text-neutral-500 text-sm max-w-xl font-light leading-relaxed">
                  {project.description[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Domain Portfolio Section */}
        <section id="domains" className="col-span-1 md:col-span-5 flex flex-col border-l-0 md:border-l border-neutral-900 md:pl-12 pt-12 md:pt-0">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-8">{t.domainTitle}</h2>
          <div className="flex flex-col gap-6">
            {DOMAINS.map((domain) => (
              <motion.div 
                key={domain.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-mono text-neutral-200 tracking-tight group-hover:text-white transition-colors">
                    {domain.name}
                  </span>
                  {domain.status === 'sold' ? (
                    <span className="inline-flex min-w-[72px] items-center justify-center text-xs font-medium text-neutral-500 bg-neutral-900 px-3 py-1 rounded-sm">
                      Sold
                    </span>
                  ) : (
                    <a
                      href={`https://${domain.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-[72px] items-center justify-center text-xs font-medium text-white bg-neutral-900 px-3 py-1 rounded-sm hover:opacity-90 transition-colors"
                    >
                      {t.buyNow}
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-neutral-600 mt-1 uppercase tracking-tighter">
                  {domain.description[lang]}
                </span>
              </motion.div>
            ))}

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 mt-20 md:mt-auto text-[10px] uppercase tracking-widest text-neutral-600 gap-6">
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:hello@noir.studio" className="hover:text-white transition-colors lowercase font-sans">hello@noir.studio</a>
        </div>
        <div className="text-neutral-700">&copy; {new Date().getFullYear()} / {t.footerRights}</div>
      </footer>
    </div>
  );
}
