import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookieConsentProvider } from '@use-cookie-consent/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<CookieConsentProvider>
		<BrowserRouter basename="/schweineaim-reloaded">
			<App />
		</BrowserRouter>
	</CookieConsentProvider>
);
