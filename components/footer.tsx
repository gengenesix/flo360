import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Know Your Flow', '/tips'],
  ['About Us', '/about'],
  ['Contact', '/contact'],
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.11 8.11 0 0 0 4.75 1.52V6.77a4.85 4.85 0 0 1-.98-.08z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--forest-dark)', color: 'rgba(255,255,255,0.85)' }}>
      {/* Wave top */}
      <div style={{ overflow: 'hidden', lineHeight: 0, backgroundColor: 'var(--cream)' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '48px' }}>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#133D24"/>
        </svg>
      </div>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 1.5rem 2.5rem' }}>
        {/* Grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1.2fr',
          gap: '3rem',
          marginBottom: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                <Image src="/images/logo.jpg" alt="FLO 360" fill style={{ objectFit: 'contain', borderRadius: '50%' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.375rem', letterSpacing: '0.04em', color: '#fff', lineHeight: 1 }}>FLO 360°</div>
                <div style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.68)', textTransform: 'uppercase' }}>Global Limited</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', maxWidth: '240px' }}>
              Ghana&apos;s premium sanitary pad. Engineered for your body, your lifestyle, your confidence.
            </p>
            <p style={{
              marginTop: '1.25rem',
              fontFamily: 'var(--font-dancing)',
              fontSize: '1.0625rem',
              color: 'var(--blush)',
              letterSpacing: '0.01em',
            }}>
              Flow With Confidence
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.125rem' }}>
              Pages
            </div>
            {NAV_LINKS.map(([label, href]) => (
              <div key={href} style={{ marginBottom: '0.625rem' }}>
                <Link href={href} style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.125rem' }}>
              Follow Us
            </div>
            {[
              { Icon: InstagramIcon, label: '@Flo360official', href: 'https://instagram.com/Flo360official' },
              { Icon: FacebookIcon, label: 'Flo 360', href: 'https://facebook.com' },
              { Icon: TikTokIcon, label: '@Flo360official', href: 'https://tiktok.com' },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none', marginBottom: '0.75rem',
                transition: 'color 0.2s',
              }}>
                <Icon />
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.125rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="mailto:Flo360official@gmail.com" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                Flo360official@gmail.com
              </a>
              <a href="tel:+233249667309" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                0249 667 309
              </a>
              <a href="tel:+233262389845" style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                0262 389 845
              </a>
              <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                B-4746, Opposite Amaris Terminal<br />
                Fishing Harbour Road, Plange Area<br />
                Accra, Ghana
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
            &copy; {new Date().getFullYear()} FLO 360 Global Limited. All rights reserved.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}>
            Any day. Any style. Any time.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
