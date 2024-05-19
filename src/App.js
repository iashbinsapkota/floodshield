import DashboardPage from '../src/views/DashboardPage';

import LoginPage from '../src/views/auth/LoginPage'
import UsersPage from '../src/views/users'
import ResetPassword from '../src/views/auth/ResetPassword';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProfilePage from './views/EditProfile';
import RegisterPage from './views/auth/RegisterPage';
import FAQPage from './views/FAQPage';
import FloodPreventionPage from './views/InformationPage';
import AdminDashboardPage from './views/admin/DashboardPage';
import AccountPage from './views/accountpage';
import AnalysisPage from './views/Analysis';

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<DashboardPage/>} />
                <Route exact path='/dashboard' element={<DashboardPage/>} />
                <Route exact path='/admin_dashboard' element={<AdminDashboardPage/>} />
                <Route exact path='/users' element={<UsersPage/>} />
                <Route exact path='/account' element={<AccountPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/resetpassword' element={<ResetPassword/>} />
                <Route exact path='/register' element={<RegisterPage/>} />
                <Route exact path='/faq' element={<FAQPage/>} />
                <Route exact path='/analysis' element={<AnalysisPage/>} />
                <Route exact path='/preventionpage' element={<FloodPreventionPage/>} />
               </Routes>  
        </Router>
    )
}

export default App;
