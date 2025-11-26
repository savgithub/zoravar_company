import React from 'react'
import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppButton.module.css'

const WhatsAppButton: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pulse}></div>
            <div className={styles.pulse2}></div>
            <button
                className={styles.button}
                aria-label="Contact us on WhatsApp"
                onClick={() => window.open('https://wa.me/447947931323', '_blank')}
            >
                <MessageCircle size={32} fill="white" />
                <div className={styles.indicator}></div>
            </button>
        </div>
    )
}

export default WhatsAppButton
