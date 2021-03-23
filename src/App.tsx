import React, { useState } from 'react';

import './base/variables.css';

import { Startpage } from "./Startpage/Startpage"
import * as Settings from "./Startpage/Settings/settingsHandler"
import { MaintenancePopup } from './MaintenancePopup';

const hidePopup = Settings.getValue("hideMaintenancePopup");

const App = () => {
	const [hideMaintenancePopup, setHideMaintenancePopup] = useState(hidePopup && hidePopup === "true");

	//Apply colors
	const colorSettings = Settings.getValue("colors");
	if (colorSettings) {
		var root = document.documentElement;
		const parsedColorSettings = JSON.parse(colorSettings);
		Object.keys(parsedColorSettings).forEach(key => {
			root.style.setProperty(key, parsedColorSettings[key]);
		});
	}

	return <>
		{ !hideMaintenancePopup && <MaintenancePopup hidePopup={() => setHideMaintenancePopup(true)} />}
		<Startpage />
	</>;
}

export default App;