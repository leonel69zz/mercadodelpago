import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'MercadoDelPago – Asesoría Financiera en México',
  description: 'Asesoría financiera personalizada en México. Aprende a manejar tus créditos, mejorar tu historial y tomar decisiones inteligentes con tu dinero.',
}

const services = [
  { icon: '📊', title: 'Análisis de crédito', desc: 'Revisamos tu historial crediticio, identificamos áreas de mejora y te explicamos qué está afectando tu score.' },
  { icon: '🎯', title: 'Plan de mejora financiera', desc: 'Creamos un plan personalizado paso a paso para que mejores tu historial y accedas a mejores condiciones de crédito.' },
  { icon: '📚', title: 'Educación financiera', desc: 'Aprende cómo funcionan los créditos, las tasas de interés y cómo usar herramientas digitales a tu favor.' },
  { icon: '💬', title: 'Asesoría personalizada', desc: 'Sesiones uno a uno con un asesor certificado que te orienta según tu situación y tus metas.' },
  { icon: '🏦', title: 'Gestión de deudas', desc: 'Te ayudamos a organizar y priorizar tus deudas para salir de ellas de forma ordenada.' },
  { icon: '🔐', title: 'Protección financiera', desc: 'Aprende a detectar fraudes, proteger tu identidad y usar plataformas digitales de forma segura.' },
]

const steps = [
  { n: '1', title: 'Agenda tu consulta gratuita', desc: 'Llena el formulario y un asesor te contactará en menos de 24 horas para conocer tu situación.' },
  { n: '2', title: 'Analizamos tu situación', desc: 'Revisamos tu historial crediticio y tus finanzas para darte un diagnóstico honesto.' },
  { n: '3', title: 'Recibe tu plan personalizado', desc: 'Te entregamos un plan de acción concreto con pasos claros adaptados a tu realidad.' },
  { n: '4', title: 'Seguimiento continuo', desc: 'No te dejamos solo. Hacemos seguimiento de tu progreso y ajustamos el plan cuando sea necesario.' },
]

