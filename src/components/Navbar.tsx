'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Mercado<span>DelPago</span>
      </Link>

      <ul className={styles.links}>
        <li><Link href="/servicios" className={pathname === '/servicios' ? styles.active : ''}>Servicios</Link></li>
        <li><Link href="/nosotros" className={pathname === '/nosotros' ? styles.active : ''}>Nosotros</Link></li>
        <li><Link href="/blog" className={pathname === '/blog' ? styles.active : ''}>Blog</Link></li>
        <li><Link href="/preguntas" className={pathname === '/preguntas' ? styles.active : ''}>FAQ</Link></li>
      </ul>

      <Link href="/contacto" className={styles.cta}>Consulta gratis</Link>
    </nav>
  )
}
