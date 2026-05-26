'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { motion } from 'framer-motion'

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function ArrowLeft({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  )
}

const ARTICLES: Record<string, {
  title: string; cat: string; mins: string;
  intro: string; sections: { heading: string; body: string }[];
}> = {
  'how-to-choose-the-right-sanitary-pad': {
    title: 'How to Choose the Right Sanitary Pad',
    cat: 'Guidance', mins: '4 min read',
    intro: 'The right pad isn\'t just the one your friend uses or the one your mum buys. It\'s the one that fits your body, your flow, and your lifestyle. Here\'s everything you need to know.',
    sections: [
      { heading: 'Consider Your Flow Volume', body: 'Light flow days need thinner, shorter pads — 155mm panty liners or slim day pads work perfectly. For moderate to heavy flow, you need a longer, more absorbent pad. The FLO 360° Extra Long (330mm) is designed exactly for those heavier days, giving you a wide absorbent zone that goes beyond where most pads stop.' },
      { heading: 'Think About Your Body Shape', body: 'Everyone\'s body is different. Wider hips, narrower frames, and different sitting postures all affect how a pad fits and stays in place. FLO 360°\'s 3D Soft Fit technology is engineered to contour around your body\'s shape — not sit stiff and flat like standard pads.' },
      { heading: 'Match to Your Activity Level', body: 'If you\'re spending a long day at school, in the office, or on your feet, you need reliable protection that won\'t shift. For active days, look for pads with strong adhesive wings and a flexible core. For overnight use, choose extra-long pads (330mm minimum) to protect against rear leaks when you sleep in different positions.' },
      { heading: 'Scented vs. Unscented', body: 'Scented pads use fragrance to keep you feeling fresh — FLO 360° uses Mint Essence, which is subtle and natural-feeling rather than chemically strong. If you have sensitive skin, choose light-scented or unscented options. Either way, changing your pad regularly (every 4–6 hours) matters more than the scent itself.' },
      { heading: 'The Right Pad for You', body: 'For most Ghanaian women and girls managing a regular to heavy cycle — especially in a warm climate — FLO 360°\'s Extra Long pad gives you the length, absorbency, and 3D fit to stay comfortable and protected all day. Start there, and adjust based on your own experience.' },
    ],
  },
  'your-monthly-cycle-explained-simply': {
    title: 'Your Monthly Cycle Explained Simply',
    cat: 'Education', mins: '5 min read',
    intro: 'Your period is just one part of your monthly cycle. Understanding all four phases helps you plan, prepare, and feel in control — every single month.',
    sections: [
      { heading: 'Phase 1: Menstruation (Days 1–5)', body: 'This is your period. The uterine lining sheds because no fertilised egg arrived. You may experience cramps, lower back pain, bloating, and mood changes. This is completely normal. Use absorbent pads like FLO 360° to stay protected, rest when you can, and stay hydrated.' },
      { heading: 'Phase 2: Follicular Phase (Days 1–13)', body: 'Running alongside and after your period, this phase is when your body prepares to release an egg. Oestrogen rises, you may feel more energetic and positive, and your skin often looks clearer. It\'s a great time to plan demanding tasks or activities.' },
      { heading: 'Phase 3: Ovulation (Around Day 14)', body: 'The egg is released from the ovary. You might notice a slight increase in body temperature and a change in discharge — it becomes clearer and stretchy, like raw egg white. Some women feel a mild twinge or pain on one side. This phase lasts only 12–24 hours.' },
      { heading: 'Phase 4: Luteal Phase (Days 15–28)', body: 'After ovulation, progesterone rises to prepare for a possible pregnancy. If no fertilisation occurs, hormone levels drop and you move back into menstruation. This phase often brings PMS symptoms — irritability, bloating, breast tenderness, and fatigue. These are normal hormonal responses, not weaknesses.' },
      { heading: 'Why Your Cycle Might Vary', body: 'A "normal" cycle can range from 21 to 35 days. Stress, diet, exercise, illness, and sleep all affect cycle length and flow. Tracking your cycle for 3–6 months gives you a much clearer picture of what\'s normal for you specifically.' },
    ],
  },
  'night-vs-day-protection': {
    title: 'Night vs. Day Protection — What\'s the Difference?',
    cat: 'Protection', mins: '3 min read',
    intro: 'A pad that works great during the day can fail you completely at night. The reasons are simple — and once you understand them, you\'ll never go back to using the same pad around the clock.',
    sections: [
      { heading: 'Why Night Protection is Different', body: 'When you sleep, you lie flat and move around in ways that are completely different from sitting or walking. Blood can flow toward your back rather than straight down. A standard day pad — even a good one — is designed for upright movement. At night, you need extra length at the back and more coverage in all directions.' },
      { heading: 'Length is Everything', body: 'For nighttime, a minimum of 330mm is recommended. The FLO 360° Extra Long pad gives you that coverage, extending well past the standard zone to protect against rear leakage when you turn in your sleep. Shorter pads leave a gap that can lead to staining — especially on heavy flow nights.' },
      { heading: 'Absorbency Core Matters', body: 'Overnight you may go 6–8 hours without changing your pad. The absorbent core needs to lock in fluid and prevent it from spreading. FLO 360°\'s Super Absorbent Core is built to handle this — absorbing quickly and holding securely so you wake up clean.' },
      { heading: 'What to Use During the Day', body: 'Day protection is more about comfort in movement. A well-fitted pad with 3D Soft Fit contours to your body as you sit, stand, and walk. Thinner is often more comfortable for day use — less bulk, less heat, more freedom. FLO 360° works day and night because it\'s designed around the whole 24-hour cycle.' },
    ],
  },
  '5-natural-ways-to-ease-period-discomfort': {
    title: '5 Natural Ways to Ease Period Discomfort',
    cat: 'Wellness', mins: '6 min read',
    intro: 'Cramps, bloating, fatigue — period discomfort is real. But there are proven, natural approaches that genuinely help, without relying on medication every month.',
    sections: [
      { heading: '1. Heat Therapy', body: 'A warm compress or hot water bottle placed on your lower abdomen relaxes the uterine muscles causing cramps. Studies show heat can be as effective as ibuprofen for mild to moderate period pain. Spend 15–20 minutes with a warm compress in the morning or evening when pain is worst.' },
      { heading: '2. Stay Moving (Even Gently)', body: 'It might feel counterintuitive, but light exercise genuinely reduces cramp intensity. Walking, gentle yoga, or stretching increases blood circulation and triggers the release of endorphins — your body\'s natural pain relievers. Even a 10-minute walk can make a noticeable difference.' },
      { heading: '3. Adjust What You Eat and Drink', body: 'Reduce salt and processed foods in the days before your period to minimise bloating. Increase magnesium-rich foods — dark leafy greens, nuts, bananas — as magnesium helps relax muscles. Drink plenty of water. Limit caffeine and fizzy drinks, which can increase cramps and bloating.' },
      { heading: '4. Prioritise Sleep', body: 'Poor sleep makes pain feel more intense and makes mood symptoms worse. Try to maintain a consistent sleep schedule during your period. Use an extra-long pad like FLO 360° overnight so you\'re not waking up anxious about leaks — quality sleep is its own form of pain relief.' },
      { heading: '5. Herbal Teas', body: 'Ginger tea has anti-inflammatory properties that can reduce the severity of menstrual pain. Chamomile tea relaxes muscle spasms and has mild sedative effects that help with sleep. Peppermint tea eases bloating and nausea. These aren\'t miracle cures, but combined with other approaches they make a real difference.' },
    ],
  },
  'staying-fresh-all-day': {
    title: 'Staying Fresh All Day — The FLO 360° Way',
    cat: 'FLO 360°', mins: '3 min read',
    intro: 'Feeling fresh during your period isn\'t just about hygiene — it\'s about confidence. Here\'s how FLO 360° approaches freshness, and what you can do alongside it.',
    sections: [
      { heading: 'What is Mint Essence?', body: 'Mint Essence is FLO 360°\'s signature freshness feature — a subtle mint-derived fragrance infused into the pad surface. Unlike heavy artificial perfumes that can irritate sensitive skin, Mint Essence provides a cool, clean feeling without overpowering. It works with your body rather than masking it.' },
      { heading: 'Change Regularly', body: 'Even the best pad needs to be changed regularly. Every 4–6 hours is recommended for medium flow days. On heavy flow days, change every 2–3 hours. Overnight, use an extra-long pad and change first thing in the morning. Regular changing is the number one factor in staying fresh — no pad technology replaces this.' },
      { heading: 'Cleansing During Your Period', body: 'Wash the external vulva area with clean water during bathing. Avoid internal douching, which disrupts the natural pH balance and can cause infections. Gentle, fragrance-free soap on the external area is fine. Simple, regular cleansing combined with regular pad changes is all you need.' },
      { heading: 'Cotton-Feel Matters', body: 'FLO 360°\'s cotton-feel top layer allows skin to breathe more than plastic-coated alternatives. Reduced heat and moisture buildup means less bacterial growth and less odour. Breathable materials are a quiet but important part of staying comfortable and fresh throughout the day.' },
    ],
  },
  'when-to-see-a-doctor-about-your-period': {
    title: 'When to See a Doctor About Your Period',
    cat: 'Health', mins: '4 min read',
    intro: 'Most period symptoms are completely normal. But some signs deserve medical attention. Knowing the difference is one of the most important things you can do for your health.',
    sections: [
      { heading: 'Very Heavy Bleeding', body: 'Soaking through a pad every 1–2 hours for several hours in a row, or passing large clots consistently, is worth speaking to a doctor about. This level of bleeding can lead to iron deficiency and anaemia — fatigue, dizziness, and weakness. Conditions like fibroids or endometriosis can cause unusually heavy periods.' },
      { heading: 'Severe Pain That Doesn\'t Respond to Treatment', body: 'Cramps that are so severe they prevent you from doing daily activities, and that don\'t improve with heat, rest, or over-the-counter pain relief, should be evaluated. Endometriosis — a condition where uterine tissue grows outside the uterus — often presents this way and is frequently underdiagnosed.' },
      { heading: 'Irregular or Missed Periods', body: 'Occasional irregularity (a few days either way) is normal. But consistently missed periods, or cycles that vary wildly month to month, can signal hormonal imbalances, thyroid issues, PCOS, or other conditions. Track your cycle and bring that data to your doctor.' },
      { heading: 'Bleeding Between Periods', body: 'Spotting occasionally around ovulation can be normal. But regular bleeding between periods, or bleeding after intercourse, should be evaluated. It can have many causes, some minor and some that need treatment.' },
      { heading: 'Trust Yourself', body: 'You know your body. If something feels significantly different from your normal — even if you can\'t name exactly what it is — that\'s enough reason to consult a healthcare professional. Early attention leads to better outcomes. Don\'t minimise your symptoms because others tell you periods are "supposed to hurt."' },
    ],
  },
  'how-long-should-a-pad-last': {
    title: 'How Long Should a Pad Last?',
    cat: 'Guidance', mins: '3 min read',
    intro: 'Changing your pad at the right time matters more than most people realise — for health, comfort, and hygiene. Here\'s the simple breakdown.',
    sections: [
      { heading: 'The General Rule', body: 'On a typical flow day, change your pad every 4–6 hours. This applies even if the pad doesn\'t look full — the goal is to prevent bacterial build-up, odour, and skin irritation. Bacteria thrive in warm, moist environments, and a worn pad becomes exactly that over time.' },
      { heading: 'Heavy Flow Days', body: 'On heavy days, you may need to change every 2–3 hours. If you\'re soaking through a pad in under an hour consistently, that may be a sign of unusually heavy flow worth discussing with a doctor. Use a longer, more absorbent pad and check more frequently.' },
      { heading: 'Overnight', body: 'Overnight pads can last 6–8 hours if they\'re designed for it — like the FLO 360° Extra Long, which provides full-length coverage. Change immediately upon waking. Don\'t extend overnight use beyond 8 hours.' },
      { heading: 'Light Flow and Panty Liners', body: 'Even on very light days, or when using a panty liner, change every 4–6 hours. Because liners hold less, bacterial growth can happen faster. Daily freshness routine still applies.' },
      { heading: 'Signs It\'s Time to Change', body: 'If you notice odour, the pad feels wet against your skin, it\'s visibly saturated, or you feel uncomfortable — change immediately, regardless of how long it has been. The time guidelines are maximums, not targets. Fresh is always the goal.' },
    ],
  },
  'flo-360-3d-soft-fit-how-it-works': {
    title: 'FLO 360° 3D Soft Fit — How It Works',
    cat: 'FLO 360°', mins: '4 min read',
    intro: 'The name 3D Soft Fit isn\'t marketing language. It describes a real design difference that affects how the pad feels and performs against your body. Here\'s the engineering behind it.',
    sections: [
      { heading: 'The Problem with Flat Pads', body: 'Standard flat pads are designed on a production line — uniform, rigid, rectangular. But bodies are not flat. When you sit, stand, walk, or bend, a flat pad creates gaps at the sides, bunches in the middle, and moves out of position. This is where most leaks actually happen — not from absorbency failure, but from fit failure.' },
      { heading: 'What 3D Means', body: 'FLO 360°\'s 3D construction means the pad is shaped to curve and flex with your body in three dimensions — not just flat across the centre. The pad rises at the sides to form a natural barrier, contours at the front and back to follow your body\'s shape, and stays positioned correctly as you move.' },
      { heading: 'Soft Fit and Skin Comfort', body: 'The surface layer is made from a cotton-feel material that\'s gentle on sensitive skin. Period skin is often more sensitive than usual — the last thing you need is a rough or plastic-feeling surface creating friction and irritation. The soft layer also breathes, reducing heat and moisture build-up that leads to discomfort.' },
      { heading: 'The Wings System', body: 'Wings that fold and adhere under your underwear are part of the fit system — they prevent the pad from shifting sideways. On a 330mm pad like FLO 360° Extra Long, correctly positioned wings make a significant difference to rear protection, especially during active movement.' },
      { heading: 'Why It Matters for African Women', body: 'FLO 360° was designed specifically for Ghanaian women — considering the climate, activity levels, and the demands of daily life here. A pad engineered for cooler, lower-humidity environments won\'t perform the same way under Ghana\'s heat. The 3D Soft Fit and breathable materials were developed with this specific context in mind.' },
    ],
  },
}

