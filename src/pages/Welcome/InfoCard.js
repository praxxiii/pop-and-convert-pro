export default function InfoCard ({children, title }) {
    return <>
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {children}
                </div>
            </div>
        </div>
    </>
}