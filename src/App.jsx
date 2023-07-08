import './assets/main.css';
import Screen from './pages/Screen';
import Header from './pages/Header';
import Welcome from './pages/Welcome';
import NotifiList from './pages/NotifiList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

const screenList = {
	home: Welcome,
	list: NotifiList
}

function App() {

	const [currentPage, setCurrentPage] = useState('home')
	return (
		<>
			<Header changeScreen={setCurrentPage} />
			<Screen screen={screenList[currentPage]} />
		</>
	);
}

export default App;
