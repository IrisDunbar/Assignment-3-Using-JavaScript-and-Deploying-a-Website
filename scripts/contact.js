// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById('submit-button');
const entireContactForm = document.getElementById('change-button');
const contactHeader2 = document.getElementById('change-on-submit');

function submittedMessage() {
/* ideally am attempting to not use innerHTML where possible, and think this is a more efficient and effective way to display the message, while still having similar styling. */
    contactHeader2.innerText = 'Thank you for your message';
    entireContactForm.innerHTML = "<a href='../index.html' class='fake-button'>Home</a>";
}

submitButton.addEventListener('click', submittedMessage);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.