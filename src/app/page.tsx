import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Dynamic Background */}
      <div className="ambient-background">
        <div className="ambient-blob ambient-blob-1"></div>
        <div className="ambient-blob ambient-blob-2"></div>
        <div className="ambient-blob ambient-blob-3"></div>
      </div>

      <div className="container hero-section">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            ✨ Premium Next.js 15 Kit
          </div>
          <h1 className="hero-title">
            Build <span className="text-gradient-primary">Stunning</span> Digital Experiences
          </h1>
          <p className="hero-description">
            A state-of-the-art starting point for your next web application. Engineered with modern aesthetics, vibrant colors, glassmorphism, and dynamic animations.
          </p>
          <div className="hero-actions">
            <Link href="#features" className="btn btn-primary">
              Explore Features
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Documentation
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="features-grid">
          <div className="glass-card delay-100" style={{ animation: 'fadeUp 1s ease-out forwards' }}>
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Rich Aesthetics</h3>
            <p className="feature-description">
              Curated color palettes and sleek dark modes designed to leave a stunning first impression on your users. No generic colors allowed.
            </p>
          </div>
          
          <div className="glass-card delay-200" style={{ animation: 'fadeUp 1s ease-out forwards' }}>
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Glassmorphism</h3>
            <p className="feature-description">
              Modern translucent interfaces with backdrop blurring and subtle borders that blend seamlessly with ambient animated backgrounds.
            </p>
          </div>
          
          <div className="glass-card delay-300" style={{ animation: 'fadeUp 1s ease-out forwards' }}>
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Dynamic Animations</h3>
            <p className="feature-description">
              Fluid micro-interactions, hover effects, and ambient background animations that make the interface feel responsive and fully alive.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
