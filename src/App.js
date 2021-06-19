
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Helmet} from "react-helmet";
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'
import RecommendedVideos from './RecommendedVideos'
import './App.css'

function App() {
  return (


    <div className="App">
        <Helmet>
                {/* <meta charSet="utf-8" /> */}
                <title>YouTube</title>
               
            </Helmet>
      <Router>
      <Header />

        <Switch>
          <Route path="/search/:searchTerm">
          <div className="appPage">
          <Sidebar />
          <SearchPage/>
          </div>

          </Route>

          <Route path="/">
          <div className="appPage">
              <Sidebar />
              <RecommendedVideos />
          </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
