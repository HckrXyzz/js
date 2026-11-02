function copyValue(buttonElement, payloadText) {
          navigator.clipboard
            .writeText(payloadText)
            .then(() => {
              const defaultText = buttonElement.innerText;
              buttonElement.innerText = "Copied!";
              buttonElement.style.backgroundColor = "#dcfce7";
              buttonElement.style.color = "#15803d";

              setTimeout(() => {
                buttonElement.innerText = defaultText;
                buttonElement.style.backgroundColor = "";
                buttonElement.style.color = "";
              }, 1200);
            })
            .catch((err) => {
              console.error("Could not copy string text value: ", err);
            });
        }
