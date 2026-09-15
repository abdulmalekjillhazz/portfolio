'use client';
export default function NavLink({ href, isActive, children, className = '', ...props }) {
  return (
    <a
      href={href}
      {...props}
      className={`group relative inline-flex items-center py-2 text-[1.05rem] font-medium text-[var(--text-muted)] transition-colors duration-[250ms] hover:text-[var(--accent)] focus-visible:text-[var(--accent)] ${isActive ? 'font-semibold text-[var(--accent)]' : ''} ${className}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 rounded-sm bg-[var(--accent)] transition-[width] duration-[350ms] ease-out group-hover:w-12 group-focus-visible:w-12 ${isActive ? 'w-6' : 'w-0'}`} />
    </a>
  );
}
