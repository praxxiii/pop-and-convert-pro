import { useState } from "react"
import Icons from "../../components/Icons"

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
const NotificationTable = () => {

    const [ notifications, setNotifications ] = useState(notificationData)
    const [ selectNotification, setSelectNotifications ] = useState([])
    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox"/>
                    </th>
                    <th scope="col">Notification Title</th>
                    <th scope="col">Notification Type</th>
                    <th scope="col">Stats</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {notifications.map(({ id, title, type, status, stats }) => {
                    return (
                        <>
                            <tr>
                                <th scope="row">
                                    <input type="checkbox" checked={selectNotification.includes(id)}
                                        onChange={() => {
                                            setSelectNotifications(
                                                selectNotification.includes(id) ? 
                                                selectNotification.filter(currentID => currentID !== id)
                                                : [...selectNotification, id] 
                                            )
                                        }}/>
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
                                                            const {id: _notifiId, status} = individualNotification
                                                            if(_notifiId === id){
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
                                        <Icons className={"action-icon"} icon="edit" width={20} height={20} />
                                        <Icons className={"action-icon"} icon="copy" width={20} height={20} />
                                        <Icons className={"action-icon"} icon="delete" width={20} height={20} />
                                    </>}
                                </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
    </>
}

export default NotificationTable