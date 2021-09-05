import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import DataContainer from './containers/DataContainer'

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
        </div>
      </Router>
    </div>
  );
}

export default App;
