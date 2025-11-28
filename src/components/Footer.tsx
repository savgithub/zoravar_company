import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>Z</div>
                            <span className={styles.logoText}>Zoravar</span>
                        </div>
                        <p className={styles.description}>
                            Zoravar is a leading AI consulting company in Birmingham, offering full-spectrum AI services to help businesses realize impactful, data-driven outcomes.
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/">AI Strategy</Link></li>
                            <li><Link to="/">Machine Learning</Link></li>
                            <li><Link to="/">Data Analytics</Link></li>
                            <li><Link to="/">AI Agents</Link></li>
                            <li><Link to="/">Process Automation</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <Phone size={18} />
                                <div>
                                    <p>Contact via form</p>
                                    <span>Mon-Fri, 9AM-6PM GMT</span>
                                </div>
                            </li>
                            <li>
                                <Mail size={18} />
                                <p>Contact via form</p>
                            </li>
                            <li>
                                <MapPin size={18} />
                                <span>Birmingham, United Kingdom</span>
                            </li>
                        </ul>
                        <Link to="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                        </Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} Zoravar Consultancy Services (UK) Ltd. All rights reserved.</p>
                    <div className={styles.links}>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
