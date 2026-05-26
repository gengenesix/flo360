'use client'

import React, { useRef } from 'react'
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

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-grid" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '52fr 48fr',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── LEFT: cream editorial panel ── */}
      <div className="hero-left" style={{
        backgroundColor: '#FFF8F9',
        padding: '9rem 4rem 4rem 5vw',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative', zIndex: 2,
      }}>
        {/* Decorative vertical rose bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '5px', backgroundColor: '#C8436A',
        }} />

        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.875rem',
              marginBottom: '2.5rem',
            }}
          >
            <div style={{ width: '32px', height: '2px', backgroundColor: '#C8436A', borderRadius: '1px' }} />
            <span style={{
              fontSize: '0.625rem', fontWeight: 800,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: '#C8436A',
            }}>Ghana&apos;s Premium Femcare Brand</span>
          </motion.div>

          {/* Main headline — dark on cream */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(4rem, 7vw, 7.5rem)',
              lineHeight: 0.88, fontWeight: 900,
              letterSpacing: '-0.035em',
              color: '#1A1A1A',
              margin: 0,
            }}>
              Flow<br />With
            </h1>
            <span style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3.5rem, 6.5vw, 7rem)',
              fontStyle: 'italic', fontWeight: 900,
              color: '#C8436A',
              lineHeight: 1, display: 'block',
              letterSpacing: '-0.03em',
              marginTop: '0.05em',
            }}>
              Confidence.
            </span>
          </motion.div>

          {/* Thin divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            style={{
              height: '1px', backgroundColor: 'rgba(200,67,106,0.2)',
              margin: '2rem 0', transformOrigin: 'left',
            }}
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: '1.0625rem', lineHeight: 1.78,
              color: '#6B4D56',
              maxWidth: '360px', marginBottom: '2.25rem',
            }}
          >
            Premium 12-hour protection designed for every Ghanaian woman.
            Extra Long 330mm · 3D Soft Fit · Mint Essence freshness.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#C8436A', color: '#fff',
              padding: '1rem 2.25rem', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.8125rem',
              textDecoration: 'none', letterSpacing: '0.06em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 28px rgba(200,67,106,0.35)',
            }}>
              Shop Now <Arrow size={13} />
            </Link>
            <Link href="/quiz" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#C8436A', fontSize: '0.8125rem',
              fontWeight: 700, textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              border: '2px solid #C8436A',
              padding: '0.9375rem 1.75rem', borderRadius: '6px',
            }}>
              Find Your Fit <Arrow size={13} />
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72 }}
          className="hero-stats"
          style={{
            display: 'flex', gap: '3rem',
            paddingTop: '2.5rem', marginTop: '3.5rem',
            borderTop: '1px solid rgba(200,67,106,0.12)',
          }}
        >
          {[
            { num: '12H', label: 'Protection' },
            { num: '330mm', label: 'Extra Long' },
            { num: '3D', label: 'Soft Fit' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '2.25rem', letterSpacing: '0.05em',
                color: '#C8436A', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontSize: '0.5625rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#9A7080', marginTop: '0.3rem',
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT: rose panel — model fully visible, zero tint ── */}
      <div className="hero-model-panel" style={{
        backgroundColor: '#C8436A',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Large decorative circle — sits behind the model, creates depth */}
        <div style={{
          position: 'absolute',
          bottom: '-5%', right: '-10%',
          width: '85%', paddingBottom: '85%',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.07)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '5%', left: '-15%',
          width: '50%', paddingBottom: '50%',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }} />

        {/* Giant faint watermark */}
        <div style={{
          position: 'absolute',
          bottom: '-1rem', right: '-0.5rem',
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(8rem, 16vw, 14rem)',
          color: 'rgba(255,255,255,0.06)',
          lineHeight: 1, letterSpacing: '-0.02em',
          userSelect: 'none', pointerEvents: 'none',
          zIndex: 1,
        }}>360°</div>

        {/* Model — contain so FULL model + product visible, ZERO colour filter */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0,
            zIndex: 2,
          }}
        >
          <Image
            src="/images/model-pink.jpg"
            alt="FLO 360° — Flow With Confidence"
            fill priority
            sizes="48vw"
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom',
            }}
          />
        </motion.div>

        {/* Floating 12H badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.45 }}
          style={{
            position: 'absolute', top: '14%', right: '8%',
            backgroundColor: '#1B5E35',
            padding: '0.875rem 1.25rem', borderRadius: '8px',
            zIndex: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.25rem', lineHeight: 1, letterSpacing: '0.04em', color: '#fff' }}>12H</div>
          <div style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Protection</div>
        </motion.div>

        {/* Floating Mint badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.45 }}
          style={{
            position: 'absolute', bottom: '22%', right: '6%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '0.625rem 1rem', borderRadius: '100px',
            zIndex: 10, display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80', flexShrink: 0 }} />
          <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Mint Essence</span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ── FEATURES — dark typographic columns ──────────────────────────────────────
function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const items = [
    { num: '01', stat: '12H', title: 'Night & Day Protection', body: 'Reliable guard from morning to midnight — no leaks, no worries, no compromises.' },
    { num: '02', stat: 'Mint', title: 'Mint Essence Freshness', body: 'Subtly scented with mint essence for lasting all-day confidence.' },
    { num: '03', stat: '360°', title: 'Leak-Free Coverage', body: 'Super absorbent core with 360° barrier technology that really works.' },
    { num: '04', stat: '3D', title: 'Soft Fit Comfort', body: 'Contoured 3D shape that moves naturally and comfortably with your body.' },
  ]

  return (
    <section ref={ref} className="sec" style={{ backgroundColor: '#111', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '1.25rem',
            marginBottom: '4.5rem',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '0.75rem', letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.22)',
          }}>ENGINEERED FOR YOU</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
        </motion.div>

        <div className="feat-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
        }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '0 2.5rem',
                borderRight: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.6875rem', letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.18)',
                marginBottom: '1.5rem',
              }}>{item.num}</div>

              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(3rem, 4vw, 4.5rem)',
                lineHeight: 1, letterSpacing: '0.02em',
                color: '#C8436A',
                marginBottom: '1.25rem',
              }}>{item.stat}</div>

              <h3 style={{
                fontSize: '0.9375rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '0.625rem',
                letterSpacing: '-0.01em', lineHeight: 1.3,
              }}>{item.title}</h3>

              <p style={{
                fontSize: '0.8125rem', lineHeight: 1.8,
                color: 'rgba(255,255,255,0.32)',
              }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 2rem !important; border-left: none !important; }
          .feat-grid > div { border-right: none !important; padding: 0 1rem !important; }
        }
      `}</style>
    </section>
  )
}

// ── PRODUCTS ─────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    image: '/images/pack.jpg',
    name: 'FLO 360° Extra Long Pack',
    sub: '5+5 pcs 330mm + 2 Free Panty Liners. Flagship protection, all day, all night.',
    tags: ['Extra Long', '3D Soft Fit', 'Mint Essence'],
    best: true,
  },
  {
    image: '/images/display-box.jpg',
    name: 'FLO 360° Display Box',
    sub: 'Bulk carton for families and resellers. Same trusted protection, stocked up.',
    tags: ['Bulk Pack', 'Cotton Feel', 'Super Absorbent'],
    best: false,
  },
  {
    image: '/images/products-stack.jpg',
    name: 'FLO 360° Collection',
    sub: '12 hours of uninterrupted protection. Day or night — she\'s got you covered.',
    tags: ['330mm', 'Cotton Feel', 'Slightly Scented'],
    best: false,
  },
]

function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="sec" style={{ backgroundColor: 'var(--cream)', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '3.5rem',
            flexWrap: 'wrap', gap: '1rem',
          }}
        >
          <div>
            <span style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C8436A',
              display: 'block', marginBottom: '0.75rem',
            }}>Our Range</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 900, color: 'var(--charcoal)',
              letterSpacing: '-0.025em', lineHeight: 1.1,
            }}>
              Protection You<br />
              <span style={{ fontStyle: 'italic', color: '#C8436A' }}>Can Trust</span>
            </h2>
          </div>
          <Link href="/products" style={{
            fontSize: '0.75rem', fontWeight: 700,
            color: '#C8436A', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: '1.5px solid #C8436A', paddingBottom: '2px',
          }}>
            View All <Arrow size={13} />
          </Link>
        </motion.div>

        <div className="products-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
        }}>
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: p.best ? '#C8436A' : '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                border: p.best ? 'none' : '1px solid rgba(200,67,106,0.1)',
                boxShadow: p.best ? '0 20px 60px rgba(200,67,106,0.28)' : '0 2px 20px rgba(0,0,0,0.04)',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <Image src={p.image} alt={p.name} fill sizes="33vw" style={{ objectFit: 'cover' }} />
                {p.best && (
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    backgroundColor: '#1B5E35', color: '#fff',
                    padding: '0.25rem 0.75rem', borderRadius: '4px',
                    fontSize: '0.5625rem', fontWeight: 800,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                  }}>Best Seller</div>
                )}
              </div>
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.0625rem', fontWeight: 800,
                  color: p.best ? '#fff' : 'var(--charcoal)',
                  marginBottom: '0.5rem', letterSpacing: '-0.01em', lineHeight: 1.3,
                }}>{p.name}</h3>
                <p style={{
                  fontSize: '0.8125rem', lineHeight: 1.7,
                  color: p.best ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                  marginBottom: '1.25rem', flex: 1,
                }}>{p.sub}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: '0.5625rem', fontWeight: 700,
                      padding: '0.25rem 0.625rem', borderRadius: '4px',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      backgroundColor: p.best ? 'rgba(255,255,255,0.15)' : 'rgba(200,67,106,0.07)',
                      color: p.best ? 'rgba(255,255,255,0.8)' : '#C8436A',
                    }}>{t}</span>
                  ))}
                </div>
                <Link href="/products" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  padding: '0.8125rem 1.25rem', borderRadius: '6px',
                  fontWeight: 700, fontSize: '0.75rem',
                  textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                  backgroundColor: p.best ? '#fff' : '#1B5E35',
                  color: p.best ? '#C8436A' : '#fff',
                }}>
                  Learn More <Arrow size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

// ── WHY FLO ──────────────────────────────────────────────────────────────────
function WhyFlo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="sec" style={{ backgroundColor: '#F5E8EC', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="why-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="why-img-stack"
            style={{ position: 'relative', height: '540px' }}
          >
            <div style={{
              position: 'absolute', top: 0, left: '5%', right: 0, bottom: '12%',
              borderRadius: '14px', overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(200,67,106,0.16)',
            }}>
              <Image src="/images/model-white.jpg" alt="FLO 360 model" fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="40vw" />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 55%, rgba(200,67,106,0.2))',
              }} />
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: '46%', height: '36%',
              borderRadius: '10px', overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
              border: '3px solid #fff',
            }}>
              <Image src="/images/model-student.jpg" alt="FLO 360 student" fill style={{ objectFit: 'cover' }} sizes="20vw" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55 }}
              style={{
                position: 'absolute', top: '7%', left: '-5%',
                backgroundColor: '#C8436A', borderRadius: '8px',
                padding: '1rem 1.25rem',
                boxShadow: '0 12px 36px rgba(200,67,106,0.35)',
                color: '#fff', zIndex: 10,
              }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.04em', lineHeight: 1 }}>330mm</div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Extra Long</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <span style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C8436A',
              display: 'block', marginBottom: '0.75rem',
            }}>Why Choose FLO 360°</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
              fontWeight: 900, color: 'var(--charcoal)',
              letterSpacing: '-0.025em', lineHeight: 1.1,
              marginBottom: '2.5rem',
            }}>
              Why Girls Choose<br />
              <span style={{ color: '#C8436A', fontStyle: 'italic' }}>FLO 360°</span>
            </h2>

            {[
              { title: 'Super Absorbent Core', body: 'Up to 12 hours of reliable protection, day or night. Advanced core locks in flow, keeps you dry.', num: '01' },
              { title: 'Extra Long 330mm', body: 'Wide, full coverage that moves with your body. Extra length means total security during heavy flow days.', num: '02' },
              { title: 'Cotton-Soft Feel', body: 'Gentle, breathable cotton-feel surface. All-day comfort — no rashes, no irritation, just softness.', num: '03' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.12 }}
                style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.375rem 0',
                  borderBottom: i < 2 ? '1px solid rgba(200,67,106,0.1)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '0.8125rem', letterSpacing: '0.1em',
                  color: '#C8436A', opacity: 0.4,
                  paddingTop: '0.125rem', minWidth: '26px',
                }}>{item.num}</div>
                <div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.72, color: 'var(--muted)' }}>{item.body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.65 }} style={{ marginTop: '2rem' }}>
              <Link href="/quiz" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#C8436A', color: '#fff',
                padding: '0.875rem 2rem', borderRadius: '6px',
                fontWeight: 700, fontSize: '0.8125rem',
                textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                Find Your Perfect Fit <Arrow size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .why-layout { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  )
}

// ── QUOTE — bold dark section ─────────────────────────────────────────────────
function QuoteBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="sec" style={{
      backgroundColor: '#111',
      padding: '9rem 1.5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Giant quote mark */}
      <div style={{
        position: 'absolute', top: '-2rem', left: '2.5rem',
        fontFamily: 'var(--font-playfair)',
        fontSize: 'clamp(12rem, 22vw, 20rem)',
        color: 'rgba(200,67,106,0.06)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        fontWeight: 900,
      }}>&ldquo;</div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '0.75rem', letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.2)',
            marginBottom: '2.5rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}
        >
          FLO 360° COMMUNITY
          <div style={{ width: '36px', height: '1px', backgroundColor: '#C8436A' }} />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.875rem)',
            fontWeight: 900, fontStyle: 'italic',
            color: '#fff', lineHeight: 1.38,
            letterSpacing: '-0.02em', margin: 0,
            marginBottom: '3rem',
          }}
        >
          &ldquo;FLO 360° gives me the confidence to go anywhere, do anything — every single day.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.42 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Link href="/products" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#C8436A', color: '#fff',
            padding: '0.875rem 2rem', borderRadius: '6px',
            fontWeight: 700, fontSize: '0.8125rem',
            textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Shop Now <Arrow size={13} />
          </Link>
          <Link href="/quiz" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem',
            fontWeight: 600, textDecoration: 'none',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Find Your Fit <Arrow size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ── TIPS PREVIEW ─────────────────────────────────────────────────────────────
