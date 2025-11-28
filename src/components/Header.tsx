import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import styles from './Header.module.css'

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [industriesOpen, setIndustriesOpen] = useState(false)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/">
                        <div className={styles.logoIcon}>Z</div>
                        <span className={styles.logoText}>Zoravar</span>
                    </Link>
                </div>

                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

                    {/* Services Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className={styles.dropdownButton}>
                            Services
                            <ChevronDown size={16} className={servicesOpen ? styles.rotated : ''} />
                        </button>
                        <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ''}`}>
                            <Link to="/services/ai-chatbots" onClick={() => setMobileMenuOpen(false)}>AI Chatbots & Automation</Link>
                            <Link to="/services/generative-ai" onClick={() => setMobileMenuOpen(false)}>Generative AI for Marketing</Link>
                            <Link to="/services/process-automation" onClick={() => setMobileMenuOpen(false)}>Process Automation</Link>
                            <Link to="/services/data-analytics" onClick={() => setMobileMenuOpen(false)}>Data Analytics</Link>
                            <Link to="/services/machine-learning" onClick={() => setMobileMenuOpen(false)}>Machine Learning</Link>
                            <Link to="/services/ai-strategy" onClick={() => setMobileMenuOpen(false)}>AI Strategy</Link>
                            <Link to="/services/email-filing-sharepoint" onClick={() => setMobileMenuOpen(false)}>Email Filing to SharePoint</Link>
                            <Link to="/services/laserfiche-to-sharepoint-migration" onClick={() => setMobileMenuOpen(false)}>Laserfiche to SharePoint Migration</Link>
                            <Link to="/services/data-engineering" onClick={() => setMobileMenuOpen(false)}>Data Engineering</Link>
                            <Link to="/services/pii-data-protection" onClick={() => setMobileMenuOpen(false)}>PII Data Protection</Link>
                            <Link to="/services/cybersecurity" onClick={() => setMobileMenuOpen(false)}>AI-Powered Cybersecurity</Link>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setIndustriesOpen(true)}
                        onMouseLeave={() => setIndustriesOpen(false)}
                    >
                        <button className={styles.dropdownButton}>
                            Industries
                            <ChevronDown size={16} className={industriesOpen ? styles.rotated : ''} />
                        </button>
                        <div className={`${styles.dropdownMenu} ${industriesOpen ? styles.dropdownMenuOpen : ''}`}>
                            <Link to="/industries/finance" onClick={() => setMobileMenuOpen(false)}>Finance</Link>
                            <Link to="/industries/healthcare" onClick={() => setMobileMenuOpen(false)}>Healthcare</Link>
                            <Link to="/industries/manufacturing" onClick={() => setMobileMenuOpen(false)}>Manufacturing</Link>
                            <Link to="/industries/retail" onClick={() => setMobileMenuOpen(false)}>Retail</Link>
                        </div>
                    </div>

                    <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                    <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                    <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
