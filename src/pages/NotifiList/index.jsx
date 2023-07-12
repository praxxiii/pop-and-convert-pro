import { useState } from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationTable from "./NotificationTable";

export default function NotifiList() {

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
		{
			id: 4,
			title: 'Notification 4',
			type: 'sticky',
			status: 'active',
			stats: 200
		},
		{
			id: 5,
			title: 'Notification 5',
			type: 'popup',
			status: 'active',
			stats: 200
		},
		{
			id: 6,
			title: 'Notification 6',
			type: 'sticky',
			status: 'active',
			stats: 200
		},
		{
			id: 7,
			title: 'Notification 7',
			type: 'sticky',
			status: 'active',
			stats: 200
		},
		{
			id: 8,
			title: 'Notification 8',
			type: 'sticky',
			status: 'active',
			stats: 200
		},
		{
			id: 9,
			title: 'Notification 9',
			type: 'sticky',
			status: 'active',
			stats: 200
		},
		{
			id: 10,
			title: 'Notification 10',
			type: 'sticky',
			status: 'active',
			stats: 200
		}

	]

	const [findText, setFindText] = useState('')
	const [notifications, setNotifications] = useState(notificationData)

	return (
		<>
			<NotificationHeader searchText={setFindText} />
			<NotificationTable
				currentText={findText}
				sendNotification={notifications}
				sendNotifiUpdater={setNotifications}
			/>
		</>
	)
}