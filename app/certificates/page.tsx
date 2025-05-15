import CertificatesPageContent from "./certificates-page-content"

interface Certificate {
  id: string
  title: string
  organization: string
  date: string
  image: string
  category: "course" | "bootcamp" | "program" | "certificate" | "professional"
  detailsLink: string
}

const certificates: Certificate[] = [
  {
    id: "nvidia",
    title: "Fundamentals of Deep Learning",
    organization: "NVIDIA",
    date: "February 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIVIDIA-9CqStocb8YJrJC3525mwWFYjjNK0D0.png",
    category: "course",
    detailsLink: "/course/nvidia",
  },
  {
    id: "google-ux",
    title: "Foundations of User Experience (UX) Design",
    organization: "Google via Coursera",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20UX-6FTSx5yuQhA3vsZjQ6ietqorpNe8E3.png",
    category: "course",
    detailsLink: "/course/google-ux",
  },
  {
    id: "aws",
    title: "AWS Cloud Services Essentials",
    organization: "AWS & Barmajoon Association",
    date: "January 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20services-CYNYQayvMa1P2V2WC92ImRrcK6kIjo.png",
    category: "course",
    detailsLink: "/course/aws",
  },
  {
    id: "design-thinking",
    title: "Design Thinking Skills for AI Applications",
    organization: "King Saud University",
    date: "February 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20thinking%20certificate-Emm1TXQakebgReFny1cBPsLGfFnvL7.png",
    category: "course",
    detailsLink: "/course/design-thinking",
  },
  {
    id: "energy-systems",
    title: "Sustainable Energy Systems Program",
    organization: "Mohammed bin Salman Center for Future Science and Technology",
    date: "July 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Energy%20systems%20program-BO2FTDXkypQ8TjKsH5UizzueJxo44c.png",
    category: "program",
    detailsLink: "/course/energy-systems",
  },
  {
    id: "ai-bootcamp",
    title: "Journey to AI World",
    organization: "AI Governance Association & Partner Universities",
    date: "March 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20attendance%20certificate-daHHGLRldjuFZGgapACSLxme7KX236.png",
    category: "bootcamp",
    detailsLink: "/course/ai-bootcamp",
  },
  {
    id: "oxford",
    title: "Oxford Online Placement Test",
    organization: "Oxford University Press",
    date: "August 2019",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxford%20test-pD8APuKQspB4hnfIgwBTCf8YTBBlDl.png",
    category: "certificate",
    detailsLink: "/course/oxford",
  },
  {
    id: "ai-bootcamp-project",
    title: "AI Bootcamp - Project Completion",
    organization: "AI Governance Association",
    date: "March 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20project%20certificate-U7gjnmxYXnljSaXD4nJwJ8erLAnfOs.png",
    category: "bootcamp",
    detailsLink: "/course/ai-bootcamp",
  },
]

export default function CertificatesPage() {
  return <CertificatesPageContent certificates={certificates} />
}
