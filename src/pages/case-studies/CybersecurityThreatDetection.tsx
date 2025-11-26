import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import styles from './CaseStudy.module.css'

const CybersecurityThreatDetection: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>AI-Powered Cybersecurity Threat Detection Case Study | Zoravar</title>
                <meta name="description" content="How we helped a financial services company reduce false positives by 95% and detect threats 60% faster with AI-powered cybersecurity." />
                <link rel="canonical" href="https://zoravar.co.uk/case-studies/cybersecurity-threat-detection" />
            </Helmet>

            <div className={styles.caseStudy}>
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <Link to="/case-studies" className={styles.backLink}>
                            <ArrowLeft size={20} />
                            Back to Case Studies
                        </Link>
                        <span className={styles.industry}>Finance</span>
                        <h1>AI-Powered Cybersecurity Threat Detection</h1>
                        <p className={styles.subtitle}>How we helped a major financial services company transform their security operations</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.main}>
                                <img src="/images/cybersecurity-hero.png" alt="Cybersecurity Solution" className={styles.image} />

                                <section className={styles.section}>
                                    <h2>The Challenge</h2>
                                    <p>
                                        A leading financial services company was struggling with their traditional cybersecurity approach. Their security team was overwhelmed with thousands of alerts daily, with 85% being false positives. This led to alert fatigue, delayed response times, and increased risk of missing genuine threats.
                                    </p>
                                    <p>
                                        Key challenges included:
                                    </p>
                                    <ul>
                                        <li>High volume of false positive alerts (85% of total alerts)</li>
                                        <li>Average threat detection time of 4 hours</li>
                                        <li>Manual investigation processes consuming 60% of security team time</li>
                                        <li>Difficulty identifying sophisticated, multi-stage attacks</li>
                                        <li>Compliance requirements for real-time threat monitoring</li>
                                    </ul>
                                </section>

                                <section className={styles.section}>
                                    <h2>Our Solution</h2>
                                    <p>
                                        We implemented an AI-powered threat detection system that combines machine learning, behavioral analytics, and automated response capabilities:
                                    </p>

                                    <h3>1. Machine Learning Models</h3>
                                    <p>
                                        Developed custom ML models trained on historical security data to identify patterns indicative of genuine threats while filtering out false positives.
                                    </p>

                                    <h3>2. Behavioral Analytics</h3>
                                    <p>
                                        Implemented user and entity behavior analytics (UEBA) to establish baselines and detect anomalous activities that traditional rule-based systems would miss.
                                    </p>

                                    <h3>3. Automated Triage</h3>
                                    <p>
                                        Created an intelligent triage system that automatically categorizes, prioritizes, and routes alerts based on severity and context.
                                    </p>

                                    <h3>4. Threat Intelligence Integration</h3>
                                    <p>
                                        Integrated multiple threat intelligence feeds and used AI to correlate internal events with global threat data.
                                    </p>
                                </section>

                                <section className={styles.section}>
                                    <h2>Implementation Process</h2>
                                    <p>
                                        The project was delivered in four phases over 6 months:
                                    </p>
                                    <ol>
                                        <li><strong>Assessment & Planning (4 weeks):</strong> Analyzed existing security infrastructure and defined requirements</li>
                                        <li><strong>Model Development (8 weeks):</strong> Built and trained ML models using historical data</li>
                                        <li><strong>Integration & Testing (6 weeks):</strong> Integrated with existing SIEM and conducted extensive testing</li>
                                        <li><strong>Deployment & Training (4 weeks):</strong> Phased rollout with comprehensive team training</li>
                                    </ol>
                                </section>

                                <section className={styles.section}>
                                    <h2>Results</h2>
                                    <div className={styles.results}>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>95%</div>
                                            <div className={styles.resultLabel}>Reduction in False Positives</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>60%</div>
                                            <div className={styles.resultLabel}>Faster Threat Detection</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>70%</div>
                                            <div className={styles.resultLabel}>Time Saved on Manual Investigation</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>100%</div>
                                            <div className={styles.resultLabel}>Compliance Achievement</div>
                                        </div>
                                    </div>
                                </section>

                                <section className={styles.section}>
                                    <h2>Client Testimonial</h2>
                                    <blockquote className={styles.quote}>
                                        "The AI-powered threat detection system has transformed our security operations. We've gone from drowning in alerts to having clear, actionable intelligence. The reduction in false positives alone has saved our team hundreds of hours per month."
                                        <cite>— Chief Information Security Officer</cite>
                                    </blockquote>
                                </section>

                                <section className={styles.section}>
                                    <h2>Key Takeaways</h2>
                                    <ul className={styles.takeaways}>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>AI significantly improves threat detection accuracy while reducing analyst workload</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Behavioral analytics can identify sophisticated attacks that evade traditional rules</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Automated triage enables security teams to focus on genuine threats</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Proper training and change management are crucial for successful adoption</span>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.statsCard}>
                                    <h3>Project Stats</h3>
                                    <div className={styles.stat}>
                                        <strong>Industry:</strong>
                                        <span>Financial Services</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Duration:</strong>
                                        <span>6 months</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Team Size:</strong>
                                        <span>5 specialists</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Technologies:</strong>
                                        <span>Python, TensorFlow, Azure ML</span>
                                    </div>
                                </div>

                                <div className={styles.ctaCard}>
                                    <h3>Similar Challenge?</h3>
                                    <p>Let's discuss how we can help transform your security operations.</p>
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

export default CybersecurityThreatDetection
