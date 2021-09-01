import Header from './components/Header'
import Navbar from './components/Navbar'
import WordcloudContainer from './containers/WordcloudContainer'
import FeedsContainer from './containers/FeedsContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <WordcloudContainer />
      <FeedsContainer />
    </div>
  );
}

export default App;
