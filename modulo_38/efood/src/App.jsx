import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle.js';
import { Footer } from './components/Footer/index.jsx';
import Router from './routes/root.jsx';
import { store } from './store/index.js';
import { Order } from './components/Order/index.jsx';

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
        <Order />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