const TIPS = [
  { title: 'How to Choose the Right Pad for You', teaser: 'Flow volume, length, and lifestyle matter. Here\'s how to find your perfect match.' },
  { title: 'Understanding Your Monthly Cycle', teaser: 'Know your body better. A simple breakdown of what happens every month.' },
  { title: '5 Ways to Manage Period Discomfort', teaser: 'Practical, proven tips to feel comfortable and confident during your period.' },
]

function TipsPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="sec" style={{ backgroundColor: 'var(--cream)', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '3rem',
            flexWrap: 'wrap', gap: '1rem',
          }}
        >
          <div>
            <span style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C8436A',
              display: 'block', marginBottom: '0.75rem',
            }}>Tips &amp; Knowledge</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
              fontWeight: 900, color: 'var(--charcoal)',
              letterSpacing: '-0.025em', lineHeight: 1.1,
            }}>Know Your Flow</h2>
          </div>
          <Link href="/tips" style={{
            fontSize: '0.75rem', fontWeight: 700, color: '#C8436A',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: '1.5px solid #C8436A', paddingBottom: '2px',
          }}>
            All Articles <Arrow size={13} />
          </Link>
        </motion.div>

        <div className="tips-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {TIPS.map((tip, i) => {
            const accents = ['#C8436A', '#1B5E35', '#A03354']
            const accent = accents[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, delay: i * 0.1 }}
              >
                <Link href="/tips" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <article style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(200,67,106,0.09)',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    padding: '2rem', position: 'relative',
                    transition: 'box-shadow 0.3s ease, transform 0.25s ease',
                  }}>
                    <div style={{
                      position: 'absolute', bottom: '-1rem', right: '0.75rem',
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '6.5rem', lineHeight: 1,
                      color: `${accent}0a`,
                      userSelect: 'none', pointerEvents: 'none',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: '1.25rem', lineHeight: 1,
                        color: accent, opacity: 0.35, letterSpacing: '0.04em',
                      }}>{String(i + 1).padStart(2, '0')}</span>
                      <div style={{ width: '1px', height: '16px', backgroundColor: accent, opacity: 0.2 }} />
                      <span style={{
                        fontSize: '0.5625rem', fontWeight: 800,
                        letterSpacing: '0.15em', textTransform: 'uppercase', color: accent,
                      }}>Know Your Flow</span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.0625rem', fontWeight: 800,
                      color: 'var(--charcoal)',
                      lineHeight: 1.38, letterSpacing: '-0.015em',
                      marginBottom: '0.625rem', flex: 0,
                    }}>{tip.title}</h3>

                    <p style={{
                      fontSize: '0.8125rem', color: 'var(--muted)',
                      lineHeight: 1.7, marginBottom: '1.5rem', flex: 1,
                    }}>{tip.teaser}</p>

                    <span style={{
                      fontSize: '0.75rem', fontWeight: 700,
                      color: accent, letterSpacing: '0.08em', textTransform: 'uppercase',
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                    }}>
                      Read <Arrow size={12} />
                    </span>
                  </article>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .tips-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .tips-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

