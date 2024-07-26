import './Home.css'
export default function Home() {
  return (
    <div>
    <div className="container1">
        <header className="header">
            <div className="logo">ManageHub</div>
            <nav className="nav">
                <a href="#" className="nav-link">Product</a>
                <a href="#" className="nav-link">Pricing</a>
                <a href="#" className="nav-link">Solutions</a>
                <a href="#" className="nav-link">Integrations</a>
                <a href="#" className="nav-link">Apps</a>
            </nav>
            <div className="cta-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Sign In</button>
            </div>
        </header>
        <main className="main">
            <h1 className="main-title">Where is your money going?</h1>
            <p className="main-subtitle">Track your expenses effortlessly and gain financial clarity.</p>
            <button className="btn btn-primary">Get Started</button>
        </main>
        <section className="features">
            <h2 className="section-title">Key Features</h2>
            <div className="features-list">
                <div className="feature-item">
                    <h3 className="feature-title">Analytics</h3>
                    <p className="feature-description">Providing valuable insights and performance metrics.</p>
                </div>
                <div className="feature-item">
                    <h3 className="feature-title">Account Management</h3>
                    <p className="feature-description">Manage accounts, payments, and reconciliations.</p>
                </div>
                <div className="feature-item">
                    <h3 className="feature-title">Invoicing</h3>
                    <p className="feature-description">Simplifies invoice creation, management, and tracking.</p>
                </div>
            </div>
        </section>
        <section className="productivity">
            <h2 className="section-title1">Boost Your <br />Productivity</h2>
            <p className="section-description">Enhance team collaboration and efficiency.</p>
            <button className="btn btn-primary">Get Started</button>
        </section>
        <footer className="footer">
            <div className="footer-logo">ManageHub</div>
            <div className="foot-desc">Subscribe to Our <br />Newsletter</div>
            <div className="newsletter">
                <input type="email" placeholder="Enter your email" className="newsletter-input"/>
                <button className="btn btn-primary">Subscribe</button>
            </div>
            <div className="footer-links">
                <div><a href="#" className="footer-link">Pricing</a>
                <li>Features</li>
                <li>Pricing</li>
                </div>
                <div>
                <a href="#" className="footer-link">Resources</a>
                <li>Blog</li>
                <li>User guides</li>
                <li>Webinars</li>
                </div>
                <div>
                <a href="#" className="footer-link">Company</a>
                <li>About us</li>
                <li>Contact us</li>
                </div>
                <div>
                <a href="#" className="footer-link">Careers</a>
                <li>Personal</li>
                <li>Start up</li>
                <li>Organization</li>
              </div>
            </div>
            
        </footer>
        <div className="main-footer">
                <div>
                    <p>&#169; 2024 Brand, Inc. </p>
                </div>
                <div className="social-media">
                    <a href="#" className="social-media-link"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="social-media-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-media-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-media-link"><i className="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
    </div>

    </div>
  )
}
