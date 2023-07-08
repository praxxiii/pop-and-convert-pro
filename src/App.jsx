import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Header from './pages/Header';
import NotifiList from './pages/NotifiList';
import Screen from './pages/Screen';
import Welcome from './pages/Welcome';

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
