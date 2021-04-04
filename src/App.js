import React from 'react'; 
import Home from './Views/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import SearchPage from './Views/Search/SearchPage';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
