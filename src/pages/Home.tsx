import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cog, BarChart3, Zap, Users, Award, TrendingUp, Phone, Mail, MapPin } from 'lucide-react'
import styles from './Home.module.css'

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Zoravar | Leading AI Consulting Company in Birmingham - Machine Learning & Data Analytics</title>
                <meta name="description" content="Zoravar is Birmingham's premier AI consulting company offering machine learning, data analytics, AI agents, and AI strategy services. Transform your business with expert AI solutions." />
                <meta name="keywords" content="AI consulting Birmingham, machine learning services UK, data analytics consulting, AI agents, AI strategy development, artificial intelligence consulting, business process automation, AI implementation services, data science consulting Birmingham" />
                <link rel="canonical" href="https://zoravar.co.uk/" />

                {/* Open Graph */}
                <meta property="og:title" content="Zoravar | Leading AI Consulting Company in Birmingham" />
                <meta property="og:description" content="Transform your business with Birmingham's leading AI consulting services. Expert machine learning, data analytics, AI agents, and AI strategy solutions." />
                <meta property="og:url" content="https://zoravar.co.uk/" />
                <meta property="og:type" content="website" />

                {/* Schema.org structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Zoravar",
                        "description": "Leading AI consulting company in Birmingham specializing in machine learning, data analytics, AI agents, and AI strategy services.",
                        "url": "https://zoravar.co.uk",
                        "telephone": "+44-7947931323",
                        "email": "info@zoravar.co.uk",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Birmingham",
                            "addressCountry": "GB"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 52.4862,
                            "longitude": -1.8904
                        }
                    })}
                </script>
            </Helmet>

            <div className={styles.home}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroBackground}>
                        <div className={styles.heroBlob1}></div>
                        <div className={styles.heroBlob2}></div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <span className={styles.badge}>🚀 Leading AI Consulting in Birmingham</span>
                                <h1>
                                    Transform Your Business with{' '}
                                    <span className="text-gradient">AI Innovation</span>
                                </h1>
                                <p>
                                    Zoravar is Birmingham's premier AI consulting company. We help enterprises harness artificial intelligence, machine learning, and data analytics to drive growth, optimize operations, and create competitive advantages.
                                </p>
                                <div className={styles.heroButtons}>
                                    <Link to="/contact" className={styles.primaryButton}>
                                        Get a Free AI Consultation
                                        <ArrowRight size={20} />
                                    </Link>
                                    <a href="#services" className={styles.secondaryButton}>
                                        Explore Our AI Solutions
                                    </a>
                                </div>
                                <div className={styles.heroStats}>
                                    <div className={styles.stat}>
                                        <TrendingUp size={32} />
                                        <div className={styles.statNumber}>20+</div>
                                        <div className={styles.statLabel}>Happy Clients</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <Award size={32} />
                                        <div className={styles.statNumber}>AI</div>
                                        <div className={styles.statLabel}>Excellence</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <Brain size={32} />
                                        <div className={styles.statNumber}>50+</div>
                                        <div className={styles.statLabel}>Projects</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <Zap size={32} />
                                        <div className={styles.statNumber}>20+</div>
                                        <div className={styles.statLabel}>Years Experience</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.heroImage}>
                                <img src="/images/hero-main.png" alt="AI Consulting Services" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className={styles.services}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.badge}>Our Services</span>
                            <h2>Comprehensive AI Solutions for Every Business Need</h2>
                            <p>From strategy to implementation, we provide end-to-end AI services that transform how you operate and compete</p>
                        </div>

                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Brain size={32} />
                                </div>
                                <h3>AI Strategy & Consulting</h3>
                                <p>Comprehensive AI roadmaps and strategic implementation guidance for business transformation</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>AI Readiness Assessment</li>
                                    <li>Strategic Planning</li>
                                    <li>ROI Analysis</li>
                                    <li>Implementation Roadmap</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Cog size={32} />
                                </div>
                                <h3>Machine Learning Solutions</h3>
                                <p>Custom ML models and algorithms tailored to solve your specific business challenges</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Predictive Analytics</li>
                                    <li>Custom Models</li>
                                    <li>Data Processing</li>
                                    <li>Model Deployment</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <BarChart3 size={32} />
                                </div>
                                <h3>Data Analytics & Intelligence</h3>
                                <p>Transform raw data into actionable insights with advanced analytics and visualization</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Business Intelligence</li>
                                    <li>Data Visualization</li>
                                    <li>Performance Metrics</li>
                                    <li>Real-time Analytics</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Zap size={32} />
                                </div>
                                <h3>AI Agents for SMBs</h3>
                                <p>Intelligent AI agents that automate customer support, sales, and operations 24/7</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Customer Support Agents</li>
                                    <li>Sales Development Reps</li>
                                    <li>Operational Agents</li>
                                    <li>Voice AI Systems</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Users size={32} />
                                </div>
                                <h3>Generative AI Solutions</h3>
                                <p>Cutting-edge generative AI for content creation, personal assistants, and automation</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Content Generation</li>
                                    <li>Personal AI Assistants</li>
                                    <li>Document Processing</li>
                                    <li>Creative Automation</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Zap size={32} />
                                </div>
                                <h3>Process Automation</h3>
                                <p>Intelligent automation solutions that streamline operations and boost efficiency</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Workflow Automation</li>
                                    <li>RPA Solutions</li>
                                    <li>Process Optimization</li>
                                    <li>Integration Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Ready to Transform Your Business with AI?</h2>
                            <p>Join the AI revolution and stay ahead of your competition. Get a free consultation to discover how AI can transform your business operations and drive growth.</p>
                            <div className={styles.ctaButtons}>
                                <Link to="/contact" className={styles.primaryButton}>
                                    Get a Free AI Consultation
                                    <ArrowRight size={20} />
                                </Link>
                                <Link to="/contact" className={styles.secondaryButtonWhite}>
                                    Contact Us
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                            <div className={styles.ctaContact}>
                                <div className={styles.ctaContactItem}>
                                    <Phone size={24} />
                                    <div>
                                        <h4>Phone</h4>
                                        <p>Contact via form</p>
                                    </div>
                                </div>
                                <div className={styles.ctaContactItem}>
                                    <Mail size={24} />
                                    <div>
                                        <h4>Email</h4>
                                        <p>Contact via form</p>
                                    </div>
                                </div>
                                <div className={styles.ctaContactItem}>
                                    <MapPin size={24} />
                                    <div>
                                        <h4>Visit Us</h4>
                                        <p>Birmingham, United Kingdom</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
