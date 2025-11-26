import ServicePage from '../../components/ServicePage'
import { Brain } from 'lucide-react'

const AIStrategy = () => {
    return (
        <ServicePage
            title="AI Strategy & Consulting"
            description="Comprehensive AI roadmaps and strategic implementation guidance for business transformation. We help you navigate the complex AI landscape and develop strategies that deliver measurable results."
            metaDescription="Expert AI strategy consulting in Birmingham. Get comprehensive AI roadmaps, implementation guidance, and strategic planning for your business transformation."
            icon={<Brain size={32} />}
            benefits={[
                "Develop a clear AI roadmap aligned with your business objectives",
                "Identify high-impact AI use cases specific to your industry",
                "Assess your organization's AI readiness and capability gaps",
                "Create a phased implementation plan with measurable KPIs",
                "Maximize ROI through strategic AI investments",
                "Build internal AI capabilities and governance frameworks"
            ]}
            features={[
                "AI Readiness Assessment",
                "Strategic Roadmap Development",
                "Use Case Identification",
                "ROI Analysis & Business Case",
                "Technology Stack Selection",
                "Change Management Planning",
                "Governance Framework Design",
                "Capability Building Programs"
            ]}
            imagePath="/images/ai-consulting-hero.png"
        />
    )
}

export default AIStrategy
