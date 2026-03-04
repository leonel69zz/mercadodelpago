import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Servicios – MercadoDelPago',
  description: 'Planes de asesoría financiera para México. Desde consultas básicas hasta planes completos de mejora crediticia.',
}

const plans = [
  {
    name: 'Consulta Básica',
    price: '$299',
    period: 'MXN / sesión',
    desc: 'Ideal si quieres un diagnóstico inicial de tu situación financiera y crediticia.',
    features: ['Sesión de 60 minutos', 'Análisis de historial crediticio', 'Recomendaciones iniciales', 'Resumen escrito por email'],
    featured: false,
    cta: 'Reservar consulta',
  },
  {
    name: 'Plan de Mejora',
    price: '$899',
    period: 'MXN / mes',
    desc: 'Para quienes quieren mejorar su historial crediticio con acompañamiento continuo.',
    features: ['4 sesiones mensuales', 'Plan de acción personalizado', 'Seguimiento de progreso', 'Soporte por WhatsApp', 'Estrategia para créditos digitales', 'Revisión de Buró de Crédito'],
    featured: true,
    cta: 'Empezar ahora',
  },
  {
    name: 'Plan Premium',
    price: '$1,799',
    period: 'MXN / mes',
    desc: 'Atención completa para situaciones complejas o quienes requieren mayor acompañamiento.',
    features: ['Sesiones ilimitadas', 'Asesor dedicado', 'Gestión activa de deudas', 'Estrategia de crédito a 12 meses', 'Educación financiera completa', 'Soporte prioritario 7 días'],
    featured: false,
    cta: 'Solicitar información',
  },
]

export default function Servicios() {
  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.tag}>Lo que ofrecemos</div>
        <h1>Servicios diseñados para <span className={styles.accent}>tu situación</span></h1>
        <p className={styles.subtitle}>Elige el plan que mejor se adapte a tus necesidades. Todos incluyen atención personalizada y pagos seguros con Mercado Pago.</p>
      </div>

      <section className={styles.section}>
        <div className={styles.plansGrid}>
          {plans.map((p) => (
            <div key={p.name} className={`${styles.planCard} ${p.featured ? styles.featured : ''}`}>
              {p.featured && <div className={styles.planBadge}>⭐ Más popular</div>}
              <div className={styles.planName}>{p.name}</div>
              <div className={styles.planPrice}>{p.price} <span>{p.period}</span></div>
              <p className={styles.planDesc}>{p.desc}</p>
              <ul className={styles.planFeatures}>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Link href="/contacto" className={p.featured ? styles.btnPrimary : styles.btnOutline}>{p.cta}</Link>
            </div>
          ))}
        </div>

        <div className={styles.paymentNote}>
          <span className={styles.payIcon}>💳</span>
          <p>Todos nuestros planes se pagan de forma segura a través de <strong>Mercado Pago</strong>. Aceptamos tarjeta de crédito, débito, transferencia, efectivo en OXXO y saldo de Mercado Pago.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
