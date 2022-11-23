import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import UserProfileCard from '../components/UserProfileCard';
import Error404 from '../pages/Error404';
import SearchMain from '../pages/SearchMain';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/search/" element={<SearchMain />}>
          <Route path=":username" element={<UserProfileCard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
