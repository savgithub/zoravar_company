import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import styles from './CaseStudy.module.css'

const HealthcareDiagnostics: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>AI-Enhanced Medical Diagnostics Case Study | Zoravar</title>
                <meta name="description" content="How we achieved 98% accuracy in disease detection and 30% faster diagnosis for a healthcare network using AI and machine learning." />
                <link rel="canonical" href="https://zoravar.co.uk/case-studies/healthcare-diagnostics" />
            </Helmet>

            <div className={styles.caseStudy}>
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <Link to="/case-studies" className={styles.backLink}>
                            <ArrowLeft size={20} />
                            Back to Case Studies
                        </Link>
                        <span className={styles.industry}>Healthcare</span>
                        <h1>AI-Enhanced Medical Diagnostics</h1>
                        <p className={styles.subtitle}>Improving patient outcomes through intelligent diagnostic support</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.main}>
                                <img src="/images/ai-innovation.png" alt="Healthcare Diagnostics Solution" className={styles.image} />

                                <section className={styles.section}>
                                    <h2>The Challenge</h2>
                                    <p>
                                        A regional healthcare network was facing increasing pressure to improve diagnostic accuracy while reducing wait times. Key challenges included:
                                    </p>
                                    <ul>
                                        <li>Average diagnosis time of 48 hours for complex cases</li>
                                        <li>Variability in diagnostic accuracy across different radiologists</li>
                                        <li>Growing backlog of medical imaging reviews</li>
                                        <li>Need to detect rare conditions that physicians see infrequently</li>
                                        <li>Shortage of specialized diagnostic expertise</li>
                                    </ul>
                                </section>

                                <section className={styles.section}>
                                    <h2>Our Solution</h2>
                                    <p>
                                        We developed an AI-powered diagnostic support system that assists physicians in analyzing medical images and patient data:
                                    </p>

                                    <h3>1. Computer Vision Models</h3>
                                    <p>
                                        Trained deep learning models on millions of medical images to detect abnormalities and potential diseases with high accuracy.
                                    </p>

                                    <h3>2. Clinical Decision Support</h3>
                                    <p>
                                        Integrated patient history, lab results, and imaging data to provide comprehensive diagnostic recommendations.
                                    </p>

                                    <h3>3. Explainable AI</h3>
                                    <p>
                                        Implemented visualization tools that highlight areas of concern and explain the AI's reasoning to physicians.
                                    </p>
                                </section>

                                <section className={styles.section}>
                                    <h2>Results</h2>
                                    <div className={styles.results}>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>98%</div>
                                            <div className={styles.resultLabel}>Diagnostic Accuracy</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>30%</div>
                                            <div className={styles.resultLabel}>Faster Diagnosis</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>50%</div>
                                            <div className={styles.resultLabel}>Reduced Backlog</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>95%</div>
                                            <div className={styles.resultLabel}>Physician Satisfaction</div>
                                        </div>
                                    </div>
                                </section>

                                <section className={styles.section}>
                                    <h2>Client Testimonial</h2>
                                    <blockquote className={styles.quote}>
                                        "The AI diagnostic system has become an invaluable tool for our radiologists. It helps us catch things we might have missed and provides a second opinion on complex cases. Most importantly, our patients are getting faster, more accurate diagnoses."
                                        <cite>— Chief Medical Officer</cite>
                                    </blockquote>
                                </section>

                                <section className={styles.section}>
                                    <h2>Key Takeaways</h2>
                                    <ul className={styles.takeaways}>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>AI augments rather than replaces physician expertise</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Explainable AI is crucial for clinical adoption and trust</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Integration with existing workflows is key to successful implementation</span>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.statsCard}>
                                    <h3>Project Stats</h3>
                                    <div className={styles.stat}>
                                        <strong>Industry:</strong>
                                        <span>Healthcare</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Duration:</strong>
                                        <span>10 months</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Team Size:</strong>
                                        <span>8 specialists</span>
                                    </div>
                                </div>

                                <div className={styles.ctaCard}>
                                    <h3>Similar Challenge?</h3>
                                    <p>Let's discuss how we can help improve your healthcare operations.</p>
                                    <Link to="/contact" className={styles.ctaButton}>
                                        Get in Touch
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealthcareDiagnostics
