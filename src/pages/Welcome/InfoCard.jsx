export default function InfoCard ({children, title }) {
    return <>
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    {children}
                </div>
            </div>
        </div>
    </>
}