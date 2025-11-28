import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './LegalPage.module.css'

const TermsOfService: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Zoravar</title>
                <meta name="description" content="Terms of Service for Zoravar Consultancy Services." />
                <link rel="canonical" href="https://zoravar.co.uk/terms-of-service" />
            </Helmet>

            <div className={styles.legalPage}>
                <div className={styles.container}>
                    <h1>Terms of Service</h1>
                    <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</p>

                    <section>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing our website at zoravar.co.uk, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2>2. Use License</h2>
                        <p>
                            Permission is granted to temporarily access the materials (information or software) on Zoravar's website for personal, non-commercial transitory viewing only.
                        </p>
                        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul>
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or public display</li>
                            <li>Attempt to decompile or reverse engineer any software on our website</li>
                            <li>Remove any copyright or proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Disclaimer</h2>
                        <p>
                            The materials on Zoravar's website are provided on an 'as is' basis. Zoravar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2>4. Limitations</h2>
                        <p>
                            In no event shall Zoravar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zoravar's website.
                        </p>
                    </section>

                    <section>
                        <h2>5. Accuracy of Materials</h2>
                        <p>
                            The materials appearing on Zoravar's website could include technical, typographical, or photographic errors. Zoravar does not warrant that any of the materials on its website are accurate, complete, or current.
                        </p>
                    </section>

                    <section>
                        <h2>6. Links</h2>
                        <p>
                            Zoravar has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zoravar of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section>
                        <h2>7. Modifications</h2>
                        <p>
                            Zoravar may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2>8. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of England and Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>

                    <section>
                        <h2>9. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us through our <Link to="/contact">contact form</Link> or see our <Link to="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default TermsOfService
