import { useState } from 'react'
import './App.css'
import 'flowbite';
import MyNav from './components/MyNav/MyNav';
import MyFooter from './components/MyFooter/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import scifi from './books/scifi.json';
import CategoryButtons from './components/CategoryButtons';
import { ThemeContext, AuthContext } from './components/modules/Context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';




function App() {

  let [type, setType] = useState('fantasy');
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);
  let [theme, setTheme] = useState('dark');
  let [authUser, setauthUser] = useState('Carmen D Innocenzo');
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <AuthContext.Provider value={[authUser]}>
          <BrowserRouter>
            <MyNav search={search} handleSearch={handleSearch} />
            <Welcome />
            <Routes>
              <Route index element={<AllTheBooks books={fantasy} search={search} />}></Route>
              <Route path='/details/:asin' element={<BookDetails />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
           {/*<CategoryButtons setType={setType} />
            {type === 'fantasy' && <AllTheBooks books={fantasy} search={search} />}
            {type === 'history' && <AllTheBooks books={history} search={search} />}
            {type === 'horror' && <AllTheBooks books={horror} search={search} />}
            {type === 'scifi' && <AllTheBooks books={scifi} search={search} />}*/} 
            <MyFooter />
          </BrowserRouter>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );


}

export default App
