import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App/App';
import './index.css';
import { GlobalStyle } from 'components/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
