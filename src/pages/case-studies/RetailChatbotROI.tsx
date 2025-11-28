import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react'
import styles from './CaseStudyPage.module.css'

const RetailChatbotROI: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Case Study: Birmingham Retailer Saves £45K with AI Chatbot | Zoravar</title>
                <meta name="description" content="How a Birmingham retail shop reduced customer service costs by 65% and increased sales by 30% using AI chatbots. Real ROI in 60 days." />
                <link rel="canonical" href="https://zoravar.co.uk/case-studies/retail-chatbot-roi" />
            </Helmet>

            <div className={styles.caseStudy}>
                <Link to="/case-studies" className={styles.backButton}>
                    <ArrowLeft size={20} />
                    Back to Case Studies
                </Link>

                <header className={styles.header}>
                    <span className={styles.industry}>Retail</span>
                    <h1>How a Birmingham Retailer Saved £45K Annually with AI Chatbots</h1>
                    <p className={styles.subtitle}>
                        65% reduction in customer service costs and 30% increase in online sales in just 60 days
                    </p>
                </header>

                <section className={styles.overview}>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <TrendingUp size={32} />
                            <div className={styles.statNumber}>65%</div>
                            <div className={styles.statLabel}>Cost Reduction</div>
                        </div>
                        <div className={styles.stat}>
                            <Users size={32} />
                            <div className={styles.statNumber}>2,500+</div>
                            <div className={styles.statLabel}>Monthly Inquiries Handled</div>
                        </div>
                        <div className={styles.stat}>
                            <Clock size={32} />
                            <div className={styles.statNumber}>60 Days</div>
                            <div className={styles.statLabel}>To Full ROI</div>
                        </div>
                        <div className={styles.stat}>
                            <CheckCircle size={32} />
                            <div className={styles.statNumber}>30%</div>
                            <div className={styles.statLabel}>Sales Increase</div>
                        </div>
                    </div>
                </section>

                <section className={styles.content}>
                    <h2>The Challenge</h2>
                    <p>
                        A Birmingham-based home furnishings retailer with 3 locations was struggling with customer service costs. They were receiving 2,500+ monthly inquiries across phone, email, WhatsApp, and social media about:
                    </p>
                    <ul>
                        <li>Product availability and pricing</li>
                        <li>Store hours and locations</li>
                        <li>Delivery options and costs</li>
                        <li>Return policies</li>
                        <li>Product recommendations</li>
                    </ul>
                    <p>
                        The business employed 2 full-time customer service staff at £25K each annually, but still couldn't respond to all inquiries within 24 hours. This led to lost sales and frustrated customers.
                    </p>

                    <h2>The Solution</h2>
                    <p>
                        We implemented a custom AI chatbot solution integrated with:
                    </p>
                    <ul>
                        <li><strong>WhatsApp Business API</strong> - Their most popular channel</li>
                        <li><strong>Website Live Chat</strong> - For online shoppers</li>
                        <li><strong>Facebook Messenger</strong> - For social media inquiries</li>
                        <li><strong>Product Database Integration</strong> - Real-time stock and pricing</li>
                    </ul>
                    <p>
                        The AI chatbot was trained on their entire product catalog, FAQs, and customer service history. It could:
                    </p>
                    <ul>
                        <li>Answer product questions instantly</li>
                        <li>Check stock availability across all 3 locations</li>
                        <li>Provide delivery quotes</li>
                        <li>Book in-store appointments</li>
                        <li>Qualify leads and route to sales team</li>
                        <li>Handle returns and exchanges</li>
                    </ul>

                    <h2>Implementation Process</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>Week 1</div>
                            <div className={styles.timelineContent}>
                                <h3>Discovery & Training</h3>
                                <p>Analyzed 6 months of customer inquiries, trained AI on products and FAQs</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>Week 2-3</div>
                            <div className={styles.timelineContent}>
                                <h3>Development & Integration</h3>
                                <p>Built chatbot, integrated with WhatsApp, website, and product database</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>Week 4</div>
                            <div className={styles.timelineContent}>
                                <h3>Testing & Launch</h3>
                                <p>Soft launch with monitoring, full deployment across all channels</p>
                            </div>
                        </div>
                    </div>

                    <h2>Results After 60 Days</h2>
                    <div className={styles.results}>
                        <div className={styles.resultCard}>
                            <h3>Cost Savings</h3>
                            <ul>
                                <li>Reduced from 2 full-time staff to 1 part-time (65% cost reduction)</li>
                                <li>Annual savings: £45,000</li>
                                <li>ROI achieved in 60 days</li>
                            </ul>
                        </div>
                        <div className={styles.resultCard}>
                            <h3>Customer Experience</h3>
                            <ul>
                                <li>Average response time: 3 seconds (was 4 hours)</li>
                                <li>24/7 availability vs 9-5 previously</li>
                                <li>Customer satisfaction score: 4.8/5</li>
                                <li>95% of inquiries resolved without human intervention</li>
                            </ul>
                        </div>
                        <div className={styles.resultCard}>
                            <h3>Business Impact</h3>
                            <ul>
                                <li>30% increase in online sales</li>
                                <li>2,500+ monthly inquiries handled automatically</li>
                                <li>45% increase in appointment bookings</li>
                                <li>Zero missed inquiries</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Client Testimonial</h2>
                    <blockquote className={styles.testimonial}>
                        <p>
                            "The AI chatbot has been a game-changer for our business. We're now available 24/7, our customers get instant answers, and we've cut our customer service costs by two-thirds. The ROI was immediate - we saw results in the first month. Zoravar made the whole process seamless."
                        </p>
                        <cite>— Sarah Mitchell, Owner, Birmingham Home Furnishings</cite>
                    </blockquote>

                    <h2>Key Takeaways for SMBs</h2>
                    <ul>
                        <li><strong>Quick ROI:</strong> Full return on investment achieved in just 60 days</li>
                        <li><strong>Affordable:</strong> No need for enterprise budgets - perfect for SMBs</li>
                        <li><strong>Easy Integration:</strong> Works with existing tools (WhatsApp, website, social media)</li>
                        <li><strong>Scalable:</strong> Handles unlimited inquiries without additional cost</li>
                        <li><strong>24/7 Service:</strong> Never miss a customer inquiry again</li>
                    </ul>
                </section>

                <section className={styles.cta}>
                    <h2>Want Similar Results for Your Business?</h2>
                    <p>Get a free consultation and see how AI chatbots can transform your customer service</p>
                    <Link to="/contact" className={styles.ctaButton}>
                        Get Free Consultation
                        <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                    </Link>
                </section>
            </div>
        </>
    )
}

export default RetailChatbotROI
