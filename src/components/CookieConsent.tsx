import React, { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import styles from './CookieConsent.module.css'

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setShowBanner(false)
        // Enable analytics here if you add Google Analytics later
    }

    const rejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected')
        setShowBanner(false)
    }

    if (!showBanner) return null

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <Cookie size={24} />
                </div>
                <div className={styles.text}>
                    <h3>Cookie Notice</h3>
                    <p>
                        We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking "Accept," you agree to our website's cookie use as described in our <a href="/cookie-policy">Cookie Policy</a>.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={acceptCookies} className={styles.acceptButton}>
                        Accept All
                    </button>
                    <button onClick={rejectCookies} className={styles.rejectButton}>
                        Essential Only
                    </button>
                    <button onClick={() => setShowBanner(false)} className={styles.closeButton} aria-label="Close">
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieConsent
