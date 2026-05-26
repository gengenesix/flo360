'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const STEPS = [
  {
    q: 'How heavy is your flow?',
    sub: 'This helps us match you to the right absorbency level.',
    options: [
      { label: 'Light', desc: 'Minimal flow, lasts all day on one pad' },
      { label: 'Moderate', desc: 'Average flow, change pads 3–4 times' },
      { label: 'Heavy', desc: 'Frequent changes, sometimes leaking' },
      { label: 'Very Heavy', desc: 'Need maximum protection at all times' },
    ],
  },
  {
    q: 'When do you need protection most?',
    sub: 'We\'ll make sure you\'re covered exactly when it matters.',
    options: [
      { label: 'Daytime', desc: 'During school, work, or daily activities' },
      { label: 'Nighttime', desc: 'Especially while sleeping' },
      { label: 'Both', desc: 'I need full coverage around the clock' },
    ],
  },
  {
    q: 'What matters most to you?',
    sub: 'Your priorities shape your perfect pad.',
    options: [
      { label: 'Comfort', desc: 'Soft, breathable, gentle on skin' },
      { label: 'Length', desc: 'Extra long for maximum coverage' },
      { label: 'Freshness', desc: 'Scented for all-day confidence' },
      { label: 'Leak Protection', desc: 'Maximum security at all costs' },
    ],
  },
  {
    q: 'Scented or unscented?',
    sub: 'Personal preference — both options are available in FLO 360°.',
    options: [
      { label: 'Slightly Scented', desc: 'Subtle mint essence for freshness' },
      { label: 'Unscented', desc: 'No fragrance, pure comfort' },
    ],
  },
]

