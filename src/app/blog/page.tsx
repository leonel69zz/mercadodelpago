import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog Financiero – MercadoDelPago',
  description: 'Artículos de educación financiera para México. Aprende sobre crédito, Buró de Crédito, deudas y más.',
}

const posts = [
  { icon: '📊', bg: 'rgba(0,192,106,0.12)', tag: 'Crédito', title: '¿Cómo funciona el Buró de Crédito en México?', desc: 'Descubre qué es el Buró de Crédito, qué información guarda y cómo afecta tu capacidad de obtener préstamos.', time: '5 min · Enero 2025' },
  { icon: '📱', bg: 'rgba(0,158,227,0.12)', tag: 'Fintech', title: 'Cómo aprovechar al máximo tu cuenta de Mercado Pago', desc: 'Aprende qué factores determinan tu límite de crédito en Mercado Pago y cómo mejorar tu perfil en la plataforma.', time: '6 min · Febrero 2025' },
  { icon: '💸', bg: 'rgba(124,58,237,0.12)', tag: 'Deudas', title: '5 estrategias para salir de deudas más rápido', desc: 'Métodos probados para priorizar y liquidar deudas sin afectar más tu historial crediticio.', time: '7 min · Febrero 2025' },
  { icon: '🔐', bg: 'rgba(220,38,38,0.1)', tag: 'Seguridad', title: 'Cómo proteger tu identidad financiera en México', desc: 'Guía práctica para detectar fraudes, proteger tus datos y usar plataformas digitales de forma segura.', time: '4 min · Marzo 2025' },
  { icon: '🏦', bg: 'rgba(245,158,11,0.1)', tag: 'Educación', title: 'Diferencia entre score crediticio y Buró de Crédito', desc: 'Muchas personas confunden estos dos términos. Te explicamos qué es cada uno y por qué ambos importan.', time: '5 min · Marzo 2025' },
  { icon: '🎯', bg: 'rgba(0,192,106,0.08)', tag: 'Planeación', title: 'Cómo crear un presupuesto personal que sí funcione', desc: 'Paso a paso para construir un presupuesto realista que te ayude a ahorrar y pagar deudas al mismo tiempo.', time: '8 min · Abril 2025' },
]

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.tag}>Aprende</div>
        <h1>Blog de <span className={styles.accent}>educación financiera</span></h1>
        <p className={styles.subtitle}>Artículos prácticos para que tomes mejores decisiones con tu dinero y tus créditos.</p>
      </div>

      <section className={styles.section}>
        <div className={styles.grid}>
          {posts.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardImg} style={{ background: `linear-gradient(135deg, ${p.bg}, transparent)` }}>
                <span>{p.icon}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag}>{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className={styles.cardMeta}>{p.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
