'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

const ARTICLES = [
  { slug: 'how-to-choose-the-right-sanitary-pad',      title: 'How to Choose the Right Sanitary Pad',             cat: 'Guidance',   mins: '4 min read' },
  { slug: 'your-monthly-cycle-explained-simply',        title: 'Your Monthly Cycle Explained Simply',               cat: 'Education',  mins: '5 min read' },
  { slug: 'night-vs-day-protection',                    title: 'Night vs. Day Protection — What\'s the Difference?', cat: 'Protection', mins: '3 min read' },
  { slug: '5-natural-ways-to-ease-period-discomfort',   title: '5 Natural Ways to Ease Period Discomfort',          cat: 'Wellness',   mins: '6 min read' },
  { slug: 'staying-fresh-all-day',                      title: 'Staying Fresh All Day — The FLO 360° Way',         cat: 'FLO 360°',   mins: '3 min read' },
  { slug: 'when-to-see-a-doctor-about-your-period',     title: 'When to See a Doctor About Your Period',            cat: 'Health',     mins: '4 min read' },
  { slug: 'how-long-should-a-pad-last',                 title: 'How Long Should a Pad Last?',                       cat: 'Guidance',   mins: '3 min read' },
  { slug: 'flo-360-3d-soft-fit-how-it-works',           title: 'FLO 360° 3D Soft Fit — How It Works',              cat: 'FLO 360°',   mins: '4 min read' },
]

// Visual config for each tile in the editorial grid
const TILE_CONFIGS = [
  { col: '1 / -1',  bg: '#C8436A', fg: '#fff',    muted: 'rgba(255,255,255,0.72)', num: 'rgba(255,255,255,0.07)', featured: true },
  { col: 'span 1',  bg: '#1B5E35', fg: '#fff',    muted: 'rgba(255,255,255,0.62)', num: 'rgba(255,255,255,0.07)' },
  { col: 'span 1',  bg: '#FFF8F9', fg: '#1A1A1A', muted: '#7A5566',                num: 'rgba(200,67,106,0.07)',   accent: '#C8436A', light: true },
  { col: 'span 1',  bg: '#111111', fg: '#fff',    muted: 'rgba(255,255,255,0.48)', num: 'rgba(255,255,255,0.045)' },
  { col: 'span 2',  bg: '#F5E8EC', fg: '#1A1A1A', muted: '#7A5566',                num: 'rgba(160,51,84,0.07)',    accent: '#A03354', light: true },
  { col: 'span 1',  bg: '#C8436A', fg: '#fff',    muted: 'rgba(255,255,255,0.72)', num: 'rgba(255,255,255,0.07)' },
  { col: 'span 2',  bg: '#1B5E35', fg: '#fff',    muted: 'rgba(255,255,255,0.62)', num: 'rgba(255,255,255,0.06)' },
  { col: 'span 1',  bg: '#111111', fg: '#fff',    muted: 'rgba(255,255,255,0.48)', num: 'rgba(255,255,255,0.045)' },
]

type TileConfig = typeof TILE_CONFIGS[0]

function ArticleTile({ article, config, index }: {
  article: typeof ARTICLES[0]
  config: TileConfig
  index: number
}) {
  const num = String(index + 1).padStart(2, '0')
  const isLight = 'light' in config && config.light
  const accent = 'accent' in config ? config.accent : config.fg

  return (
    <Link
      href={`/tips/${article.slug}`}
      style={{ textDecoration: 'none', display: 'block', gridColumn: config.col }}
    >
      <motion.article
        whileHover={{ scale: 1.012 }}
        transition={{ duration: 0.22 }}
        style={{
          backgroundColor: config.bg,
          padding: config.featured ? '3.5rem 4rem' : '2.5rem',
          position: 'relative', overflow: 'hidden',
          minHeight: config.featured ? '300px' : '270px',
          height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          cursor: 'pointer',
        }}
      >
        {/* Giant number watermark */}
        <div style={{
          position: 'absolute',
          top: config.featured ? '-1.5rem' : '-0.75rem',
          right: config.featured ? '1rem' : '0.25rem',
          fontFamily: 'var(--font-bebas)',
          fontSize: config.featured ? 'clamp(10rem, 18vw, 16rem)' : 'clamp(6rem, 10vw, 9rem)',
          color: config.num,
          lineHeight: 1, letterSpacing: '-0.02em',
          userSelect: 'none', pointerEvents: 'none',
        }}>{num}</div>

        {/* Top left decorative bar */}
        {isLight && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '3px', backgroundColor: accent,
          }} />
        )}

        {/* Category + time */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', alignItems: 'center', gap: '0.625rem',
          marginBottom: config.featured ? '1.25rem' : '1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: isLight ? accent : 'rgba(255,255,255,0.55)',
            backgroundColor: isLight ? `${accent}15` : 'rgba(255,255,255,0.12)',
            padding: '0.2rem 0.625rem', borderRadius: '3px',
          }}>{article.cat}</span>
          <span style={{
            fontSize: '0.625rem', fontWeight: 600,
            color: isLight ? '#9A7080' : 'rgba(255,255,255,0.35)',
          }}>{article.mins}</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: config.featured
            ? 'clamp(1.625rem, 2.8vw, 2.375rem)'
            : 'clamp(1.0625rem, 1.5vw, 1.25rem)',
          fontWeight: 900,
          color: config.fg,
          letterSpacing: '-0.02em', lineHeight: 1.2,
          marginBottom: '0.75rem',
          position: 'relative', zIndex: 1,
          maxWidth: config.featured ? '640px' : undefined,
        }}>{article.title}</h2>

        {/* Teaser — only show on featured + light cards */}
        {(config.featured || isLight) && (
          <p style={{
            fontSize: '0.875rem', lineHeight: 1.72,
            color: config.muted,
            maxWidth: config.featured ? '540px' : undefined,
            marginBottom: '1.5rem',
            position: 'relative', zIndex: 1,
          }}>
            {article.slug === 'how-to-choose-the-right-sanitary-pad'
              ? 'Flow volume, body shape, activity level — the right pad depends on all of these.'
              : article.slug === '5-natural-ways-to-ease-period-discomfort'
              ? 'From warm compresses to the right diet — practical, science-backed tips to manage cramps.'
              : article.slug === 'how-long-should-a-pad-last'
              ? 'Changing your pad at the right time is about more than comfort. Here\'s what the science says.'
              : ''}
          </p>
        )}

        {/* CTA */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '0.6875rem', fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: isLight ? accent : config.fg,
          borderBottom: `1.5px solid ${isLight ? `${accent}60` : 'rgba(255,255,255,0.35)'}`,
          paddingBottom: '2px',
        }}>
          Read Article <Arrow size={11} />
        </div>
      </motion.article>
    </Link>
  )
}

