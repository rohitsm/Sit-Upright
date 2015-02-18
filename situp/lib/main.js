// Initialize and define elements
var self = require("sdk/self");
var tmr = require("sdk/timers");
var panels = require("sdk/panel");
var buttons = require("sdk/ui/button/toggle");
var tabs = require("sdk/tabs");

var act, de_act;

// Create a button
var button = buttons.ToggleButton({
	id: "show-panel",
	label: "Show Panel",
	icon: {
	"16": "./m_icon-16.png",
	"32": "./m_icon-32.png",
	"64": "./m_icon-64.png"
	},
	onChange: activate_al
});

// Create Panels
var panel = panels.Panel({
	width: 640,
	height: 400,
	contentURL: self.data.url("text-entry.html"),
	onHide: deactivate_al
});

// setInterval(activate_al, 1800000)

function activate_al(state) {
	
	panel.show({
		// Pass the button as arg so that panel
		// attaches itself to the button.
		position: button 	
	});
	console.log("Show Al!");
	act = tmr.setTimeout(deactivate_al, 5000);
	tmr.clearTimeout(de_act);
}

function deactivate_al() {
	panel.hide();
	de_act = tmr.setTimeout(activate_al, 1800000);
	tmr.clearTimeout(act);
	console.log("Hid Al!");
}

/**
Scarface dialogue: (To be confirmed)

"So you wanna dance, 
Frank, or do you wanna sit here and have a heart attack?"

*/