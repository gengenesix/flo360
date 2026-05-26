'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Know Your Flow', href: '/tips' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHero = pathname === '/'
  const navBg = scrolled
    ? 'rgba(255,248,249,0.95)'
    : isHero ? 'transparent' : 'rgba(255,248,249,0.95)'
  const navBorder = scrolled ? '1px solid rgba(200,67,106,0.12)' : '1px solid transparent'
  const textColor = scrolled || !isHero ? 'var(--charcoal)' : '#fff'
  const logoFilter = 'none'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 1.5rem',
          backgroundColor: navBg,
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: navBorder,
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1240px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '72px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '52px', height: '52px', filter: logoFilter, transition: 'filter 0.3s ease' }}>
              <Image src="/images/logo.jpg" alt="FLO 360 Global Limited" fill style={{ objectFit: 'contain', borderRadius: '50%' }} />
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '2.25rem' }}>
            {LINKS.map(({ label, href }) => {
              const active = pathname === href
              return (
                <Link key={href} href={href} style={{
                  fontSize: '0.875rem', fontWeight: active ? 700 : 500,
                  color: active ? 'var(--rose)' : textColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}>
                  {label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: '-4px', left: 0, right: 0,
                      height: '2px', borderRadius: '1px',
                      backgroundColor: 'var(--rose)',
                    }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/quiz" className="hidden sm:inline-flex" style={{
              alignItems: 'center', gap: '6px',
              backgroundColor: 'var(--rose)', color: '#fff',
              padding: '0.5rem 1.25rem', borderRadius: '100px',
              fontSize: '0.8125rem', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '-0.01em',
              transition: 'background-color 0.2s',
            }}>
              Find Your Fit
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(v => !v)}
              style={{
                border: 'none', background: 'none', cursor: 'pointer',
                padding: '6px', display: 'flex', flexDirection: 'column',
                gap: '5px', alignItems: 'flex-end',
              }}
              aria-label="Menu"
            >
              <span style={{
                display: 'block', height: '2px', borderRadius: '2px',
                backgroundColor: textColor, transition: 'all 0.25s',
                width: open ? '22px' : '22px',
                transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                display: 'block', height: '2px', width: '16px', borderRadius: '2px',
                backgroundColor: textColor, transition: 'all 0.25s',
                opacity: open ? 0 : 1,
              }} />
              <span style={{
                display: 'block', height: '2px', borderRadius: '2px',
                backgroundColor: textColor, transition: 'all 0.25s',
                width: open ? '22px' : '22px',
                transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '280px', zIndex: 99,
              backgroundColor: 'var(--cream)',
              padding: '5rem 2rem 2rem',
              boxShadow: '-8px 0 32px rgba(200,67,106,0.1)',
              display: 'flex', flexDirection: 'column', gap: '0.375rem',
            }}
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={href} style={{
                  display: 'block', padding: '0.875rem 0',
                  fontSize: '1.125rem', fontWeight: pathname === href ? 700 : 500,
                  color: pathname === href ? 'var(--rose)' : 'var(--charcoal)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(200,67,106,0.1)',
                }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ marginTop: '1.5rem' }}
            >
              <Link href="/quiz" style={{
                display: 'block', textAlign: 'center',
                backgroundColor: 'var(--rose)', color: '#fff',
                padding: '0.875rem', borderRadius: '100px',
                fontWeight: 700, fontSize: '0.9375rem',
                textDecoration: 'none',
              }}>
                Find Your Fit
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 98,
              backgroundColor: 'rgba(26,26,26,0.4)',
              backdropFilter: 'blur(2px)',
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
