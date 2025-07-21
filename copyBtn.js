
///////copyBtn///
document.addEventListener("DOMContentLoaded", function () {
 // Select all elements with class 'copyBtn'
 document.querySelectorAll(".copyBtn").forEach((element) => {
     // Find all input fields inside each element
     element.querySelectorAll("input").forEach((input) => {
         // Create a copy button
         const copyButton = document.createElement("button");
         copyButton.innerText = "Copy";
         copyButton.style.marginLeft = "5px";
copyButton.classList="rounded-lg p-2 border";
                 
         // When button is clicked, copy input value
         copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value).then(() => {
      alert("Copied to clipboard!");
  }).catch((err) => {
      console.error("Failed to copy: ", err);
  });
});

input.parentNode.insertBefore(copyButton, input.nextSibling);
});
 });
});

////
/////endCopy btn///
///
