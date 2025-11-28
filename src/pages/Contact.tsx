import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Send, CheckCircle, Shield } from 'lucide-react'
import styles from './Contact.module.css'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        _subject: '', // Will be set dynamically
        _honeypot: '' // Spam protection honeypot field (hidden from users)
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [formStartTime, setFormStartTime] = useState<number>(0)

    // Set form start time when component mounts (spam protection)
    useEffect(() => {
        setFormStartTime(Date.now())
        // Set custom subject with current URL
        const currentUrl = window.location.href
        setFormData(prev => ({
            ...prev,
            _subject: `New Inquiry via ${currentUrl}`
        }))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = (): boolean => {
        // Check if honeypot field is filled (indicates bot)
        if (formData._honeypot) {
            setError('Spam detected. Please try again.')
            return false
        }

        // Check if form was filled too quickly (likely bot) - minimum 3 seconds
        const timeSpent = Date.now() - formStartTime
        if (timeSpent < 3000) {
            setError('Please take your time to fill out the form.')
            return false
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.')
            return false
        }

        // Check for suspicious patterns in message (common spam keywords)
        const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'buy now', 'limited time']
        const messageText = formData.message.toLowerCase()
        if (spamKeywords.some(keyword => messageText.includes(keyword))) {
            setError('Your message contains suspicious content. Please revise.')
            return false
        }

        // Ensure minimum message length
        if (formData.message.length < 10) {
            setError('Please provide a more detailed message (at least 10 characters).')
            return false
        }

        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate form before submission
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setError('')

        try {
            // Prepare data for Formspree
            const submissionData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                service: formData.service,
                message: formData.message,
                _subject: formData._subject, // Custom email subject with URL
                _replyto: formData.email, // Set reply-to as sender's email
                _gotcha: formData._honeypot // Formspree's honeypot field
            }

            // Replace with your actual Formspree endpoint
            const response = await fetch('https://formspree.io/f/xzzqjanz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(submissionData)
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: '',
                    _subject: `New Inquiry via ${window.location.href}`,
                    _honeypot: ''
                })
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch (err) {
            setError('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact Us | Zoravar - AI Consulting Birmingham</title>
                <meta name="description" content="Get in touch with Zoravar for AI consulting, machine learning, and data analytics services in Birmingham. Book a free consultation today." />
                <link rel="canonical" href="https://zoravar.co.uk/contact" />
            </Helmet>

            <div className={styles.contact}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Get in Touch</h1>
                        <p>Ready to transform your business with AI? Let's discuss how we can help.</p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.info}>
                                <h2>Contact Information</h2>
                                <p>Reach out to us and we'll respond as soon as possible.</p>

                                <div className={styles.contactItems}>
                                    <div className={styles.contactItem}>
                                        <div className={styles.iconWrapper}>
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3>Phone</h3>
                                            <p>Contact via form</p>
                                            <p>Mon-Fri, 9AM-6PM GMT</p>
                                        </div>
                                    </div>

                                    <div className={styles.contactItem}>
                                        <div className={styles.iconWrapper}>
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3>Email</h3>
                                            <p>Contact via form</p>
                                            <p>We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className={styles.contactItem}>
                                        <div className={styles.iconWrapper}>
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3>Location</h3>
                                            <p>Birmingham, United Kingdom</p>
                                            <p>Serving Birmingham & surrounding areas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>Why Choose Zoravar?</h3>
                                    <ul>
                                        <li>20+ years of combined experience</li>
                                        <li>Proven track record with 50+ projects</li>
                                        <li>Specialized in AI for SMBs</li>
                                        <li>Birmingham-based with local expertise</li>
                                        <li>Free initial consultation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.formWrapper}>
                                {isSubmitted ? (
                                    <div className={styles.successMessage}>
                                        <CheckCircle size={64} />
                                        <h2>Thank You!</h2>
                                        <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className={styles.resetButton}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formHeader}>
                                            <h2>Send us a Message</h2>
                                            <p>Fill out the form below and we'll get back to you shortly.</p>
                                            <div className={styles.securityBadge}>
                                                <Shield size={16} />
                                                <span>Spam protected</span>
                                            </div>
                                        </div>

                                        {/* Honeypot field - hidden from users */}
                                        <input
                                            type="text"
                                            name="_honeypot"
                                            value={formData._honeypot}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />

                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                minLength={2}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+44 7XXX XXXXXX"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="company">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company Ltd"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="service">Service Interested In *</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ai-strategy">AI Strategy & Consulting</option>
                                                <option value="machine-learning">Machine Learning Solutions</option>
                                                <option value="data-analytics">Data Analytics & Intelligence</option>
                                                <option value="ai-agents">AI Agents for SMBs</option>
                                                <option value="generative-ai">Generative AI Solutions</option>
                                                <option value="process-automation">Process Automation</option>
                                                <option value="cybersecurity">AI-Powered Cybersecurity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder="Tell us about your project and how we can help..."
                                                minLength={10}
                                            />
                                        </div>

                                        {error && <div className={styles.error}>{error}</div>}

                                        <button
                                            type="submit"
                                            className={styles.submitButton}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <Send size={20} />
                                        </button>

                                        <p className={styles.privacyNote}>
                                            By submitting this form, you agree to our privacy policy. We'll never share your information.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
