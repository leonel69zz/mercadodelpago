'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.tag}>Contáctanos</div>
        <h1>Hablemos de <span className={styles.accent}>tus finanzas</span></h1>
        <p className={styles.subtitle}>Tu primera consulta es gratuita. Cuéntanos tu situación y un asesor te contactará en menos de 24 horas.</p>
      </div>

      <div className={styles.layout}>
        {/* INFO */}
        <div className={styles.info}>
          <h3>Información de contacto</h3>
          <p>Disponibles lunes a viernes 9am–7pm y sábados 10am–2pm.</p>

          <div className={styles.contactItem}>
            <div className={styles.cIcon}>📧</div>
            <div><div className={styles.cLabel}>Email</div><div className={styles.cVal}>hola@mercadodelpago.site</div></div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.cIcon}>📱</div>
            <div><div className={styles.cLabel}>WhatsApp</div><div className={styles.cVal}>+52 99 92 3690 14</div></div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.cIcon}>📍</div>
            <div><div className={styles.cLabel}>Operamos en</div><div className={styles.cVal}>Todo México (en línea)</div></div>
          </div>

          <div className={styles.paymentNote}>
            <p>💳 Aceptamos pagos con <strong>Mercado Pago</strong>. Una vez acordado tu plan, te enviamos un link de pago seguro a tu WhatsApp o email.</p>
          </div>
        </div>

        {/* FORM */}
        <div className={styles.formCard}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3>¡Solicitud enviada!</h3>
              <p>Gracias por contactarnos. Un asesor te escribirá en menos de 24 horas.</p>
            </div>
          ) : (
            <>
              <h3>Solicita tu consulta gratuita</h3>
              <p>Rellena el formulario y te contactamos sin compromiso.</p>

              <div className={styles.formRow}>
                <div className={styles.formGroup}><label>Nombre</label><input type="text" placeholder="Tu nombre" /></div>
                <div className={styles.formGroup}><label>Apellido</label><input type="text" placeholder="Tu apellido" /></div>
              </div>
              <div className={styles.formGroup}><label>Email</label><input type="email" placeholder="correo@ejemplo.com" /></div>
              <div className={styles.formGroup}><label>Teléfono / WhatsApp</label><input type="tel" placeholder="+52 55 0000 0000" /></div>
              <div className={styles.formGroup}>
                <label>¿Qué necesitas?</label>
                <select>
                  <option value="">Selecciona una opción</option>
                  <option>Mejorar mi historial crediticio</option>
                  <option>Entender mi Buró de Crédito</option>
                  <option>Gestionar mis deudas</option>
                  <option>Aprender a usar créditos digitales</option>
                  <option>Educación financiera general</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className={styles.formGroup}><label>Cuéntanos brevemente tu situación</label><textarea placeholder="Opcional: describe lo que necesitas..." /></div>
              <button className={styles.btnSubmit} onClick={() => setSent(true)}>Enviar solicitud →</button>
              <p className={styles.formNote}>Al enviar aceptas nuestro <a href="/privacidad">aviso de privacidad</a>. No compartimos tu información.</p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
