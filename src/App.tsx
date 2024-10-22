import { MainLayout } from './layouts/MainLayOut';
import { Favourites } from './pages/Favourites';
import { FullCharacter } from './pages/FullCharacter';
import { Home } from './pages/Home';
import '@/app/scss/styles.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<FullCharacter />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
