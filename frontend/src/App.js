import './App.css'

import Header from './templates/Header'
import Footer from './templates/Footer'
import Content from './templates/Content'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
          <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    
  );
}

export default App;
