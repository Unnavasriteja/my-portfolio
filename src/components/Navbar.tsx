import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight, BookOpen, FileText } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated nav items for scrolling
  const navItems: Array<{ path: string; label: string; icon?: typeof BookOpen }> = [
    { path: '#home', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#skills-full', label: 'Skills' },
    { path: '#projects', label: 'Projects' },
    { path: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-page/80 backdrop-blur-md border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="text-primary-500 font-mono font-bold text-xl tracking-wide">
                <span className="text-accent-500">&gt;</span>
                <span className="group-hover:text-primary-500 transition-colors duration-200">
                  _
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-200 group flex items-center gap-2"
                  >
                    {IconComponent && (
                      <IconComponent 
                        size={16} 
                        className="text-neutral-200 group-hover:text-primary-500"
                      />
                    )}

                    <span className="font-mono text-neutral-200 group-hover:text-primary-500">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-neutral-200 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-elevated border-t border-neutral-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-all duration-200 text-neutral-200 hover:text-primary-500 hover:bg-bg-surface"
                  >
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <IconComponent 
                          size={16}
                          className="text-neutral-200"
                        />
                      )}
                      <span className="font-mono">$ {item.label.toLowerCase()}</span>
                    </div>

                    <ChevronRight
                      size={16}
                      className="transition-transform text-neutral-200"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};
