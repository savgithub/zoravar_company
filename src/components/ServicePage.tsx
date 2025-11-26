import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import styles from './ServicePage.module.css'

interface ServicePageProps {
    title: string
    description: string
    metaDescription: string
    icon: React.ReactNode
    benefits: string[]
    features: string[]
    imagePath: string
}

const ServicePage: React.FC<ServicePageProps> = ({
    title,
    description,
    metaDescription,
    icon,
    benefits,
    features,
    imagePath
}) => {
    return (
        <>
            <Helmet>
                <title>{title} | Zoravar AI Consulting Birmingham</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={`https://zoravar.co.uk/services/${title.toLowerCase().replace(/\s+/g, '-')}`} />
            </Helmet>

            <div className={styles.servicePage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <div className={styles.iconWrapper}>{icon}</div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <Link to="/contact" className={styles.ctaButton}>
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                            <div className={styles.heroImage}>
                                <img src={imagePath} alt={title} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.mainContent}>
                                <h2>Key Benefits</h2>
                                <ul className={styles.benefitsList}>
                                    {benefits.map((benefit, index) => (
                                        <li key={index}>
                                            <CheckCircle size={24} />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2>What We Offer</h2>
                                <div className={styles.featuresGrid}>
                                    {features.map((feature, index) => (
                                        <div key={index} className={styles.featureCard}>
                                            <h3>{feature}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.ctaCard}>
                                    <h3>Ready to Get Started?</h3>
                                    <p>Contact us today for a free consultation and discover how we can help transform your business.</p>
                                    <Link to="/contact" className={styles.sidebarButton}>
                                        Contact Us
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>Why Choose Zoravar?</h3>
                                    <ul>
                                        <li>20+ years of experience</li>
                                        <li>Birmingham-based expertise</li>
                                        <li>Proven track record</li>
                                        <li>Tailored solutions</li>
                                        <li>Ongoing support</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ServicePage
