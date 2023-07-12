export default function NotificationHeader({searchText}) {

    const handleSearchNotification =(event)=>{
        return searchText(event.target.value)
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary notifi-header">
                <div className="container-fluid">
                    <h1 className="card-title">Notification</h1>
                    <form className="d-flex" role="search">
                        <input style={{width:"25vw"}} className="form-control me-2" type="search" placeholder="What are you looking for..." aria-label="Search"
                            onChange={handleSearchNotification}
                        />
                        <button style={{width:"50%"}} className="btn btn-primary" type="submit">Add Notification</button>
                    </form>
                </div>
            </nav>
        </>
    )
}