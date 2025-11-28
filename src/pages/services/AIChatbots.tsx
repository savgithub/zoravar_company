import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MessageCircle, Clock, TrendingDown, Users, CheckCircle, ArrowRight } from 'lucide-react'
import styles from './ServicePage.module.css'

const AIChatbots: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>AI Chatbots for Small Business Birmingham | 24/7 Customer Service Automation</title>
                <meta name="description" content="Reduce customer service costs by 60% with AI chatbots. WhatsApp & web chat automation for Birmingham SMBs. Handle 1000+ inquiries monthly. Free consultation!" />
                <meta name="keywords" content="AI chatbot small business, WhatsApp chatbot Birmingham, customer service automation, AI chat support, chatbot for SMB, affordable chatbot UK" />
                <link rel="canonical" href="https://zoravar.co.uk/services/ai-chatbots" />
            </Helmet>

            <div className={styles.servicePage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>AI Chatbots & Automation</span>
                            <h1>24/7 AI Chatbots That Reduce Support Costs by 60%</h1>
                            <p>
                                Automate customer inquiries, qualify leads, and provide instant support with intelligent AI chatbots for WhatsApp, your website, and social media.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link to="/contact" className={styles.primaryButton}>
                                    Get Free Chatbot Demo
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.benefits}>
                    <div className={styles.container}>
                        <h2>Why Birmingham SMBs Choose Our AI Chatbots</h2>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <TrendingDown size={32} />
                                <h3>60% Cost Reduction</h3>
                                <p>Handle 1000+ monthly inquiries without hiring additional staff</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Clock size={32} />
                                <h3>24/7 Availability</h3>
                                <p>Never miss a customer inquiry, even outside business hours</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Users size={32} />
                                <h3>Instant Responses</h3>
                                <p>Answer customer questions in under 3 seconds, every time</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <MessageCircle size={32} />
                                <h3>Multi-Channel</h3>
                                <p>WhatsApp, website, Facebook Messenger - all in one platform</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.features}>
                    <div className={styles.container}>
                        <h2>What's Included</h2>
                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>WhatsApp Business Integration</h3>
                                    <p>Connect directly to your WhatsApp Business account for seamless customer conversations</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Website Chat Widget</h3>
                                    <p>Embed AI chat on your website to capture and qualify leads automatically</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Lead Qualification</h3>
                                    <p>Automatically qualify leads and route hot prospects to your sales team</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>FAQ Automation</h3>
                                    <p>Answer common questions about pricing, hours, services instantly</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Appointment Booking</h3>
                                    <p>Let customers book appointments directly through chat</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Multi-Language Support</h3>
                                    <p>Serve customers in English, Polish, Urdu, and 50+ other languages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.process}>
                    <div className={styles.container}>
                        <h2>How It Works</h2>
                        <div className={styles.processSteps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <h3>Free Consultation</h3>
                                <p>We analyze your customer inquiries and identify automation opportunities</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3>Custom Training</h3>
                                <p>We train the AI on your business, products, and FAQs</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3>Integration</h3>
                                <p>We connect the chatbot to WhatsApp, your website, and CRM</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <h3>Go Live</h3>
                                <p>Launch in 2-3 weeks and start saving time immediately</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Ready to Automate Customer Service?</h2>
                        <p>Join 50+ Birmingham businesses using AI chatbots to save time and money</p>
                        <Link to="/contact" className={styles.ctaButton}>
                            Get Free Demo & Quote
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AIChatbots
