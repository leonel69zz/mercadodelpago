'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const faqs = [
  {
    cat: 'Sobre nuestros servicios',
    items: [
      { q: '¿Qué hace exactamente MercadoDelPago?', a: 'Somos una empresa independiente de asesoría y educación financiera. Analizamos tu situación crediticia, te explicamos cómo mejorarla y te acompañamos con un plan personalizado. No somos banco ni institución de crédito.' },
      { q: '¿Pueden garantizarme que voy a mejorar mi historial?', a: 'Ninguna empresa puede garantizar resultados específicos porque dependen de factores externos. Lo que sí garantizamos es un plan de acción honesto basado en información real y acompañamiento continuo. La mayoría de nuestros clientes ven mejoras en 3-6 meses.' },
      { q: '¿Están afiliados a Mercado Pago o MercadoLibre?', a: 'No. MercadoDelPago es una empresa completamente independiente. Usamos Mercado Pago únicamente como procesador de pagos para cobrar nuestros servicios. No tenemos ninguna relación, afiliación ni patrocinio con Mercado Pago® o MercadoLibre®.' },
      { q: '¿En qué ciudades de México operan?', a: 'Operamos completamente en línea, por lo que atendemos a personas de cualquier estado de la República Mexicana. Las sesiones son por videollamada o WhatsApp.' },
    ],
  },
  {
    cat: 'Pagos con Mercado Pago',
    items: [
      { q: '¿Por qué cobran con Mercado Pago?', a: 'Usamos Mercado Pago porque es una de las plataformas de pago más seguras y populares en México. Te permite pagar con tarjeta, transferencia, efectivo en OXXO o con tu saldo de Mercado Pago.' },
      { q: '¿Es seguro pagar a través de Mercado Pago?', a: 'Sí. Mercado Pago cuenta con protección al comprador y cifrado de datos. Tu información financiera nunca pasa por nosotros; se maneja directamente en la plataforma de Mercado Pago.' },
      { q: '¿Qué métodos de pago aceptan?', a: 'A través de Mercado Pago aceptamos: tarjeta de crédito, tarjeta de débito, transferencia bancaria, efectivo en OXXO y saldo de Mercado Pago.' },
    ],
  },
  {
    cat: 'Educación financiera',
    items: [
      { q: '¿Qué es el Buró de Crédito y cómo afecta mi vida?', a: 'El Buró de Crédito (ahora Círculo de Crédito) es un registro de tu historial de pagos. Los bancos y empresas financieras lo consultan antes de otorgarte un crédito. Un buen historial te abre puertas; uno negativo las cierra. En nuestras asesorías te explicamos exactamente cómo mejorarlo.' },
      { q: '¿Cómo funciona el crédito de Mercado Pago?', a: 'Mercado Pago ofrece líneas de crédito a sus usuarios activos basándose en su historial de uso de la plataforma y su historial crediticio general. En nuestras sesiones te explicamos cómo aprovechar mejor estas herramientas y qué hábitos ayudan a obtener mejores condiciones.' },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)}>
        {q} <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.faqA}><p>{a}</p></div>}
    </div>
  )
}

export default function Preguntas() {
  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.tag}>FAQ</div>
        <h1>Preguntas <span className={styles.accent}>frecuentes</span></h1>
        <p className={styles.subtitle}>Todo lo que necesitas saber sobre nuestros servicios, pagos y cómo podemos ayudarte.</p>
      </div>

      <div className={styles.wrap}>
        {faqs.map((cat) => (
          <div key={cat.cat} className={styles.faqCat}>
            <h2>{cat.cat}</h2>
            {cat.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}
