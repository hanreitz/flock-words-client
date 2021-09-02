import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <div>
          <Route path='/' component={Homepage}/> 
        </div>
      </Router>
    </div>
  );
}

export default App;
