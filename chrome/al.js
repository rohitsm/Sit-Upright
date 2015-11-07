
// Create an event alarm
function createAlarm() {
	chrome.alarms.create("interval", {
       when: Date.now(), 
       periodInMinutes: 1}
	);
	console.log("created alarm");
}

function cancelAlarm() {
	chrome.alarms.clear("interval");
}

// Create event notifications
function createNotification(){
	chrome.notifications.create("interval", {
			type: "image",
			title: "Sit Up!",
			message: "Al says Sit Up!",
			iconUrl: "al-16px.png",
			imageUrl: "al.jpg"
		}
	);
	console.log("created notification");
}

function clearNotification(){
	chrome.notifications.clear("interval");
	console.log("clear notification");
}

createAlarm();
chrome.alarms.onAlarm.addListener(createNotification);
chrome.notifications.onClosed.addListener(clearNotification);
chrome.notifications.onClicked.addListener(clearNotification);


/**
Scarface dialogue: (To be confirmed)

"So you wanna dance, 
Frank, or do you wanna sit here and have a heart attack?"
*/