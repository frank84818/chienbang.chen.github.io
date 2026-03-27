import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  theme: 'work' | 'life';
  footerText: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  theme,
  footerText,
}: FeatureCardProps) {
  const isWork = theme === 'work';

  return (
    <Link 
      href={href} 
      className="group p-10 md:p-14 bg-white dark:bg-gray-900/50 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all duration-700 hover:-translate-y-4 flex flex-col justify-between min-h-[480px] backdrop-blur-md"
    >
      <div>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-xl font-black shadow-inner transition-all ${
          isWork 
            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white' 
            : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white'
        }`}>
          {icon}
        </div>
        <h2 className={`text-4xl font-black text-gray-900 dark:text-white mb-6 transition-colors ${
          isWork ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : 'group-hover:text-rose-600 dark:group-hover:text-rose-400'
        }`}>
          {title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed font-medium">
          {description}
        </p>
      </div>
      <div className={`mt-10 flex items-center font-black text-lg uppercase tracking-widest transition-colors ${
        isWork ? 'text-blue-600 dark:text-blue-400' : 'text-rose-600 dark:text-rose-400'
      }`}>
        {footerText} <span className="ml-3 group-hover:translate-x-3 transition-transform duration-500">→</span>
      </div>
    </Link>
  );
}
