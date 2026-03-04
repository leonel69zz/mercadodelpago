import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>Mercado<span>DelPago</span></div>
          <p className={styles.desc}>Asesoría financiera independiente para personas en México.</p>
        </div>
        <div className={styles.linkGroup}>
          <h5>Empresa</h5>
          <ul>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/preguntas">FAQ</Link></li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h5>Legal</h5>
          <ul>
            <li><Link href="/privacidad">Aviso de privacidad</Link></li>
            <li><Link href="/terminos">Términos y condiciones</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2025 MercadoDelPago.site — Todos los derechos reservados</p>
        <p className={styles.noAfil}>Mercado Pago® es marca registrada de MercadoLibre. MercadoDelPago no tiene afiliación con Mercado Pago® ni MercadoLibre®.</p>
      </div>
      <p className={styles.disclaimer}>
        MercadoDelPago.site es una empresa independiente de asesoría y educación financiera. No somos institución de crédito ni banco. Los resultados pueden variar. Usamos Mercado Pago únicamente como procesador de pagos.
      </p>
    </footer>
  )
}
