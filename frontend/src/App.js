import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <Router>
      <div>
      <Header/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' Component={HomeScreen} exact/>
              <Route path='/product/:id' Component={ProductScreen}/>
            </Routes>
          </Container>
        </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
