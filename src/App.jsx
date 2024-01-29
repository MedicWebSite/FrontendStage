import './App.scss';
import About from './components/about/About';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home';
import RoutController from './routes/RoutController';

function App() {
  return (
    <div>
      <RoutController/>
      <Footer /> 
      <h1>Hello</h1>
    </div>
  );
}

export default App;
