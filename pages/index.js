export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      {/* Hero Image */}
      <img
        src="/genarch-hero-clean.jpg"
        alt="GenArch - Generational Architecture"
        style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
      />

      {/* Header & Mission */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>GenArch – Generational Architecture</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Where senior expertise meets graduate innovation in architecture and construction.
        </p>
      </header>

      {/* Mission */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Our Mission</h2>
        <p>
          At GenArch, we’re redefining the built environment by fusing the wisdom of senior professionals
          with the creativity and energy of new graduates. We believe in designing and building for the future,
          while honouring the past.
        </p>
      </section>

      {/* Core Values */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Our Core Values</h2>
        <ul>
          <li>Intergenerational Collaboration</li>
          <li>Experience-Led Innovation</li>
          <li>Inclusive & Accessible Design</li>
          <li>Heritage & Community-Focused Building</li>
        </ul>
      </section>

      {/* Explore Links */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Explore</h2>
        <ul>
          <li><strong>🧰 Services</strong> – From heritage restoration to mentorship-driven delivery</li>
          <li><strong>👥 Team</strong> – Meet our senior builders and rising stars</li>
          <li><strong>📬 Contact</strong> – Reach out to collaborate or join us</li>
        </ul>
      </section>
    </main>
  );
}
