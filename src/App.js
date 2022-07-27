import { Nav } from './nav';
import { Main } from './components';
import Sidebar from './components/Sidebar';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>

			<NavProvider>
				<Nav />
				<Sidebar/>
				<Main />
			</NavProvider>
			
		</div>
	);
}

export default App;
