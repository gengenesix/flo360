'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

function Arrow({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

const VALUES = [
  {
    num: '01',
    title: 'Natural Freshness',
    body: 'Mint essence for all-day freshness that feels effortless and never overwhelming. We built scent that works with your body, not against it.',
    bg: '#C8436A',
    fgText: '#fff',
    mutedText: 'rgba(255,255,255,0.65)',
    watermark: 'rgba(255,255,255,0.055)',
  },
  {
    num: '02',
    title: 'Reliable Protection',
    body: 'Because real confidence starts with knowing you\'re protected. 12 hours of security — day or night. Every single time.',
    bg: '#1B5E35',
    fgText: '#fff',
    mutedText: 'rgba(255,255,255,0.6)',
    watermark: 'rgba(255,255,255,0.048)',
  },
  {
    num: '03',
    title: 'Made for Africa',
    body: 'Designed for our bodies, our climate, our lives. FLO 360° isn\'t an import — it\'s proudly Ghanaian, engineered for the African woman.',
    bg: '#111111',
    fgText: '#fff',
    mutedText: 'rgba(255,255,255,0.5)',
    watermark: 'rgba(255,255,255,0.045)',
  },
]

export default function AboutPage() {
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-60px' })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* HERO */}
      <section className="about-hero" style={{
        backgroundColor: '#1B5E35',
        minHeight: '75vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Left: text */}
        <div className="hero-text-left" style={{
          padding: '9rem 3.5rem 5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          position: 'relative', zIndex: 2,
        }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '0.875rem',
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.5rem',
            }}>
              <span style={{ width: '24px', height: '1px', backgroundColor: '#F2A8C4', display: 'inline-block' }} />
              Our Story
            </span>

            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3.5rem, 6.5vw, 7rem)',
              fontWeight: 900,
              lineHeight: 0.92, letterSpacing: '-0.03em',
              color: '#fff', margin: 0, marginBottom: '0.1em',
            }}>We Are</h1>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 5.5vw, 6rem)',
              fontWeight: 900, fontStyle: 'italic',
              color: '#F2A8C4',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              margin: 0, marginBottom: '1.75rem',
            }}>FLO 360°</h1>

            <p style={{
              fontSize: '1.0625rem', fontWeight: 500,
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: '320px',
            }}>
              Born in Ghana. Built for Every Woman.
            </p>
          </motion.div>
        </div>

        {/* Right: school girl model blended into green */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/images/model-student.jpg"
            alt="FLO 360 — Built for Every Woman"
            fill priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          {/* Blend left edge into forest green */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #1B5E35 0%, rgba(27,94,53,0.7) 25%, rgba(27,94,53,0.1) 55%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          {/* Blend top edge */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, #1B5E35 0%, transparent 20%)',
            pointerEvents: 'none',
          }} />
          {/* Subtle color grade to harmonise yellow bg with green */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(27,94,53,0.18)',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }} />
        </motion.div>

        <style>{`@media (max-width: 768px) { .about-hero { grid-template-columns: 1fr !important; } .about-hero > div:last-child { height: 60vw; } }`}</style>
      </section>

      {/* BRAND STORY */}
      <section ref={storyRef} style={{ backgroundColor: 'var(--cream)', padding: '7rem 1.5rem' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="story-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="story-img-stack"
              style={{ position: 'relative', height: '560px' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '8%', right: 0, bottom: '10%',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(200,67,106,0.16)',
              }}>
                <Image src="/images/products-stack.jpg" alt="FLO 360 products" fill style={{ objectFit: 'cover' }} sizes="40vw" />
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: '50%', height: '40%',
                borderRadius: '12px', overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
                border: '4px solid #fff',
              }}>
                <Image src="/images/pack.jpg" alt="FLO 360 pack" fill style={{ objectFit: 'cover' }} sizes="20vw" />
              </div>
            </motion.div>

            {/* Right: Story text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <span style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.75rem', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#C8436A',
                display: 'block', marginBottom: '0.75rem',
              }}>Our Beginning</span>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
                fontWeight: 900, color: 'var(--charcoal)',
                letterSpacing: '-0.025em', lineHeight: 1.12,
                marginBottom: '1.75rem',
              }}>
                Built for Every Woman,<br />
                <span style={{ fontStyle: 'italic', color: '#C8436A' }}>Every Day.</span>
              </h2>
              <div style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                <p style={{ marginBottom: '1.25rem' }}>
                  FLO 360 Global Limited was created to give every woman and girl access to premium-quality feminine care that truly works. We believe protection shouldn&apos;t come at the cost of comfort.
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  Every FLO 360° pad is engineered for 12-hour confidence — from morning to midnight. Our 3D Soft Fit technology contours to your body, while our Super Absorbent Core and Mint Essence keep you fresh all day.
                </p>
                <p>
                  We are proudly Ghanaian. Every design decision we make is shaped by our understanding of the African woman&apos;s life, climate, and needs. FLO 360° isn&apos;t an import — it&apos;s ours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`@media (max-width: 900px) { .story-layout { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* MISSION */}
      <section style={{
        backgroundColor: '#111',
        padding: '7rem 1.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-30%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,67,106,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <div style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.22)',
              marginBottom: '2.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }}>
              OUR MISSION
              <div style={{ width: '32px', height: '1px', backgroundColor: '#C8436A' }} />
            </div>
            <blockquote style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 3vw, 2.375rem)',
              fontWeight: 800, fontStyle: 'italic',
              color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.45,
              margin: 0,
            }}>
              &ldquo;To empower every girl to flow freely — with comfort, confidence, and care.&rdquo;
            </blockquote>
            <div style={{
              width: '48px', height: '2px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              margin: '2.5rem auto 0', borderRadius: '1px',
            }} />
          </motion.div>
        </div>
      </section>

      {/* VALUES — 3 bold color panels */}
      <section ref={valuesRef}>
        <div style={{ backgroundColor: 'var(--cream)', padding: '6rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
            >
              <span style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.75rem', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#C8436A',
                display: 'block', marginBottom: '0.75rem',
              }}>What We Stand For</span>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 900, color: 'var(--charcoal)',
                letterSpacing: '-0.03em', lineHeight: 1.08,
              }}>
                Three Promises.<br />
                <span style={{ fontStyle: 'italic', color: '#C8436A' }}>No Exceptions.</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Full-bleed 3-panel grid */}
        <div className="values-panels" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                backgroundColor: v.bg,
                padding: '4rem 3rem 3.5rem',
                position: 'relative', overflow: 'hidden',
                minHeight: '360px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}
            >
              <div style={{
                position: 'absolute', top: '-1.5rem', right: '0.5rem',
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(7rem, 14vw, 12rem)',
                lineHeight: 1, color: v.watermark,
                userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.02em',
              }}>{v.num}</div>

              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.8125rem', letterSpacing: '0.22em',
                color: v.mutedText, marginBottom: '1.75rem',
              }}>{v.num} — 03</div>

              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)',
                fontWeight: 900, color: v.fgText,
                letterSpacing: '-0.02em', lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}>{v.title}</h3>

              <p style={{
                fontSize: '0.9375rem', lineHeight: 1.78,
                color: v.mutedText, maxWidth: '260px',
              }}>{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT BAND */}
      <section style={{ backgroundColor: '#1B5E35', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 900, color: '#fff',
              letterSpacing: '-0.025em', lineHeight: 1.15,
              marginBottom: '1rem',
            }}>Get in Touch</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
              Questions, orders, wholesale enquiries — we&apos;re always here.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#F2A8C4', color: '#A03354',
                padding: '0.9375rem 2rem', borderRadius: '6px',
                fontWeight: 700, fontSize: '0.8125rem',
                textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                Contact Us <Arrow />
              </Link>
              <a href="https://wa.me/233249667309" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#25D366', color: '#fff',
                padding: '0.9375rem 2rem', borderRadius: '6px',
                fontWeight: 700, fontSize: '0.8125rem', textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                WhatsApp Us <Arrow />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .values-panels { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
