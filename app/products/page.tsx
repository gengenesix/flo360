'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

const FILTERS = ['All', 'Extra Long', 'Night Protection', 'Daily']

const PRODUCTS = [
  {
    image: '/images/pack.jpg',
    name: 'FLO 360° Extra Long Pack',
    shortDesc: 'The complete protection pack for serious coverage.',
    fullDesc: '5 pcs 330mm + 5 pcs 330mm + 2 Free Panty Liners 155mm. Our flagship product — engineered for maximum protection and all-day comfort.',
    tags: ['Extra Long', 'Night Protection'],
    features: ['3D Soft Fit', 'Super Absorbent', 'Cotton Feel', 'Mint Essence', 'Night & Day'],
    badge: 'Best Seller',
    badgeColor: '#1B5E35',
  },
  {
    image: '/images/display-box.jpg',
    name: 'FLO 360° Display Box',
    shortDesc: 'Bulk carton for families, shops, and resellers.',
    fullDesc: 'Same trusted FLO 360° protection in a convenient bulk carton. Perfect for stocking up at home, sharing with family, or retail.',
    tags: ['Extra Long', 'Night Protection'],
    features: ['3D Soft Fit', 'Super Absorbent', 'Cotton Feel', 'Bulk Pack'],
    badge: 'Value Pack',
    badgeColor: '#C8436A',
  },
  {
    image: '/images/products-stack.jpg',
    name: 'FLO 360° Collection',
    shortDesc: 'The full FLO experience — your complete period care.',
    fullDesc: 'Premium protection day or night. Every pad in the FLO 360° collection features our exclusive 3D Soft Fit technology and Mint Essence freshness.',
    tags: ['Extra Long', 'Daily'],
    features: ['330mm Long', '3D Soft Fit', 'Slightly Scented', 'Cotton Feel'],
    badge: null,
    badgeColor: '',
  },
]

export default function ProductsPage() {
  const [active, setActive] = useState('All')
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.tags.includes(active))

  return (
    <>
      {/* HERO — dark editorial split */}
      <section className="products-hero" style={{
        backgroundColor: '#0D0D0D',
        minHeight: '60vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Left: text */}
        <div className="hero-text-left" style={{
          padding: '10rem 3.5rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 2,
        }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.875rem',
            }}
          >
            <span style={{ width: '24px', height: '1px', backgroundColor: '#C8436A', flexShrink: 0 }} />
            FLO 360° Global Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 8vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '0.01em',
              color: '#fff',
              margin: 0, marginBottom: '2rem',
            }}
          >
            OUR<br />
            <span style={{ color: '#C8436A' }}>PRODUCTS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              fontSize: '0.9375rem', lineHeight: 1.78,
              color: 'rgba(255,255,255,0.45)',
              maxWidth: '360px',
            }}
          >
            Premium protection engineered for every Ghanaian woman. Every day. Every flow.
          </motion.p>
        </div>

        {/* Right: full-bleed product image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="products-hero-img"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/images/products-stack.jpg"
            alt="FLO 360 products"
            fill priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.3) 25%, transparent 50%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

      </section>

      {/* FILTER TABS */}
      <section className="sec" style={{ backgroundColor: 'var(--cream)', padding: '2.5rem 1.5rem 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div ref={headerRef} style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
            {FILTERS.map((f, i) => (
              <motion.button
                key={f}
                initial={{ opacity: 0, y: 8 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                onClick={() => setActive(f)}
                style={{
                  padding: '0.5625rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer',
                  border: active === f ? 'none' : '1px solid rgba(200,67,106,0.18)',
                  backgroundColor: active === f ? '#C8436A' : 'transparent',
                  color: active === f ? '#fff' : 'var(--muted)',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="sec" style={{ backgroundColor: 'var(--cream)', padding: '3rem 1.5rem 7rem' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="products-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem',
          }}>
            {filtered.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(200,67,106,0.09)',
                  boxShadow: '0 2px 24px rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {p.badge && (
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      backgroundColor: p.badgeColor,
                      color: '#fff', padding: '0.25rem 0.75rem',
                      borderRadius: '4px', fontSize: '0.5625rem',
                      fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                    }}>{p.badge}</div>
                  )}
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.125rem', fontWeight: 800,
                    color: 'var(--charcoal)',
                    letterSpacing: '-0.015em', lineHeight: 1.3,
                    marginBottom: '0.5rem',
                  }}>{p.name}</h2>

                  <p style={{
                    fontSize: '0.875rem', color: 'var(--muted)',
                    lineHeight: 1.68, marginBottom: '1.25rem', flex: 1,
                  }}>{p.fullDesc}</p>

                  {/* Features as clean tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
                    {p.features.map(f => (
                      <span key={f} style={{
                        fontSize: '0.5625rem', fontWeight: 700,
                        padding: '0.25rem 0.625rem', borderRadius: '4px',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        backgroundColor: 'rgba(200,67,106,0.07)',
                        color: '#C8436A',
                      }}>{f}</span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/233249667309?text=Hi%20FLO%20360%2C%20I%20want%20to%20order!"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '6px',
                      backgroundColor: '#1B5E35', color: '#fff',
                      padding: '0.875rem', borderRadius: '6px',
                      fontWeight: 700, fontSize: '0.8125rem',
                      textDecoration: 'none',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}
                  >
                    Order via WhatsApp <Arrow size={13} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)', fontSize: '0.9375rem' }}>
              No products in this category yet.
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 560px) { .products-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  )
}
