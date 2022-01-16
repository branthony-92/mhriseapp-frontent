import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArmourSetsPage from './pages/ArmourSetsPage';
import Layout from './components/layout/Layout';
import SkillsPage from './pages/SkillsPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/armour-sets' element={<ArmourSetsPage/>} />
        <Route path='/skills' element={<SkillsPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
