import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/settings.jsx';
import { MantineProvider } from '@mantine/core';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MantineProvider>
			<SettingsProvider>
				<App />
			</SettingsProvider>
		</MantineProvider>
	</React.StrictMode >
);