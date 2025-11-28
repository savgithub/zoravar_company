import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react'
import styles from './Pricing.module.css'

const Pricing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Affordable AI Solutions Pricing | Transparent Packages for Birmingham SMBs</title>
                <meta name="description" content="Transparent, affordable AI solution packages for small businesses. AI chatbots, automation, and analytics with flexible pricing. No hidden fees. Free consultation!" />
                <link rel="canonical" href="https://zoravar.co.uk/pricing" />
            </Helmet>

            <div className={styles.pricingPage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Transparent, Affordable AI Solutions</h1>
                        <p>Choose the package that fits your business needs and budget. All packages include free consultation and ongoing support.</p>
                    </div>
                </section>

                <section className={styles.packages}>
                    <div className={styles.container}>
                        <div className={styles.packagesGrid}>

                            {/* Starter Package */}
                            <div className={styles.packageCard}>
                                <div className={styles.packageIcon}>
                                    <Sparkles size={32} />
                                </div>
                                <h2>Starter</h2>
                                <p className={styles.packageDesc}>Perfect for small businesses just getting started with AI</p>
                                <div className={styles.price}>
                                    <span className={styles.priceLabel}>Starting from</span>
                                    <span className={styles.priceAmount}>Contact for Quote</span>
                                </div>
                                <ul className={styles.features}>
                                    <li><Check size={20} /> Basic AI Chatbot (Website or WhatsApp)</li>
                                    <li><Check size={20} /> Up to 500 conversations/month</li>
                                    <li><Check size={20} /> FAQ automation</li>
                                    <li><Check size={20} /> Basic analytics dashboard</li>
                                    <li><Check size={20} /> Email support</li>
                                    <li><Check size={20} /> Monthly optimization</li>
                                </ul>
                                <Link to="/contact" className={styles.packageButton}>
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                                <p className={styles.bestFor}>Best for: Retail shops, cafes, small service businesses</p>
                            </div>

                            {/* Growth Package */}
                            <div className={`${styles.packageCard} ${styles.featured}`}>
                                <div className={styles.popularBadge}>Most Popular</div>
                                <div className={styles.packageIcon}>
                                    <Zap size={32} />
                                </div>
                                <h2>Growth</h2>
                                <p className={styles.packageDesc}>For growing businesses ready to scale with AI</p>
                                <div className={styles.price}>
                                    <span className={styles.priceLabel}>Starting from</span>
                                    <span className={styles.priceAmount}>Contact for Quote</span>
                                </div>
                                <ul className={styles.features}>
                                    <li><Check size={20} /> Advanced AI Chatbot (Multi-channel)</li>
                                    <li><Check size={20} /> Up to 2,000 conversations/month</li>
                                    <li><Check size={20} /> CRM integration</li>
                                    <li><Check size={20} /> Lead qualification & routing</li>
                                    <li><Check size={20} /> Appointment booking automation</li>
                                    <li><Check size={20} /> Advanced analytics & reporting</li>
                                    <li><Check size={20} /> Priority support</li>
                                    <li><Check size={20} /> Weekly optimization</li>
                                </ul>
                                <Link to="/contact" className={styles.packageButton}>
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                                <p className={styles.bestFor}>Best for: Multi-location businesses, e-commerce, professional services</p>
                            </div>

                            {/* Enterprise Package */}
                            <div className={styles.packageCard}>
                                <div className={styles.packageIcon}>
                                    <Rocket size={32} />
                                </div>
                                <h2>Enterprise</h2>
                                <p className={styles.packageDesc}>Custom AI solutions for established businesses</p>
                                <div className={styles.price}>
                                    <span className={styles.priceLabel}>Custom</span>
                                    <span className={styles.priceAmount}>Let's Talk</span>
                                </div>
                                <ul className={styles.features}>
                                    <li><Check size={20} /> Custom AI solution design</li>
                                    <li><Check size={20} /> Unlimited conversations</li>
                                    <li><Check size={20} /> Full system integration</li>
                                    <li><Check size={20} /> Generative AI for marketing</li>
                                    <li><Check size={20} /> Predictive analytics</li>
                                    <li><Check size={20} /> Process automation (RPA)</li>
                                    <li><Check size={20} /> Dedicated account manager</li>
                                    <li><Check size={20} /> 24/7 priority support</li>
                                    <li><Check size={20} /> Custom SLA</li>
                                </ul>
                                <Link to="/contact" className={styles.packageButton}>
                                    Contact Sales
                                    <ArrowRight size={20} />
                                </Link>
                                <p className={styles.bestFor}>Best for: Established businesses, chains, complex operations</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.addons}>
                    <div className={styles.container}>
                        <h2>Add-On Services</h2>
                        <p className={styles.sectionSubtitle}>Enhance any package with these additional services</p>
                        <div className={styles.addonsGrid}>
                            <div className={styles.addonCard}>
                                <h3>Generative AI Content</h3>
                                <p>AI-powered blog posts, social media, and marketing content</p>
                            </div>
                            <div className={styles.addonCard}>
                                <h3>Voice AI</h3>
                                <p>AI phone answering and voice assistants</p>
                            </div>
                            <div className={styles.addonCard}>
                                <h3>Data Analytics Dashboard</h3>
                                <p>Real-time business intelligence and insights</p>
                            </div>
                            <div className={styles.addonCard}>
                                <h3>Email Automation</h3>
                                <p>AI-powered email campaigns and sequences</p>
                            </div>
                            <div className={styles.addonCard}>
                                <h3>Document Processing</h3>
                                <p>Automated invoice and document handling</p>
                            </div>
                            <div className={styles.addonCard}>
                                <h3>Custom Integrations</h3>
                                <p>Connect AI to your existing tools and systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.guarantee}>
                    <div className={styles.container}>
                        <h2>Our Guarantee</h2>
                        <div className={styles.guaranteeGrid}>
                            <div className={styles.guaranteeItem}>
                                <h3>ROI in 90 Days</h3>
                                <p>We're confident you'll see measurable returns within 90 days, or we'll work with you until you do</p>
                            </div>
                            <div className={styles.guaranteeItem}>
                                <h3>No Long-Term Contracts</h3>
                                <p>Month-to-month agreements - cancel anytime if you're not satisfied</p>
                            </div>
                            <div className={styles.guaranteeItem}>
                                <h3>Transparent Pricing</h3>
                                <p>No hidden fees, no surprises - you'll know exactly what you're paying for</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.faq}>
                    <div className={styles.container}>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqList}>
                            <div className={styles.faqItem}>
                                <h3>How much do your AI solutions cost?</h3>
                                <p>
                                    Pricing varies based on your specific needs, business size, and features required. We offer flexible packages starting from affordable monthly rates for small businesses. Contact us for a custom quote based on your requirements.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Is there a setup fee?</h3>
                                <p>
                                    Setup fees vary depending on the complexity of your solution. We'll provide a complete breakdown during your free consultation, including any one-time costs and ongoing monthly fees.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Can I upgrade or downgrade my package?</h3>
                                <p>
                                    Absolutely! You can change your package at any time to match your business needs. We make it easy to scale up as you grow or adjust if your requirements change.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>What's included in support?</h3>
                                <p>
                                    All packages include ongoing support, regular optimization, and updates. Higher-tier packages include priority support and dedicated account management.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>How long does implementation take?</h3>
                                <p>
                                    Most small business implementations take 3-4 weeks from consultation to launch. More complex enterprise solutions may take 6-8 weeks.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Do you offer payment plans?</h3>
                                <p>
                                    Yes! We offer flexible payment options including monthly subscriptions and custom payment plans for larger implementations. Contact us to discuss options.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Ready to Get Started?</h2>
                        <p>Book a free consultation to discuss your needs and get a custom quote</p>
                        <Link to="/contact" className={styles.ctaButton}>
                            Get Free Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Pricing
