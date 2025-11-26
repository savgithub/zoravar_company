import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import styles from './BlogsList.module.css'

const BlogsList: React.FC = () => {
    const blogs = [
        {
            title: "Laserfiche to SharePoint Migration: Pros and Cons",
            excerpt: "A comprehensive analysis of migrating from Laserfiche to SharePoint, including benefits, challenges, and best practices for a successful transition.",
            category: "SharePoint Migration",
            date: "15/12/2024",
            readTime: "12 min read",
            slug: "laserfiche-sharepoint-migration",
            image: "/images/data-pipeline.png"
        },
        {
            title: "Email Filing from Office 365 to SharePoint: Complete Guide",
            excerpt: "Learn how to implement automated email filing from Office 365/Outlook to SharePoint libraries with proper organization and metadata management.",
            category: "Email Management",
            date: "10/12/2024",
            readTime: "10 min read",
            slug: "email-filing-office365-sharepoint",
            image: "/images/automation-workflow.png"
        },
        {
            title: "Adding Missing Metadata to Emails in SharePoint Libraries",
            excerpt: "Best practices for enriching email metadata in SharePoint libraries to improve searchability, compliance, and document management.",
            category: "Document Management",
            date: "05/12/2024",
            readTime: "8 min read",
            slug: "email-metadata-sharepoint-management",
            image: "/images/data-insights.png"
        }
    ]

    return (
        <>
            <Helmet>
                <title>AI Insights & Blog | Zoravar - Birmingham AI Consulting</title>
                <meta name="description" content="Latest insights on AI, machine learning, data analytics, and digital transformation from Zoravar's expert team in Birmingham." />
                <link rel="canonical" href="https://zoravar.co.uk/blogs" />
            </Helmet>

            <div className={styles.blogsPage}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>AI Insights & Industry Trends</h1>
                        <p>Stay ahead of the curve with our latest thoughts on AI developments, industry trends, and best practices</p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.blogsGrid}>
                            {blogs.map((blog, index) => (
                                <article key={index} className={styles.blogCard}>
                                    <div className={styles.blogImage}>
                                        <img src={blog.image} alt={blog.title} />
                                        <span className={styles.category}>{blog.category}</span>
                                    </div>
                                    <div className={styles.blogContent}>
                                        <div className={styles.blogMeta}>
                                            <span>
                                                <Calendar size={16} />
                                                {blog.date}
                                            </span>
                                            <span>
                                                <Clock size={16} />
                                                {blog.readTime}
                                            </span>
                                        </div>
                                        <h2>{blog.title}</h2>
                                        <p>{blog.excerpt}</p>
                                        <Link to={`/blogs/${blog.slug}`} className={styles.readMore}>
                                            Read More
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BlogsList
