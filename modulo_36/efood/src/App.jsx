import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle.js';
import { Footer } from './components/Footer/index.jsx';
import Router from './routes/root.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
