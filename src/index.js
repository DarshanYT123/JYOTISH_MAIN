import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Components/cart_content';
import { DownloadProvider } from './Components/download_content';
import { PoojaProvider } from './Components/pooja_content';
import { StepProvider } from './Components/Cart/StepContext';
import { BuyProvider } from './Components/buy_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BuyProvider>
  <CartProvider>
    <StepProvider>
      <DownloadProvider>
        <PoojaProvider>
          <App />
        </PoojaProvider>
      </DownloadProvider>
    </StepProvider>
  </CartProvider>
  </BuyProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
