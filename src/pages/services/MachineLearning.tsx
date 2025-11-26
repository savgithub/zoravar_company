import ServicePage from '../../components/ServicePage'
import { Cog } from 'lucide-react'

const MachineLearning = () => {
    return (
        <ServicePage
            title="Machine Learning Solutions"
            description="Custom ML models and algorithms tailored to solve your specific business challenges. From predictive analytics to computer vision, we build intelligent systems that learn and adapt."
            metaDescription="Custom machine learning solutions in Birmingham. Predictive analytics, custom ML models, and intelligent automation for your business."
            icon={<Cog size={32} />}
            benefits={[
                "Automate complex decision-making processes",
                "Predict customer behavior and market trends",
                "Optimize operations through intelligent automation",
                "Extract insights from unstructured data",
                "Reduce costs through process optimization",
                "Improve accuracy and reduce human error"
            ]}
            features={[
                "Predictive Analytics",
                "Natural Language Processing",
                "Computer Vision",
                "Recommendation Systems",
                "Anomaly Detection",
                "Time Series Forecasting",
                "Model Training & Deployment",
                "MLOps & Model Monitoring"
            ]}
            imagePath="/images/machine-learning-models.png"
        />
    )
}

export default MachineLearning
