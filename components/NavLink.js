'use client';
import styles from './NavLink.module.css';

export default function NavLink({ href, isActive, children }) {
  return (
    <a
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {children}
      <span className={styles.underline} />
    </a>
  );
}
