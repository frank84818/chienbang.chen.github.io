import Link from 'next/link';

interface SubPage {
  name: string;
  href: string;
}

interface PageTemplateProps {
  title: string;
  theme: 'professional' | 'romantic';
  subPages?: SubPage[];
  children: React.ReactNode;
}

export default function PageTemplate({
  title,
  theme,
  subPages,
  children,
}: PageTemplateProps) {
  const themeClasses = {
    professional: 'theme-professional bg-white text-slate-900 font-sans',
    romantic: 'theme-romantic bg-rose-50 text-rose-900 font-serif',
  };

  const accentClasses = {
    professional: 'text-blue-600',
    romantic: 'text-rose-600',
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses[theme]}`}>
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        
        {subPages && subPages.length > 0 && (
          <nav className="mt-8">
            <ul className="flex justify-center space-x-6">
              {subPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className={`text-sm uppercase tracking-widest font-semibold hover:opacity-70 ${accentClasses[theme]}`}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5">
          {children}
        </div>
      </main>
    </div>
  );
}
