import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './LegalPage.module.css'

const CookiePolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Cookie Policy | Zoravar</title>
                <meta name="description" content="Cookie Policy for Zoravar - How we use cookies on our website." />
                <link rel="canonical" href="https://zoravar.co.uk/cookie-policy" />
            </Helmet>

            <div className={styles.legalPage}>
                <div className={styles.container}>
                    <h1>Cookie Policy</h1>
                    <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <section>
                        <h2>1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                        </p>
                    </section>

                    <section>
                        <h2>2. How We Use Cookies</h2>
                        <p>We use cookies for the following purposes:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Types of Cookies We Use</h2>

                        <h3>Essential Cookies</h3>
                        <p>These cookies are necessary for the website to function and cannot be switched off:</p>
                        <ul>
                            <li><strong>cookieConsent:</strong> Stores your cookie preferences</li>
                        </ul>

                        <h3>Analytics Cookies (If Enabled)</h3>
                        <p>These cookies help us understand how visitors interact with our website:</p>
                        <ul>
                            <li>Google Analytics (if implemented)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Managing Cookies</h2>
                        <p>
                            You can control and manage cookies in several ways:
                        </p>
                        <ul>
                            <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                            <li>Change your browser settings to block or delete cookies</li>
                            <li>Use browser plugins to manage cookies</li>
                        </ul>
                        <p>
                            Please note that blocking essential cookies may affect the functionality of our website.
                        </p>
                    </section>

                    <section>
                        <h2>5. Third-Party Cookies</h2>
                        <p>
                            We may use third-party services that set cookies on our website. These services have their own privacy policies:
                        </p>
                        <ul>
                            <li>Formspree (contact form processing)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Updates to This Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have questions about our use of cookies, please contact us through our <Link to="/contact">contact form</Link> or see our <Link to="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CookiePolicy
