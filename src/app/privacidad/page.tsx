import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'Aviso de Privacidad – MercadoDelPago' }

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <div className={styles.wrap}>
        <h1>Aviso de Privacidad</h1>
        <p className={styles.date}>Última actualización: Enero 2025</p>
        <h2>1. Responsable</h2>
        <p><strong>MercadoDelPago.site</strong> es responsable del tratamiento de los datos personales que recabamos a través de nuestro sitio web y servicios.</p>
        <h2>2. Datos que recabamos</h2>
        <p>Recabamos nombre, apellido, correo electrónico, teléfono y la información que nos compartes voluntariamente al contactarnos o contratar nuestros servicios.</p>
        <h2>3. Finalidad</h2>
        <p>Usamos tus datos para: contactarte para brindarte asesoría, enviar información sobre nuestros servicios, procesar pagos a través de Mercado Pago, y mejorar nuestros servicios.</p>
        <h2>4. Transferencia de datos</h2>
        <p>No compartimos tus datos personales con terceros, salvo con <strong>Mercado Pago</strong> como procesador de pagos, bajo sus propias políticas de privacidad. MercadoDelPago no tiene ninguna afiliación con Mercado Pago® ni MercadoLibre®.</p>
        <h2>5. Derechos ARCO</h2>
        <p>Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos. Para ejercerlos escríbenos a: <strong>hola@mercadodelpago.site</strong></p>
        <h2>6. Cambios</h2>
        <p>Podemos actualizar este aviso. Te notificaremos por correo electrónico si hay cambios relevantes.</p>
      </div>
      <Footer />
    </>
  )
}
