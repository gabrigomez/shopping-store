import './App.css'
import Header from './templates/Header'
import Footer from './templates/Footer'
import Content from './templates/Content'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './utils/materialUI.jsx'



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