const testimonials = [
  { initials: 'JR', color: '#e05c30', name: 'Jorge R.', city: 'Guadalajara, Jalisco', text: 'Tenía mi crédito en pésimas condiciones y no sabía por dónde empezar. En 3 meses de asesoría ya vi cambios reales en mi historial. Lo recomiendo al 100%.' },
  { initials: 'LM', color: '#7c3aed', name: 'Lorena M.', city: 'Ciudad de México', text: 'Me explicaron cómo funcionaba mi crédito de Mercado Pago y cómo aprovecharlo mejor. Ahora tengo límites más altos y mejores condiciones.' },
  { initials: 'CA', color: '#059669', name: 'Carlos A.', city: 'Monterrey, NL', text: 'Super profesionales. Me ayudaron a organizar mis deudas y a entender qué afectaba mi score. El pago por Mercado Pago fue facilísimo y seguro.' },
  { initials: 'AP', color: '#dc2626', name: 'Ana P.', city: 'Puebla, Puebla', text: 'Pensaba que mejorar mi historial era imposible. Me demostraron que con el plan correcto sí se puede. En 6 meses ya me aprobaron una tarjeta de crédito.' },
  { initials: 'MV', color: '#0284c7', name: 'Miguel V.', city: 'León, Guanajuato', text: 'La asesoría financiera fue muy clara y práctica. Me dieron herramientas concretas, no solo teoría. Vale cada peso.' },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />

        {/* LEFT */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>🇲🇽 Asesoría Financiera en México</div>
          <h1>Toma el control de tu <span className={styles.accent}>futuro financiero</span></h1>
          <p>Te ayudamos a entender tu crédito, mejorar tu historial y tomar decisiones inteligentes con tu dinero. Sin letra chica, sin complicaciones.</p>
          <div className={styles.heroBtns}>
            <Link href="/contacto" className={styles.btnPrimary}>Quiero mi asesoría gratis</Link>
            <Link href="/servicios" className={styles.btnOutline}>Ver servicios</Link>
          </div>
          <div className={styles.paymentBadge}>
            <div className={styles.mpDot} />
            <span>Aceptamos pagos con <strong>Mercado Pago</strong> — rápido y seguro</span>
          </div>
          <div className={styles.stats}>
            <div><div className={styles.statNum}>+1,200</div><div className={styles.statLbl}>personas asesoradas</div></div>
            <div><div className={styles.statNum}>4.9★</div><div className={styles.statLbl}>calificación promedio</div></div>
            <div><div className={styles.statNum}>3 años</div><div className={styles.statLbl}>de experiencia</div></div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            <div className={styles.vcTop}>
              <div className={styles.vcDot} />
              <span className={styles.vcLabel}>Score crediticio</span>
            </div>
            <div className={styles.vcValue}>742 pts</div>
            <div className={styles.vcSub}>↑ +68 puntos en 90 días</div>
            <div className={styles.vcBar}>
              <div className={styles.vcBarFill} style={{ width: '74%' }} />
            </div>
          </div>

          <div className={styles.visualCard}>
            <div className={styles.vcTop}>
              <div className={styles.vcDot} />
              <span className={styles.vcLabel}>Plan activo</span>
            </div>
            <div className={styles.vcValue}>Plan Mejora</div>
            <div className={styles.vcSub}>Sesión 3 de 4 completada</div>
            <div className={styles.vcBar}>
              <div className={styles.vcBarFill} style={{ width: '75%' }} />
            </div>
          </div>

          <div className={styles.visualCard}>
            <div className={styles.vcMpBadge}>
              <div className={styles.mpLogoSmall}>mercado<br />pago</div>
              <div className={styles.vcMpText}>
                <strong>Pago procesado ✓</strong><br />
                Seguro y protegido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services} id="servicios">
        <div className={styles.tag}>Lo que hacemos</div>
        <h2>Nuestros servicios</h2>
        <p className={styles.subtitle}>Cada servicio está diseñado para darte claridad y herramientas reales para mejorar tu situación financiera.</p>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.svcIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.how} id="como-funciona">
        <div className={styles.tag}>El proceso</div>
        <h2>¿Cómo funciona?</h2>
        <p className={styles.subtitle}>Empezar es fácil. Sin burocracia, sin contratos complicados.</p>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepNum}>{s.n}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT */}
      <section className={styles.payment} id="pagos">
        <div className={styles.tag}>Facilidad de pago</div>
        <h2>Paga como más te convenga</h2>
        <p className={styles.subtitle}>Aceptamos <strong>Mercado Pago</strong> para que puedas contratar nuestros servicios de forma rápida, segura y desde donde estés.</p>
        <div className={styles.paymentBox}>
          <div className={styles.mpLogo}>mercado<br />pago</div>
          <div className={styles.paymentInfo}>
            <h4>Pagos seguros con Mercado Pago</h4>
            <p>Utilizamos Mercado Pago como plataforma de cobro para garantizarte una experiencia confiable, con protección al comprador y múltiples métodos disponibles.</p>
            <div className={styles.paymentMethods}>
              {['💳 Tarjeta de crédito','💳 Tarjeta de débito','📱 Transferencia','🏪 Efectivo OXXO','📲 Saldo MP'].map(m => (
                <span key={m} className={styles.pmTag}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials} id="opiniones">
        <div className={styles.tag}>Testimonios</div>
        <h2>Lo que dicen nuestros clientes</h2>
        <p className={styles.subtitle}>Personas reales que tomaron el control de sus finanzas con nuestra ayuda.</p>
        <div className={styles.testiGrid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.testiCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testiAuthor}>
                <div className={styles.avatar} style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* UBICACIÓN */}
      <section className={styles.mapSection}>
        <div className={styles.mapLeft}>
          <div className={styles.tag}>Encuéntranos</div>
          <h2>Nuestra <span className={styles.accent}>ubicación</span></h2>
          <p className={styles.mapDesc}>Estamos en el corazón de la Ciudad de México. También puedes agendar una sesión completamente en línea desde cualquier parte del país.</p>
          <div className={styles.mapInfo}>
            <div className={styles.mapInfoItem}>
              <span className={styles.mapInfoIcon}>📍</span>
              <div>
                <strong>Dirección</strong>
                <p>Mercado Sonora, Ciudad de México</p>
              </div>
            </div>
            <div className={styles.mapInfoItem}>
              <span className={styles.mapInfoIcon}>🕐</span>
              <div>
                <strong>Horarios</strong>
                <p>Lunes–Viernes 9am–7pm<br/>Sábados 10am–2pm</p>
              </div>
            </div>
            <div className={styles.mapInfoItem}>
              <span className={styles.mapInfoIcon}>💻</span>
              <div>
                <strong>También en línea</strong>
                <p>Atendemos todo México por videollamada y WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapRight}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6328.193629970214!2d-99.13076833353121!3d19.42249466015718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fec7e0416967%3A0xdfbc602bb21815d7!2sMercado%20Sonora!5e0!3m2!1ses-419!2smx!4v1772648434781!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px', minHeight: '420px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBand}>
        <div className={styles.tag}>Empieza hoy</div>
        <h2>Tu primer paso hacia la <span className={styles.accent}>libertad financiera</span></h2>
        <p>Agenda tu consulta gratuita hoy. Sin compromisos, sin letra chica.</p>
        <Link href="/contacto" className={styles.btnPrimaryLg}>Quiero mi consulta gratis →</Link>
      </section>

      <Footer />
    </>
  )
}
