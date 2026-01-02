import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Octofit Tracker" width="40" className="d-inline-block align-top mr-2" />
          <span className="h4 mb-0 ml-2 text-white">Octofit Tracker</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="card shadow p-4 mb-4" style={{ maxWidth: 500 }}>
              <img src={logo} className="App-logo mb-4 mx-auto d-block" alt="logo" style={{ width: 100 }} />
              <h1 className="mb-3 text-center">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
              <p className="lead text-center">Your fitness, team, and leaderboard app built with Django, MongoDB, and React + Bootstrap.</p>
              <a className="btn btn-outline-primary btn-block mt-3" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
