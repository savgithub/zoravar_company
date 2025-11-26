import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import styles from './CaseStudy.module.css'

const FinanceRiskAssessment: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Predictive Analytics for Risk Assessment Case Study | Zoravar</title>
                <meta name="description" content="How we improved risk prediction accuracy by 40% and reduced claims by 25% for an insurance provider using AI and machine learning." />
                <link rel="canonical" href="https://zoravar.co.uk/case-studies/finance-risk-assessment" />
            </Helmet>

            <div className={styles.caseStudy}>
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <Link to="/case-studies" className={styles.backLink}>
                            <ArrowLeft size={20} />
                            Back to Case Studies
                        </Link>
                        <span className={styles.industry}>Finance</span>
                        <h1>Predictive Analytics for Risk Assessment</h1>
                        <p className={styles.subtitle}>Transforming insurance underwriting with AI-powered risk prediction</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.main}>
                                <img src="/images/predictive-analytics.png" alt="Risk Assessment Solution" className={styles.image} />

                                <section className={styles.section}>
                                    <h2>The Challenge</h2>
                                    <p>
                                        A major insurance provider was facing challenges with their traditional risk assessment models. Their underwriting process relied heavily on historical data and manual review, leading to:
                                    </p>
                                    <ul>
                                        <li>Inconsistent risk assessments across different underwriters</li>
                                        <li>Higher than expected claim rates in certain segments</li>
                                        <li>Slow underwriting process (average 5-7 days)</li>
                                        <li>Difficulty identifying emerging risk patterns</li>
                                        <li>Competitive disadvantage in pricing</li>
                                    </ul>
                                </section>

                                <section className={styles.section}>
                                    <h2>Our Solution</h2>
                                    <p>
                                        We developed a comprehensive predictive analytics solution that combines multiple data sources and advanced machine learning algorithms:
                                    </p>

                                    <h3>1. Data Integration</h3>
                                    <p>
                                        Integrated data from internal systems, external databases, social media, and IoT devices to create a 360-degree view of risk.
                                    </p>

                                    <h3>2. Predictive Models</h3>
                                    <p>
                                        Built ensemble models using gradient boosting and neural networks to predict claim probability and severity with high accuracy.
                                    </p>

                                    <h3>3. Real-time Scoring</h3>
                                    <p>
                                        Implemented a real-time risk scoring system that provides instant assessments during the quote process.
                                    </p>
                                </section>

                                <section className={styles.section}>
                                    <h2>Results</h2>
                                    <div className={styles.results}>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>40%</div>
                                            <div className={styles.resultLabel}>Improvement in Risk Prediction</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>25%</div>
                                            <div className={styles.resultLabel}>Reduction in Claims</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>80%</div>
                                            <div className={styles.resultLabel}>Faster Underwriting</div>
                                        </div>
                                        <div className={styles.resultCard}>
                                            <div className={styles.resultNumber}>15%</div>
                                            <div className={styles.resultLabel}>Increase in Profitability</div>
                                        </div>
                                    </div>
                                </section>

                                <section className={styles.section}>
                                    <h2>Key Takeaways</h2>
                                    <ul className={styles.takeaways}>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Modern data sources provide valuable risk insights beyond traditional metrics</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Ensemble models outperform single-algorithm approaches for complex risk assessment</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={24} />
                                            <span>Real-time scoring improves customer experience and competitive positioning</span>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.statsCard}>
                                    <h3>Project Stats</h3>
                                    <div className={styles.stat}>
                                        <strong>Industry:</strong>
                                        <span>Insurance</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Duration:</strong>
                                        <span>8 months</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <strong>Team Size:</strong>
                                        <span>6 specialists</span>
                                    </div>
                                </div>

                                <div className={styles.ctaCard}>
                                    <h3>Similar Challenge?</h3>
                                    <p>Let's discuss how we can help improve your risk assessment.</p>
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

export default FinanceRiskAssessment
