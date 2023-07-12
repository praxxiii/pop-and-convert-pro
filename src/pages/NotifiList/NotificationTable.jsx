import { useEffect, useState } from "react"
import Icons from "../../components/Icons"
import Pagination from "./Pagination"

const notificationData = [
    {
        id: 1,
        title: 'Notification 1',
        type: 'sticky',
        status: 'active',
        stats: 249
    },
    {
        id: 2,
        title: 'Notification 2',
        type: 'popup',
        status: 'inactive',
        stats: 340
    },
    {
        id: 3,
        title: 'Notification 3',
        type: 'sticky',
        status: 'active',
        stats: 200
    },

]
const NotificationTable = ({ currentText }) => {

    const [notifications, setNotifications] = useState(notificationData)
    const [selectNotification, setSelectNotifications] = useState([])

    const handleCopyNotification = (items) => {
        let newObj = { ...items }
        return setNotifications([...notifications, {...newObj, id : Math.floor(Math.random() * 2000), title : `${items.title}-Copy`}])
    }

    const handleDeleteNotification = (id) => {
        setNotifications(
            notifications.filter(({ id: _id }) => _id !== id)
        )
    }

    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox" checked={notifications.length === selectNotification.length}
                            onChange={() => {
                                notifications.length !== selectNotification.length ?
                                    setSelectNotifications(
                                        notifications.map(({ id: currentID }) => currentID)
                                    ) : setSelectNotifications([])
                            }}
                        />
                    </th>
                    <th scope="col">Notification Title</th>
                    <th scope="col">Notification Type</th>
                    <th scope="col">Stats</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {notifications.filter(({ title }) => title.toLowerCase().includes(currentText.toLowerCase()))
                    .map((items) => {
                    const { id, title, type, status, stats } = items
                    return (
                        <>
                            <tr key={id}>
                                <th scope="row">
                                    <input type="checkbox" checked={selectNotification.includes(id)}
                                        onChange={() => {
                                            setSelectNotifications(
                                                selectNotification.includes(id) ?
                                                    selectNotification.filter(currentID => currentID !== id)
                                                    : [...selectNotification, id]
                                            )
                                        }} />
                                </th>
                                <td>{title}</td>
                                <td>{type}</td>
                                <td>{stats}</td>
                                <td>
                                    {<>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={status === 'active'}
                                                onChange={() => {
                                                    setNotifications(
                                                        notifications.map(individualNotification => {
                                                            const { id: _notifiId, status } = individualNotification
                                                            if (_notifiId === id) {
                                                                individualNotification.status = status === 'active' ? 'inactive' : 'active'
                                                            }
                                                            return individualNotification
                                                        })
                                                    )
                                                }}
                                            />
                                        </div>
                                    </>}
                                </td>
                                <td>
                                    {<>
                                        <a href="#">
                                            <Icons className={"action-icon"} icon="edit" width={20} height={20} />
                                        </a>
                                        <a href="#" onClick={() => handleCopyNotification(items)}>
                                            <Icons className={"action-icon"} icon="copy" width={20} height={20} />
                                        </a>
                                        <a href="#" onClick={() => handleDeleteNotification(id)}>
                                            <Icons className={"action-icon"} icon="delete" width={20} height={20} />
                                        </a>
                                    </>}
                                </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        <Pagination 
            currentPage={2}
            noOfItems={10}
            itemPerPage={2}
        />
    </>
}

export default NotificationTable