const CAT_COLORS: Record<string, string> = {
  Guidance: '#C8436A',
  Education: '#1B5E35',
  Protection: '#A03354',
  Wellness: '#1B5E35',
  'FLO 360°': '#C8436A',
  Health: '#A03354',
}

export default function ArticlePage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const article = ARTICLES[slug]

  if (!article) return notFound()

  const accent = CAT_COLORS[article.cat] || '#C8436A'

  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: accent,
        padding: '8rem 1.5rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '-5%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/tips" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: 'rgba(255,255,255,0.65)', fontSize: '0.8125rem',
              fontWeight: 600, textDecoration: 'none', letterSpacing: '0.06em',
              textTransform: 'uppercase', marginBottom: '2rem',
            }}>
              <ArrowLeft size={13} /> Back to Articles
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.6875rem', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)',
                backgroundColor: 'rgba(255,255,255,0.16)',
                padding: '0.3rem 0.875rem', borderRadius: '4px',
              }}>{article.cat}</span>
              <span style={{
                fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500,
              }}>{article.mins}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900, color: '#fff',
              letterSpacing: '-0.025em', lineHeight: 1.15,
              margin: 0, marginBottom: '1.25rem',
            }}>{article.title}</h1>

            <p style={{
              fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75, maxWidth: '620px',
            }}>{article.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5rem 1.5rem 7rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {article.sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                marginBottom: '3rem',
                paddingBottom: '3rem',
                borderBottom: i < article.sections.length - 1 ? '1px solid rgba(200,67,106,0.1)' : 'none',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '0.875rem', letterSpacing: '0.14em',
                  color: accent, opacity: 0.45,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ width: '32px', height: '1.5px', backgroundColor: accent, opacity: 0.3, borderRadius: '1px' }} />
                <h2 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  fontWeight: 800, color: 'var(--charcoal)',
                  letterSpacing: '-0.015em', lineHeight: 1.25, margin: 0,
                }}>{sec.heading}</h2>
              </div>
              <p style={{
                fontSize: '1rem', lineHeight: 1.85,
                color: '#4A3040',
                paddingLeft: '4rem',
              }}>{sec.body}</p>
            </motion.div>
          ))}

          {/* Back CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '1rem' }}
          >
            <Link href="/tips" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: accent, color: '#fff',
              padding: '0.875rem 2rem', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.8125rem',
              textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              <ArrowLeft size={13} /> More Articles
            </Link>
            <a href="https://wa.me/233249667309" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#1B5E35', color: '#fff',
              padding: '0.875rem 2rem', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.8125rem',
              textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              Order FLO 360° <Arrow />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
