'use client';
import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

export default function RevealOnScroll({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`translate-y-6 opacity-0 transition-[opacity,transform] duration-[600ms] ease-out ${visible ? 'translate-y-0 opacity-100' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
