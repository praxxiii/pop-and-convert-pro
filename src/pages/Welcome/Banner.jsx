import { Link } from "react-router-dom"
export default function WelcomeBanner() {
    return <>
        <div className="card-body welcome-banner">
            <div className="card card-info" style={{ width: "73rem" }}>
                <h1 className="card-title">Welcome to Pop and Convert Pro</h1>
                <p className="card-text">We're glad you're here. This platform is designed to provide you with all the tools and resources you need to be a successful coach. Whether you're new to coaching or a seasoned pro, we're confident that you'll find everything you need here to help your athletes.</p>
                <button type="button" className="btn btn-primary" style={{ width: "25%" }}>Create New Notification</button>
                <Link type="button" className="btn btn-secondary" to="/notifications">Show All Notifications</Link>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uXWycyeTeCs" allowFullScreen name="iframe_video1"></iframe>
        </div>
    </>
}