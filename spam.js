/* Here is actual script to paste into console */
// Written By MacTavish. Discord Tag: MacTavish#8517
// i < NumberOfTimesYouWantToSendMessage
for (var i = 0; i < 5; i++) {

	// Set the message
	document.querySelectorAll("._2S1VP")[1].innerHTML = "Type Whatever you want to send";

	// Emulate the fucking input event so whatsapp generates the send button
	var event = document.createEvent('Event');
	event.initEvent('input', true, true);
	document.querySelectorAll("._2S1VP")[1].dispatchEvent(event);

	// Finally fuck the send
	document.querySelector("._35EW6 [data-icon = send]").parentNode.click();
}
