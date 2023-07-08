export default function NotificationHeader() {
    return (
        <>
            <nav class="navbar bg-body-tertiary notifi-header">
                <div class="container-fluid">
                    <h1 className="card-title">Notification</h1>
                    <form className="d-flex" role="search">
                        <input style={{width:"500px"}} class="form-control me-2" type="search" placeholder="What are you looking for..." aria-label="Search"/>
                        <button style={{width:"50%"}} class="btn btn-primary" type="submit">Add Notification</button>
                    </form>
                </div>
            </nav>
        </>
    )
}