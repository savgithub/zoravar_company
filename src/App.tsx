import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import BlogsList from './pages/BlogsList'
import CaseStudiesList from './pages/CaseStudiesList'

// Services
import AIStrategy from './pages/services/AIStrategy'
import MachineLearning from './pages/services/MachineLearning'
import DataAnalytics from './pages/services/DataAnalytics'
import ProcessAutomation from './pages/services/ProcessAutomation'
import EmailFiling from './pages/services/EmailFiling'
import LaserFicheMigration from './pages/services/LaserFicheMigration'
import DataEngineering from './pages/services/DataEngineering'
import PIIProtection from './pages/services/PIIProtection'
import Cybersecurity from './pages/services/Cybersecurity'
import AIChatbots from './pages/services/AIChatbots'
import GenerativeAI from './pages/services/GenerativeAI'

// Industries
import Finance from './pages/industries/Finance'
import Healthcare from './pages/industries/Healthcare'
import Manufacturing from './pages/industries/Manufacturing'
import Retail from './pages/industries/Retail'

// Blogs
import LaserFicheMigrationBlog from './pages/blogs/LaserFicheMigration'
import EmailFilingBlog from './pages/blogs/EmailFiling'
import EmailMetadataBlog from './pages/blogs/EmailMetadata'
import AIChatbotsForSMBs from './pages/blogs/AIChatbotsForSMBs'

// Case Studies
import CybersecurityThreatDetection from './pages/case-studies/CybersecurityThreatDetection'
import FinanceRiskAssessment from './pages/case-studies/FinanceRiskAssessment'
import HealthcareDiagnostics from './pages/case-studies/HealthcareDiagnostics'
import RetailChatbotROI from './pages/case-studies/RetailChatbotROI'

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

// Pricing
import Pricing from './pages/Pricing'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blogs" element={<BlogsList />} />
                    <Route path="case-studies" element={<CaseStudiesList />} />

                    {/* Services Routes */}
                    <Route path="services/ai-chatbots" element={<AIChatbots />} />
                    <Route path="services/generative-ai" element={<GenerativeAI />} />
                    <Route path="services/ai-strategy" element={<AIStrategy />} />
                    <Route path="services/machine-learning" element={<MachineLearning />} />
                    <Route path="services/data-analytics" element={<DataAnalytics />} />
                    <Route path="services/process-automation" element={<ProcessAutomation />} />
                    <Route path="services/email-filing-sharepoint" element={<EmailFiling />} />
                    <Route path="services/laserfiche-to-sharepoint-migration" element={<LaserFicheMigration />} />
                    <Route path="services/data-engineering" element={<DataEngineering />} />
                    <Route path="services/pii-data-protection" element={<PIIProtection />} />
                    <Route path="services/cybersecurity" element={<Cybersecurity />} />

                    {/* Industries Routes */}
                    <Route path="industries/finance" element={<Finance />} />
                    <Route path="industries/healthcare" element={<Healthcare />} />
                    <Route path="industries/manufacturing" element={<Manufacturing />} />
                    <Route path="industries/retail" element={<Retail />} />

                    {/* Blog Routes */}
                    <Route path="blogs/ai-chatbots-small-business-guide" element={<AIChatbotsForSMBs />} />
                    <Route path="blogs/laserfiche-sharepoint-migration" element={<LaserFicheMigrationBlog />} />
                    <Route path="blogs/email-filing-office365-sharepoint" element={<EmailFilingBlog />} />
                    <Route path="blogs/email-metadata-sharepoint-management" element={<EmailMetadataBlog />} />

                    {/* Case Study Routes */}
                    <Route path="case-studies/retail-chatbot-roi" element={<RetailChatbotROI />} />
                    <Route path="case-studies/cybersecurity-threat-detection" element={<CybersecurityThreatDetection />} />
                    <Route path="case-studies/finance-risk-assessment" element={<FinanceRiskAssessment />} />
                    <Route path="case-studies/healthcare-diagnostics" element={<HealthcareDiagnostics />} />

                    {/* Legal Pages */}
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-of-service" element={<TermsOfService />} />
                    <Route path="cookie-policy" element={<CookiePolicy />} />

                    {/* Pricing */}
                    <Route path="pricing" element={<Pricing />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
