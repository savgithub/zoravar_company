import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import styles from './CaseStudiesList.module.css'

const CaseStudiesList: React.FC = () => {
    const caseStudies = [
        {
            title: "AI-Powered Cybersecurity Threat Detection",
            client: "Financial Services Company",
            industry: "Finance",
            challenge: "Detecting and preventing sophisticated cyber threats in real-time",
            result: "95% reduction in false positives, 60% faster threat detection",
            icon: <Zap size={32} />,
            slug: "cybersecurity-threat-detection",
            image: "/images/cybersecurity-hero.png"
        },
        {
            title: "Predictive Analytics for Risk Assessment",
            client: "Insurance Provider",
            industry: "Finance",
            challenge: "Improving accuracy of risk assessment and pricing models",
            result: "40% improvement in risk prediction accuracy, 25% reduction in claims",
            icon: <TrendingUp size={32} />,
            slug: "finance-risk-assessment",
            image: "/images/predictive-analytics.png"
        },
        {
            title: "AI-Enhanced Medical Diagnostics",
            client: "Healthcare Network",
            industry: "Healthcare",
            challenge: "Improving diagnostic accuracy and reducing patient wait times",
            result: "30% faster diagnosis, 98% accuracy in disease detection",
            icon: <Users size={32} />,
            slug: "healthcare-diagnostics",
            image: "/images/ai-innovation.png"
        }
    ]

    return (
        <>
            <Helmet>
                <title>Case Studies | Zoravar AI Consulting Birmingham</title>
                <meta name="description" content="Discover how Zoravar has helped businesses in Birmingham and across the UK transform with AI, machine learning, and data analytics solutions." />
                <link rel="canonical" href="https://zoravar.co.uk/case-studies" />
            </Helmet>

            <div className={styles.caseStudiesPage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Success Stories</h1>
                        <p>Discover how we've helped businesses transform with AI and data-driven solutions</p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            {caseStudies.map((study, index) => (
                                <article key={index} className={styles.caseStudyCard}>
                                    <div className={styles.cardImage}>
                                        <img src={study.image} alt={study.title} />
                                        <div className={styles.overlay}>
                                            <div className={styles.iconWrapper}>{study.icon}</div>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.industry}>{study.industry}</span>
                                        <h2>{study.title}</h2>
                                        <div className={styles.details}>
                                            <div className={styles.detail}>
                                                <strong>Challenge:</strong>
                                                <p>{study.challenge}</p>
                                            </div>
                                            <div className={styles.detail}>
                                                <strong>Result:</strong>
                                                <p className={styles.result}>{study.result}</p>
                                            </div>
                                        </div>
                                        <Link to={`/case-studies/${study.slug}`} className={styles.readMore}>
                                            Read Full Case Study
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CaseStudiesList
