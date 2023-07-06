import InfoCard from "./InfoCard"

const cardContent =[
    {
        title: "Documentation",
        content: "Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.",           
        link: () => <a href="#" className="icon-link icon-link-hover">Explore Documentation<i className="icon bi-arrow-right"></i></a>
    },
    {
        title: "Support",
        content: "Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.",
        link: () => <a href="#" className="icon-link icon-link-hover">Contact Support Team<i className="icon bi-arrow-right"></i></a>

    },
    {
        title: "Video Tutorials",
        content: "Unlock your creative potential with this comprehensive video tutorial that guides you step-by-step through mastering a new skill.",
        link: () => <a href="#" className="icon-link icon-link-hover">Check Out Now<i className="icon bi-arrow-right"></i></a>

    }
]

export default function Welcome () {
    return <>
        {
            cardContent.map(({title, link:Link, content}) => {
                return <InfoCard
                    title={title}
                >
                    <p className="card-text">{content}</p>
                    <Link/>
                </InfoCard>
            })
        }
    </>
}