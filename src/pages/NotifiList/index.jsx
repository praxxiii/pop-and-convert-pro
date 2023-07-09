import { useState } from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationTable from "./NotificationTable";

export default function NotifiList() {

	const [findText, setFindText] = useState('')
	return (
		<>
			<NotificationHeader searchText={setFindText}/>
			<NotificationTable currentText={findText}/>
		</>
	)
}