import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import DataContainer from './containers/DataContainer'
import AboutPage from './components/AboutPage'

function App() {
  const info = console.log(process.env)
  return (
    <div className="App">
      {info}
      <Header />
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/data' component={DataContainer} />
          <Route exact path='/about' component={AboutPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
