import { useState } from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationTable from "./NotificationTable";
import { useQuery } from "@tanstack/react-query";
import { wait } from "../../../store"

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
	}

]

const postQuery = () => ({
	queryKey: ["notifications"],
	queryFn: () => wait(1000).then(() => [...notificationData]),
})

function NotifiList() {

	const [findText, setFindText] = useState('')

	const { data: items, loading } = useQuery(postQuery())

	loading &&
		<h1>IT IS LoADING</h1>
	
	return (
		<>
			<NotificationHeader searchText={setFindText} />
			{console.log(items)}
			<NotificationTable
				currentText={findText}
				notificationList = {items}
			/>
		</>
	)
}

export default NotifiList