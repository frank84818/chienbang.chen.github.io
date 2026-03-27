import Link from 'next/link';

interface CTA {
  text: string;
  href: string;
}

interface HeroSectionProps {
  badge: string;
  title: string;
  highlightTitle: string;
  description: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  theme: 'work' | 'life';
}

export default function HeroSection({
  badge,
  title,
  highlightTitle,
  description,
  primaryCTA,
  secondaryCTA,
  theme,
}: HeroSectionProps) {
  const isWork = theme === 'work';

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl mx-auto px-6">
      <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-[0.2em] uppercase transition-colors ${
        isWork 
          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
      }`}>
        {badge}
      </div>
      
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.85] mb-10">
        {title}<br />
        <span className={`bg-clip-text text-transparent ${
          isWork 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400' 
            : 'bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-400 dark:to-rose-400'
        }`}>
          {highlightTitle}
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
        <Link 
          href={primaryCTA.href} 
          className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
            isWork 
              ? 'bg-gray-900 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500' 
              : 'bg-amber-800 dark:bg-amber-600 text-white hover:bg-amber-900 dark:hover:bg-amber-700 shadow-amber-200/50'
          }`}
        >
          {primaryCTA.text}
        </Link>
        <Link 
          href={secondaryCTA.href} 
          className={`w-full sm:w-auto px-12 py-5 bg-white dark:bg-gray-800 border rounded-2xl font-black text-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 ${
            isWork 
              ? 'text-gray-900 dark:text-white border-gray-200 dark:border-gray-600' 
              : 'text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-900'
          }`}
        >
          {secondaryCTA.text}
        </Link>
      </div>
    </section>
  );
}
