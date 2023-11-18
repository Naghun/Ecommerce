import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage';
import InternshipPage from './pages/InternshipPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
		<div className="App bg-light">
			<Router>
			<Navigation />
			<div className='body-container'>
				<Routes>
					<Route 
						path='/' 
						element= {<HomePage />}
					/>
					<Route path='/shop/' exact Component={ShopPage} />
					<Route path='/cart/' exact Component={CartPage} />
					<Route path='/internship/' exact Component={InternshipPage} />
					<Route path='/login/' exact Component={LoginPage} />
				</Routes>
			</div>
			</Router>
		</div>
    );
}

export default App;
