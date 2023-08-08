// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return <HelmetProvider><Layout /></HelmetProvider>
}

export default App;
