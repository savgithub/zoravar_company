import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import CookieConsent from './CookieConsent'

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
        </div>
    )
}

export default Layout
