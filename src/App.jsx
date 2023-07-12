import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Header from './components/Header';
import NotifiList from './pages/NotifiList';
import Screen from './components/Screen';
import Welcome from './pages/Welcome';

const screenList = {
	home: Welcome,
	list: NotifiList
}

function App() {

	const [currentPage, setCurrentPage] = useState('list')
	return (
		<>
			<Header changeScreen={setCurrentPage} />
			<Screen screen={screenList[currentPage]} />
		</>
	);
}

export default App;