// ── CTA BAND ─────────────────────────────────────────────────────────────────
function CTABand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="sec" style={{ backgroundColor: '#1B5E35', padding: '5.5rem 1.5rem' }}>
      <div style={{
        maxWidth: '1240px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '0.75rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
            marginBottom: '0.75rem',
          }}>Not sure which pad?</p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.625rem, 3vw, 2.375rem)',
            fontWeight: 900, color: '#fff',
            letterSpacing: '-0.025em', lineHeight: 1.15,
          }}>
            Take the 60-second quiz.<br />
            <span style={{ fontStyle: 'italic', color: '#F2A8C4' }}>Find your perfect FLO.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link href="/quiz" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#F2A8C4', color: '#A03354',
            padding: '0.875rem 2rem', borderRadius: '6px',
            fontWeight: 700, fontSize: '0.8125rem',
            textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Find Your Fit <Arrow size={13} />
          </Link>
          <Link href="/products" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'transparent', color: 'rgba(255,255,255,0.55)',
            padding: '0.875rem 1.625rem', borderRadius: '6px',
            fontWeight: 600, fontSize: '0.8125rem',
            textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
            border: '1px solid rgba(255,255,255,0.22)',
          }}>
            Browse Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsSection />
      <WhyFlo />
      <QuoteBanner />
      <TipsPreview />
      <CTABand />
    </>
  )
}
