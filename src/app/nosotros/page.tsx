import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Nosotros – MercadoDelPago',
  description: 'Conoce al equipo detrás de MercadoDelPago, empresa de asesoría financiera independiente en México.',
}

const values = [
  { icon: '🔍', title: 'Transparencia', desc: 'Sin letra chica. Te decimos exactamente qué puedes esperar y qué no podemos prometerte.' },
  { icon: '🎓', title: 'Educación real', desc: 'No solo te damos un plan: te explicamos el porqué. Queremos que entiendas tus finanzas, no que dependas de nosotros para siempre.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Cada cliente es único. Nos tomamos el tiempo para entender tu situación antes de recomendar cualquier acción.' },
  { icon: '⚡', title: 'Resultados', desc: 'Nos importan los resultados concretos. Seguimos tu progreso y ajustamos la estrategia cuando es necesario.' },
]

const team = [
  { initials: 'RG', color: '#00c06a', name: 'Ricardo González', role: 'Fundador & Asesor Principal', bio: '+8 años en finanzas personales y educación crediticia en México.' },
  { initials: 'SM', color: '#0284c7', name: 'Sofía Morales', role: 'Asesora Financiera', bio: 'Especialista en gestión de deudas y estrategias de crédito personal.' },
  { initials: 'DL', color: '#7c3aed', name: 'Diego López', role: 'Educación Financiera', bio: 'Experto en fintech y uso inteligente de plataformas digitales de pago.' },
]

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.tag}>Quiénes somos</div>
        <h1>Somos tu equipo de <span className={styles.accent}>asesoría financiera</span></h1>
        <p className={styles.subtitle}>Nacimos con una misión clara: que los mexicanos tengan acceso a educación financiera de calidad, sin barreras y sin complicaciones.</p>
      </div>

      <section className={styles.section}>
        <div className={styles.tag}>Nuestra misión</div>
        <h2>¿Por qué existimos?</h2>
        <div className={styles.missionBox}>
          <p>En México, millones de personas usan herramientas financieras digitales — incluyendo plataformas como <strong>Mercado Pago</strong> — sin entender completamente cómo aprovecharlas al máximo o cómo sus hábitos impactan su historial crediticio.</p>
          <br />
          <p>En <strong>MercadoDelPago</strong> creemos que con la información correcta, cualquier persona puede mejorar su situación financiera. No vendemos magia: vendemos conocimiento, estrategia y acompañamiento real.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.tag}>Nuestros valores</div>
        <h2>Lo que nos define</h2>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valCard}>
              <div className={styles.valIcon}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.tag}>El equipo</div>
        <h2>Las personas detrás de MercadoDelPago</h2>
        <div className={styles.teamGrid}>
          {team.map((t) => (
            <div key={t.name} className={styles.teamCard}>
              <div className={styles.teamAvatar} style={{ background: t.color }}>{t.initials}</div>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
              <p>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