const RESULT = {
  name: 'FLO 360° Extra Long Pack',
  sub: '5+5 pcs 330mm + 2 Free Panty Liners 155mm',
  desc: 'Based on your answers, the FLO 360° Extra Long Pack is your perfect match. With 12-hour protection, 3D Soft Fit technology, and Mint Essence freshness, you\'ll flow with total confidence — day and night.',
  features: ['12-Hour Protection', '330mm Extra Long', '3D Soft Fit', 'Super Absorbent Core', 'Mint Essence', 'Cotton Feel'],
  image: '/images/pack.jpg',
}

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [dir, setDir] = useState(1)

  const current = STEPS[step]
  const progress = ((step) / STEPS.length) * 100

  function choose(opt: string) {
    setSelected(opt)
  }

  function next() {
    if (!selected) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    setDir(1)
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      setDone(true)
    }
  }

  function back() {
    if (step === 0) return
    setDir(-1)
    setAnswers(a => a.slice(0, -1))
    setSelected(null)
    setStep(s => s - 1)
  }

  function restart() {
    setStep(0)
    setAnswers([])
    setSelected(null)
    setDone(false)
    setDir(1)
  }

  return (
    <>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #8B2548 0%, #A03354 40%, #C8436A 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Ambient glow blobs */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,168,196,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', right: '40%',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 440px',
          alignItems: 'center',
          gap: '0',
          paddingLeft: '1.5rem',
        }} className="quiz-hero-grid">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ padding: '5.5rem 3rem 4rem 0' }}
          >
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '100px',
              padding: '0.3rem 0.875rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--blush)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.625rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                60-Second Quiz
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: 900, color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.08,
              marginBottom: '1.25rem',
            }}>
              Find Your<br />
              <span style={{ fontStyle: 'italic', color: 'var(--blush)' }}>Perfect</span> Pad
            </h1>

            <p style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              maxWidth: '400px',
              marginBottom: '2rem',
            }}>
              Answer 4 quick questions and we&apos;ll match you to the FLO 360° pad that fits your body, flow, and lifestyle perfectly.
            </p>

            {/* Mini steps preview */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Flow level', 'Timing', 'Priorities', 'Scent'].map((label, i) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.375rem',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: '100px',
                  padding: '0.3rem 0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--blush)' }}>{i + 1}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.03em' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Woman image — bold circular editorial frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="quiz-hero-image"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '3rem',
              paddingBottom: '3rem',
              paddingRight: '1.5rem',
            }}
          >
            {/* Outer decorative ring */}
            <div style={{
              position: 'absolute',
              width: '400px', height: '400px',
              borderRadius: '50%',
              border: '1px solid rgba(242,168,196,0.22)',
              pointerEvents: 'none',
            }} />
            {/* Inner ambient glow ring */}
            <div style={{
              position: 'absolute',
              width: '350px', height: '350px',
              borderRadius: '50%',
              border: '1px solid rgba(242,168,196,0.14)',
              background: 'radial-gradient(circle, rgba(242,168,196,0.09) 0%, transparent 68%)',
              pointerEvents: 'none',
            }} />

            {/* Bold circular image frame */}
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.22)',
              boxShadow: [
                '0 0 0 10px rgba(242,168,196,0.13)',
                '0 32px 80px rgba(0,0,0,0.38)',
                'inset 0 0 0 1px rgba(242,168,196,0.2)',
              ].join(', '),
              position: 'relative',
              flexShrink: 0,
            }}>
              <Image
                src="/images/quiz-model.jpg"
                alt="Find your perfect FLO 360° pad"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 62%',
                }}
                priority
              />
              {/* Subtle inner vignette */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at center, transparent 55%, rgba(160,51,84,0.22) 100%)',
                pointerEvents: 'none',
              }}/>
            </div>

            {/* Floating tag — top right */}
            <div style={{
              position: 'absolute', top: '18%', right: '4%',
              backgroundColor: 'rgba(255,255,255,0.13)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '12px',
              padding: '0.5rem 0.875rem',
              fontSize: '0.5875rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.9)',
            }}>
              60 Seconds
            </div>

            {/* Floating tag — bottom left */}
            <div style={{
              position: 'absolute', bottom: '20%', left: '4%',
              backgroundColor: 'var(--forest)',
              borderRadius: '100px',
              padding: '0.4rem 0.875rem',
              fontSize: '0.5875rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              boxShadow: '0 6px 20px rgba(27,94,53,0.4)',
            }}>
              Free Quiz
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .quiz-hero-grid {
              grid-template-columns: 1fr !important;
              padding-left: 0 !important;
            }
            .quiz-hero-grid > div:first-child {
              padding: 5.5rem 1.5rem 2rem !important;
            }
          }
        `}</style>
      </section>

      {/* Quiz body */}
      <section className="sec" style={{ backgroundColor: 'var(--cream)', padding: '3rem 1.5rem 7rem', minHeight: '60vh' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {!done ? (
            <>
              {/* Progress bar */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--rose)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Step {step + 1} of {STEPS.length}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--muted)', fontWeight: 500 }}>
                    {Math.round(progress)}% complete
                  </span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(200,67,106,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ height: '100%', backgroundColor: 'var(--rose)', borderRadius: '2px' }}
                  />
                </div>
              </div>

              {/* Step card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    border: '1px solid rgba(200,67,106,0.1)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                    marginBottom: '1.5rem',
                  }}>
                    <h2 style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
                      fontWeight: 900, color: 'var(--charcoal)',
                      letterSpacing: '-0.02em', lineHeight: 1.25,
                      marginBottom: '0.625rem',
                    }}>
                      {current.q}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {current.sub}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {current.options.map(opt => {
                        const isSelected = selected === opt.label
                        return (
                          <motion.button
                            key={opt.label}
                            onClick={() => choose(opt.label)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '1rem',
                              padding: '1.125rem 1.25rem',
                              borderRadius: '14px',
                              border: isSelected ? '2px solid var(--rose)' : '1.5px solid rgba(200,67,106,0.15)',
                              backgroundColor: isSelected ? 'rgba(200,67,106,0.06)' : 'transparent',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.2s',
                              width: '100%',
                            }}
                          >
                            <div style={{
                              width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                              border: isSelected ? '2px solid var(--rose)' : '1.5px solid rgba(200,67,106,0.25)',
                              backgroundColor: isSelected ? 'var(--rose)' : 'transparent',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: '#fff',
                              transition: 'all 0.2s',
                            }}>
                              {isSelected && <CheckIcon />}
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: isSelected ? 'var(--rose)' : 'var(--charcoal)', marginBottom: '0.2rem' }}>
                                {opt.label}
                              </div>
                              <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                                {opt.desc}
                              </div>
                            </div>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      onClick={back}
                      disabled={step === 0}
                      style={{
                        background: 'none', border: 'none',
                        fontSize: '0.875rem', fontWeight: 600,
                        color: step === 0 ? 'rgba(107,77,86,0.3)' : 'var(--muted)',
                        cursor: step === 0 ? 'default' : 'pointer',
                        padding: '0.5rem 0',
                        display: 'flex', alignItems: 'center', gap: '4px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 5l-7 7 7 7"/>
                      </svg>
                      Back
                    </button>
                    <motion.button
                      onClick={next}
                      disabled={!selected}
                      whileHover={selected ? { scale: 1.03 } : {}}
                      whileTap={selected ? { scale: 0.97 } : {}}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        backgroundColor: selected ? 'var(--rose)' : 'rgba(200,67,106,0.2)',
                        color: selected ? '#fff' : 'rgba(200,67,106,0.4)',
                        padding: '0.875rem 1.75rem',
                        borderRadius: '100px',
                        fontWeight: 700, fontSize: '0.9375rem',
                        border: 'none', cursor: selected ? 'pointer' : 'default',
                        transition: 'all 0.2s',
                      }}
                    >
                      {step < STEPS.length - 1 ? 'Next' : 'See My Result'}
                      <ArrowIcon size={15} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Result */
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(200,67,106,0.12)',
                boxShadow: '0 16px 60px rgba(200,67,106,0.15)',
              }}>
                {/* Result header */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)',
                  padding: '2rem 2.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '100px', padding: '0.35rem 0.875rem',
                    fontSize: '0.6875rem', fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '1rem',
                  }}>
                    Your Perfect Match
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 900, color: '#fff',
                    letterSpacing: '-0.02em', lineHeight: 1.25,
                    marginBottom: '0.375rem',
                  }}>
                    {RESULT.name}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>
                    {RESULT.sub}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0' }} className="result-grid">
                  {/* Image */}
                  <div style={{ position: 'relative', minHeight: '260px' }}>
                    <Image src={RESULT.image} alt={RESULT.name} fill style={{ objectFit: 'cover' }} sizes="40vw" />
                  </div>
                  {/* Details */}
                  <div style={{ padding: '2rem 2rem 2rem 1.75rem' }}>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                      {RESULT.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                      {RESULT.features.map(f => (
                        <span key={f} style={{
                          fontSize: '0.5875rem', fontWeight: 700,
                          padding: '0.25rem 0.625rem', borderRadius: '100px',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          backgroundColor: 'rgba(200,67,106,0.08)',
                          color: 'var(--rose)',
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/233249667309?text=Hi%20FLO%20360%2C%20I%20want%20to%20order%20the%20Extra%20Long%20Pack!"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        backgroundColor: 'var(--forest)', color: '#fff',
                        padding: '0.875rem 1.5rem', borderRadius: '100px',
                        fontWeight: 700, fontSize: '0.875rem',
                        textDecoration: 'none', marginBottom: '0.75rem',
                      }}
                    >
                      Order Now on WhatsApp <ArrowIcon size={14} />
                    </a>
                    <Link href="/products" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      color: 'var(--rose)',
                      padding: '0.75rem 1.5rem', borderRadius: '100px',
                      fontWeight: 600, fontSize: '0.875rem',
                      textDecoration: 'none',
                      border: '1.5px solid rgba(200,67,106,0.2)',
                    }}>
                      Browse All Products
                    </Link>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  onClick={restart}
                  style={{
                    background: 'none', border: 'none',
                    fontSize: '0.875rem', fontWeight: 600,
                    color: 'var(--muted)', cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Retake the quiz
                </button>
              </div>

              <style>{`
                @media (max-width: 600px) { .result-grid { grid-template-columns: 1fr !important; } }
              `}</style>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
