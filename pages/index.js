export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      {/* Hero Image */}
      <img
        src="/genarch-hero-clean.jpg"
        alt="GenArch - Generational Architecture"
        style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
      />

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

      {/* Team */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Meet the Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ flex: '1 1 45%', border: '1px solid #ddd', padding: '1rem', borderRadius: '10px' }}>
            <h3>John Smith</h3>
            <p>Senior Architect with 40+ years of heritage and public architecture experience.</p>
          </div>
          <div style={{ flex: '1 1 45%', border: '1px solid #ddd', padding: '1rem', borderRadius: '10px' }}>
            <h3>Emily Nguyen</h3>
            <p>Graduate Architect with a passion for sustainable and accessible design.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Our Services</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <h4>Architectural Design</h4>
            <p>Timeless and innovative designs rooted in both experience and new thinking.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h4>Construction Management</h4>
            <p>On-time, quality-focused builds led by intergenerational teams.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h4>Mentorship-Driven Projects</h4>
            <p>Projects delivered with paired senior/junior leadership to foster knowledge transfer.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h4>Heritage & Accessibility Consulting</h4>
            <p>Consultancy services for age-in-place design, heritage sites, and inclusive planning.</p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact Us</h2>
        <p>Email: <a href=\"mailto:contact@genarch.com\">contact@genarch.com</a></p>
      </section>
    </main>
  );
}
