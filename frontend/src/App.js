import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BoardPage from './Pages/BoardPage';
import TeamPage from './Pages/TeamPage';
import MentorsPage from './Pages/MentorsPage';
import CollaborationPage from './Pages/CollaborationPage';
import FacilitiesPage from './Pages/FacilitiesPage';
import EventsPage from './Pages/EventsPage';
import AwardsPage from './Pages/AwardsPage';
import PoliciesPage from './Pages/PoliciesPage';
import ApplyIncubationPage from './Pages/ApplyIncubationPage';
import TrainingPage from './Pages/TrainingPage';
import PortfolioPage from './Pages/PortfolioPage';
import CareersPage from './Pages/CareersPage';
import WebTeamPage from './Pages/WebTeamPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/aboutus' element={<AboutPage />}/>
          <Route path='/board' element={<BoardPage />}/>
          <Route path='/team' element={<TeamPage />}/>
          <Route path='/mentors' element={<MentorsPage />}/>
          <Route path='/collaboration' element={<CollaborationPage />}/>
          <Route path='/facilities' element={<FacilitiesPage />}/>
          <Route path='/events' element={<EventsPage />}/>
          <Route path='/awards' element={<AwardsPage />}/>
          <Route path='/policies/:type' element={<PoliciesPage />}/>
          <Route path='/apply-incubation' element={<ApplyIncubationPage />}/>
          <Route path='/training' element={<TrainingPage />}/>
          <Route path='/portfolio' element={<PortfolioPage />}/>
          <Route path='/careers' element={<CareersPage />}/>
          <Route path='/webteam' element={<WebTeamPage />}/>
          {/* Legacy redirects */}
          <Route path='/events/*' element={<EventsPage />}/>
          <Route path='/portfolio/*' element={<PortfolioPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
