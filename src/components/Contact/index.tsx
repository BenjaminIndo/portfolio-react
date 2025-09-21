import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsLoading(true)
    setMessage('')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage('¡Mensaje enviado exitosamente!')
          form.current?.reset()
          setIsLoading(false)
        },
        (error) => {
          console.error('Error:', error)
          setMessage('Error al enviar el mensaje. Inténtalo de nuevo.')
          setIsLoading(false)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>CONTACT ME!</h1>
          <p>
            Estoy interesado en oportunidades de práctica profesional, donde
            pueda desenvolverme en un ambiente con capacidad de crecimiento y
            aportar con mis habilidades técnicas y creativas. Si deseas ponerte
            en contacto conmigo, completa el siguiente formulario.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Nombre"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value={isLoading ? 'ENVIANDO...' : 'ENVIAR'}
                    disabled={isLoading}
                  />
                </li>
              </ul>
              {message && (
                <div
                  className={`message ${
                    message.includes('Error') ? 'error' : 'success'
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
