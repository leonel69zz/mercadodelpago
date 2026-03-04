import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'Términos y Condiciones – MercadoDelPago' }

export default function Terminos() {
  return (
    <>
      <Navbar />
      <div className={styles.wrap}>
        <h1>Términos y Condiciones</h1>
        <p className={styles.date}>Última actualización: Enero 2025</p>
        <h2>1. Aceptación</h2>
        <p>Al usar los servicios de <strong>MercadoDelPago.site</strong> aceptas estos términos en su totalidad.</p>
        <h2>2. Naturaleza del servicio</h2>
        <p>MercadoDelPago ofrece asesoría y educación financiera. <strong>No somos banco, institución de crédito, ni entidad financiera regulada.</strong> Nuestra asesoría es informativa y educativa. Las decisiones financieras son responsabilidad exclusiva del usuario.</p>
        <h2>3. Sin garantía de resultados</h2>
        <p>Aunque nos esforzamos por dar la mejor asesoría posible, no podemos garantizar resultados específicos en historiales crediticios, ya que dependen de factores externos a nuestro control.</p>
        <h2>4. Pagos</h2>
        <p>Los pagos se procesan a través de <strong>Mercado Pago</strong>, plataforma independiente. <strong>MercadoDelPago.site no tiene ninguna afiliación con Mercado Pago® ni con MercadoLibre®.</strong> Usamos Mercado Pago únicamente como procesador de pagos.</p>
        <h2>5. Reembolsos</h2>
        <p>Las consultas ya realizadas no son reembolsables. Para planes mensuales, puedes cancelar antes del siguiente ciclo de facturación.</p>
        <h2>6. Propiedad intelectual</h2>
        <p>Todo el contenido del sitio es propiedad de MercadoDelPago.site y no puede reproducirse sin autorización.</p>
        <h2>7. Jurisdicción</h2>
        <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.</p>
        <h2>8. Contacto</h2>
        <p>Para cualquier consulta: <strong>hola@mercadodelpago.site</strong></p>
      </div>
      <Footer />
    </>
  )
}