export default function TipsPage() {
  return (
    <>
      {/* ── HERO: split with student image ── */}
      <section style={{
        backgroundColor: '#1B5E35',
        minHeight: '72vh',
        display: 'grid',
        gridTemplateColumns: '55fr 45fr',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Left: text */}
        <div style={{
          padding: '9rem 4rem 5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          position: 'relative', zIndex: 2,
        }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.875rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: '28px', height: '2px', backgroundColor: '#F2A8C4', borderRadius: '1px' }} />
              <span style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}>Tips &amp; Knowledge</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3.5rem, 6.5vw, 7rem)',
              fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em',
              color: '#fff', margin: 0, marginBottom: '0.06em',
            }}>Know</h1>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 5.5vw, 6rem)',
              fontWeight: 900, fontStyle: 'italic',
              color: '#F2A8C4',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              margin: 0, marginBottom: '1.75rem',
            }}>Your Flow.</h1>

            <p style={{
              fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65, maxWidth: '400px',
            }}>
              Real knowledge for real women. Learn about your body, your cycle, and how FLO 360° keeps you protected.
            </p>
          </motion.div>
        </div>

        {/* Right: student model blended into green */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Image
            src="/images/model-student.jpg"
            alt="Know Your Flow"
            fill priority
            sizes="45vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #1B5E35 0%, rgba(27,94,53,0.75) 28%, rgba(27,94,53,0.12) 60%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, #1B5E35 0%, transparent 20%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        <style>{`.tips-hero { grid-template-columns: 1fr !important; }`}</style>
      </section>

      {/* ── EDITORIAL TILE GRID ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3px',
        backgroundColor: '#1A1A1A',
      }}>
        {ARTICLES.map((article, i) => (
          <ArticleTile
            key={article.slug}
            article={article}
            config={TILE_CONFIGS[i]}
            index={i}
          />
        ))}
      </div>

      {/* ── CTA BAND ── */}
      <section style={{
        backgroundColor: '#FFF8F9',
        padding: '6rem 1.5rem',
        borderTop: '3px solid #C8436A',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#C8436A', display: 'block', marginBottom: '1rem',
            }}>Personalised for You</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 900, color: '#1A1A1A',
              letterSpacing: '-0.025em', lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              Not sure which pad<br />
              <span style={{ fontStyle: 'italic', color: '#C8436A' }}>is right for you?</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#7A5566', lineHeight: 1.65, marginBottom: '2.25rem' }}>
              Take our 60-second quiz and get a personalised recommendation matched to your body and lifestyle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#C8436A', color: '#fff',
                padding: '1rem 2.25rem', borderRadius: '6px',
                fontWeight: 700, fontSize: '0.8125rem',
                textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                boxShadow: '0 8px 28px rgba(200,67,106,0.3)',
              }}>
                Find Your Fit <Arrow size={14} />
              </Link>
              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#C8436A',
                padding: '1rem 2rem', borderRadius: '6px',
                fontWeight: 700, fontSize: '0.8125rem',
                textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                border: '2px solid #C8436A',
              }}>
                Shop Now <Arrow size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
