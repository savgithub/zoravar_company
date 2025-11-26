import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
import styles from './NotFound.module.css'

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Zoravar</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className={styles.notFound}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.code}>404</h1>
                        <h2>Page Not Found</h2>
                        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
                        <Link to="/" className={styles.homeButton}>
                            <HomeIcon size={20} />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
