import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Sparkles, TrendingUp, Clock, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import styles from './ServicePage.module.css'

const GenerativeAI: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Generative AI for Marketing & Content | Birmingham SMB Solutions</title>
                <meta name="description" content="Scale your marketing with AI content generation. Create blog posts, social media, emails & ads in minutes. Save 15+ hours/week. Perfect for Birmingham SMBs!" />
                <meta name="keywords" content="generative AI marketing, AI content creation, AI copywriting Birmingham, marketing automation SMB, AI social media, content generation tool" />
                <link rel="canonical" href="https://zoravar.co.uk/services/generative-ai" />
            </Helmet>

            <div className={styles.servicePage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>Generative AI Solutions</span>
                            <h1>Scale Your Marketing with AI Content Generation</h1>
                            <p>
                                Create blog posts, social media content, emails, and ads in minutes instead of hours. Save 15+ hours per week with AI-powered marketing automation.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link to="/contact" className={styles.primaryButton}>
                                    Get Free AI Content Demo
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.benefits}>
                    <div className={styles.container}>
                        <h2>Why SMBs Love Our Generative AI</h2>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <Clock size={32} />
                                <h3>Save 15+ Hours/Week</h3>
                                <p>Generate content 10x faster than manual writing</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <TrendingUp size={32} />
                                <h3>Boost Engagement</h3>
                                <p>AI-optimized content that drives clicks and conversions</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Sparkles size={32} />
                                <h3>Consistent Quality</h3>
                                <p>Maintain brand voice across all channels</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Zap size={32} />
                                <h3>Multi-Channel</h3>
                                <p>Blog, social, email, ads - all from one platform</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.features}>
                    <div className={styles.container}>
                        <h2>What We Can Automate</h2>
                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Blog Post Generation</h3>
                                    <p>Create SEO-optimized blog posts from keywords or topics in minutes</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Social Media Content</h3>
                                    <p>Generate engaging posts for Facebook, LinkedIn, Instagram, and Twitter</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Email Campaigns</h3>
                                    <p>Write personalized email sequences that convert prospects to customers</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Ad Copy Creation</h3>
                                    <p>Generate high-converting Google Ads and Facebook ad copy</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>Product Descriptions</h3>
                                    <p>Create compelling product descriptions for e-commerce at scale</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle size={24} />
                                <div>
                                    <h3>SEO Optimization</h3>
                                    <p>AI-powered keyword research and content optimization for Google rankings</p>
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
                                <h3>Brand Training</h3>
                                <p>We train the AI on your brand voice, products, and target audience</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <h3>Content Strategy</h3>
                                <p>We create a content calendar aligned with your business goals</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <h3>AI Generation</h3>
                                <p>Generate content with one click - blog posts, social, emails</p>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <h3>Review & Publish</h3>
                                <p>Quick human review and publish directly to your channels</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Ready to 10x Your Content Output?</h2>
                        <p>Join Birmingham businesses using AI to dominate their marketing</p>
                        <Link to="/contact" className={styles.ctaButton}>
                            Get Free Content Strategy Session
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default GenerativeAI
