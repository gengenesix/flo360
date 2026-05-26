'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}

const CONTACT_ITEMS = [
  { label: 'Email', value: 'Flo360official@gmail.com', href: 'mailto:Flo360official@gmail.com' },
  { label: 'Phone', value: '0249 667 309', href: 'tel:+233249667309' },
  { label: 'Phone', value: '0262 389 845', href: 'tel:+233262389845' },
  { label: 'Instagram', value: '@Flo360official', href: 'https://instagram.com/Flo360official' },
  { label: 'Facebook', value: 'Flo 360', href: 'https://facebook.com' },
  { label: 'Location', value: 'Accra, Ghana', href: '#' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.9375rem 1.125rem',
    borderRadius: '8px',
    border: '1.5px solid rgba(200,67,106,0.15)',
    backgroundColor: '#fafafa',
    fontSize: '0.9375rem',
    color: 'var(--charcoal)',
    fontFamily: 'var(--font-jakarta), sans-serif',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s',
  }

  return (
    <>
      {/* HERO — dark editorial */}
      <section style={{
        backgroundColor: '#111',
        padding: '10rem 1.5rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Giant quote mark watermark */}
        <div style={{
          position: 'absolute', top: '-1rem', right: '3%',
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(14rem, 25vw, 22rem)',
          color: 'rgba(200,67,106,0.05)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}>GET</div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '0.875rem',
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: '1.5rem',
            }}>
              <span style={{ width: '24px', height: '1px', backgroundColor: '#C8436A', display: 'inline-block' }} />
              Get in Touch
            </span>

            <h1 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(4.5rem, 9vw, 9rem)',
              lineHeight: 0.88, letterSpacing: '0.01em',
              color: '#fff', margin: 0, marginBottom: '0.1em',
            }}>CONTACT</h1>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 6vw, 6.5rem)',
              fontWeight: 900, fontStyle: 'italic',
              color: '#C8436A',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              margin: 0, marginBottom: '1.75rem',
            }}>Us.</h1>

            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.7, maxWidth: '400px',
            }}>
              Orders, wholesale enquiries, feedback — we read every message and respond within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5rem 1.5rem 7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* LEFT: Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem', fontWeight: 900,
                color: 'var(--charcoal)', letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}>Send Us a Message</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Orders, wholesale enquiries, feedback — we read every message.
              </p>

              {!sent ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                      Full Name *
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                      Email Address *
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                      Phone (optional)
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="0XX XXX XXXX" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                      Message *
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us how we can help..." required rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.01 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      backgroundColor: loading ? 'rgba(200,67,106,0.5)' : '#C8436A',
                      color: '#fff', padding: '1rem', borderRadius: '8px',
                      fontWeight: 700, fontSize: '0.8125rem',
                      border: 'none', cursor: loading ? 'default' : 'pointer',
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      marginTop: '0.25rem',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    {loading ? 'Sending...' : <><SendIcon /> Send Message</>}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '3rem 0' }}
                >
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '8px',
                    backgroundColor: 'rgba(27,94,53,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B5E35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.375rem', fontWeight: 800,
                    color: 'var(--charcoal)', marginBottom: '0.625rem',
                  }}>Message Sent!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    Thank you, {form.name}. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    style={{
                      background: 'none', border: '1.5px solid rgba(200,67,106,0.2)',
                      color: '#C8436A', padding: '0.625rem 1.25rem',
                      borderRadius: '6px', fontWeight: 600, fontSize: '0.8125rem',
                      cursor: 'pointer', fontFamily: 'var(--font-jakarta), sans-serif',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}
                  >
                    Send another
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* RIGHT: Contact details */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem', fontWeight: 900,
                color: 'var(--charcoal)', letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}>We&apos;re Here for You</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                Reach us through any of the channels below. Our team typically responds within a few hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '2.5rem' }}>
                {CONTACT_ITEMS.map(({ label, value, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1rem 0',
                      borderBottom: i < CONTACT_ITEMS.length - 1 ? '1px solid rgba(200,67,106,0.1)' : 'none',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                      cursor: href === '#' ? 'default' : 'pointer',
                    }}
                  >
                    <div style={{
                      fontSize: '0.625rem', fontWeight: 700,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: '#C8436A', minWidth: '80px',
                    }}>{label}</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--charcoal)', textAlign: 'right' }}>
                      {value}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/233249667309?text=Hi%20FLO%20360%2C%20I%20want%20to%20learn%20more!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  backgroundColor: '#25D366', color: '#fff',
                  padding: '1rem 1.5rem', borderRadius: '8px',
                  fontWeight: 700, fontSize: '0.8125rem',
                  textDecoration: 'none',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        <style>{`@media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>
    </>
  )
}
