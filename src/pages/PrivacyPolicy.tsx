import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './LegalPage.module.css'

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Zoravar</title>
                <meta name="description" content="Privacy Policy for Zoravar - How we collect, use, and protect your personal data." />
                <link rel="canonical" href="https://zoravar.co.uk/privacy-policy" />
            </Helmet>

            <div className={styles.legalPage}>
                <div className={styles.container}>
                    <h1>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Zoravar Consultancy Services (UK) Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website zoravar.co.uk.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <h3>Personal Data</h3>
                        <p>When you contact us through our website, we may collect:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name</li>
                            <li>Message content</li>
                        </ul>

                        <h3>Usage Data</h3>
                        <p>We may collect information about how you access and use our website, including:</p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Pages visited</li>
                            <li>Time and date of visit</li>
                            <li>Time spent on pages</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send you information about our services</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Legal Basis for Processing (UK GDPR)</h2>
                        <p>We process your personal data under the following legal bases:</p>
                        <ul>
                            <li><strong>Consent:</strong> When you submit our contact form</li>
                            <li><strong>Legitimate Interests:</strong> To improve our services and website</li>
                            <li><strong>Legal Obligation:</strong> To comply with UK laws and regulations</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Data Retention</h2>
                        <p>
                            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                        </p>
                    </section>

                    <section>
                        <h2>6. Your Rights Under UK GDPR</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Rectify inaccurate personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the details below.</p>
                    </section>

                    <section>
                        <h2>7. Cookies</h2>
                        <p>
                            We use cookies to improve your experience on our website. For more information, please see our <Link to="/cookie-policy">Cookie Policy</Link>.
                        </p>
                    </section>

                    <section>
                        <h2>8. Third-Party Services</h2>
                        <p>We use Formspree to process contact form submissions. Formspree is GDPR compliant and processes data in accordance with privacy regulations.</p>
                    </section>

                    <section>
                        <h2>9. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2>10. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                        <p>
                            <strong>Zoravar Consultancy Services (UK) Ltd</strong><br />
                            Birmingham, United Kingdom<br />
                            Email: Use our <Link to="/contact">contact form</Link>
                        </p>
                    </section>

                    <section>
                        <h2>11. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
