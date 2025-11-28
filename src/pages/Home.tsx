import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cog, BarChart3, Zap, Users, Award, TrendingUp, Phone, Mail, MapPin } from 'lucide-react'
import styles from './Home.module.css'

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Affordable AI Solutions for Small Businesses Birmingham | Zoravar - Get ROI in 90 Days</title>
                <meta name="description" content="Transform your SMB with affordable AI chatbots, automation & analytics. Birmingham's #1 AI consultancy for small businesses. Reduce costs by 60%, see ROI in 90 days. Free consultation!" />
                <meta name="keywords" content="affordable AI for small business, AI chatbots Birmingham, business automation SMB, AI consultant Birmingham, chatbot for small business, process automation UK, AI implementation small business, generative AI marketing, predictive analytics SMB, affordable machine learning" />
                <link rel="canonical" href="https://zoravar.co.uk/" />

                {/* Open Graph */}
                <meta property="og:title" content="Affordable AI Solutions for Small Businesses | Zoravar Birmingham" />
                <meta property="og:description" content="AI chatbots, automation & analytics for SMBs. Reduce costs 60%, see ROI in 90 days. Birmingham's trusted AI partner for small businesses." />
                <meta property="og:url" content="https://zoravar.co.uk/" />
                <meta property="og:type" content="website" />

                {/* Schema.org structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Zoravar",
                        "description": "Affordable AI solutions for small and medium businesses in Birmingham. Specializing in AI chatbots, automation, and data analytics with guaranteed ROI.",
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
                        },
                        "priceRange": "££",
                        "areaServed": "Birmingham, West Midlands, United Kingdom"
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
                                <span className={styles.badge}>🚀 Affordable AI for Small Businesses in Birmingham</span>
                                <h1>
                                    Reduce Costs by 60% with{' '}
                                    <span className="text-gradient">Affordable AI Solutions</span>
                                </h1>
                                <p>
                                    Zoravar helps Birmingham SMBs automate customer service, streamline operations, and boost revenue with AI chatbots, automation, and analytics. See ROI in 90 days or less. No enterprise budgets needed.
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
                            <h2>Affordable AI Solutions That Pay for Themselves</h2>
                            <p>From AI chatbots to automation - we deliver quick-win solutions that reduce costs, save time, and boost revenue for small businesses</p>
                        </div>

                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Users size={32} />
                                </div>
                                <h3>AI Chatbots & Customer Service Automation</h3>
                                <p>24/7 intelligent chatbots that handle customer inquiries, reduce support costs by 60%, and boost satisfaction</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>WhatsApp & Web Chat Bots</li>
                                    <li>Automated Customer Support</li>
                                    <li>Lead Qualification</li>
                                    <li>Multi-language Support</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Zap size={32} />
                                </div>
                                <h3>Business Process Automation (RPA + AI)</h3>
                                <p>Automate repetitive tasks and save 20+ hours per week with intelligent workflow automation</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Invoice & Document Processing</li>
                                    <li>Email Automation</li>
                                    <li>Data Entry Automation</li>
                                    <li>Workflow Optimization</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Brain size={32} />
                                </div>
                                <h3>Generative AI for Marketing & Content</h3>
                                <p>AI-powered content creation, copywriting, and marketing automation to scale your business</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>AI Content Generation</li>
                                    <li>Marketing Automation</li>
                                    <li>Personalized Campaigns</li>
                                    <li>SEO Optimization</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <BarChart3 size={32} />
                                </div>
                                <h3>AI-Powered Data Analytics & BI</h3>
                                <p>Turn your data into actionable insights with real-time dashboards and predictive analytics</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Sales Forecasting</li>
                                    <li>Customer Insights</li>
                                    <li>Real-time Dashboards</li>
                                    <li>Inventory Optimization</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Cog size={32} />
                                </div>
                                <h3>Predictive Analytics & Machine Learning</h3>
                                <p>Custom ML models that predict customer behavior, optimize pricing, and reduce churn</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Churn Prediction</li>
                                    <li>Demand Forecasting</li>
                                    <li>Dynamic Pricing</li>
                                    <li>Fraud Detection</li>
                                </ul>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <Zap size={32} />
                                </div>
                                <h3>AI Strategy & Implementation for SMBs</h3>
                                <p>Affordable AI roadmaps tailored for small businesses - start seeing ROI in 90 days</p>
                                <ul className={styles.serviceFeatures}>
                                    <li>AI Readiness Assessment</li>
                                    <li>Quick-Win Identification</li>
                                    <li>Budget-Friendly Solutions</li>
                                    <li>90-Day Implementation</li>
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
