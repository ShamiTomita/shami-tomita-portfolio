import { Nav } from './nav';
import { Main } from './components';
import Sidebar from './components/Sidebar';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>

			<NavProvider>
				<div className="sidebar">
					<Sidebar/>
				</div>
				<div>
					<Nav />
					<Main />
				</div>

			</NavProvider>

		</div>
	);
}

export default App;
