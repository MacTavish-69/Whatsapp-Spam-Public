// Written By MacTavish. Discord Tag: MacTavish#8517

/* Here is actual script to paste into console */

// for (let loopVariable = 0; loopVariable < NumberOfTimesYouWantToSendMessage; loopVariable++)
for (let i = 0; i < 5; i++) {

	// Get the Message Box
	let message_box = document.querySelectorAll("._13NKt")[1];

	// Set the message
	message_box.innerHTML = "Type Whatever you want to send";

	// Emulate the fucking input event so whatsapp generates the send button
	let event = document.createEvent('Event');
	event.initEvent('input', true, true);
	message_box.dispatchEvent(event);

	// get the Send button
	let btn_send = document.querySelector("._4sWnG");

	// Finally emulate the click and send the message
	btn_send.click();
}
