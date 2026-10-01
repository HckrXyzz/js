const attachLinks = () => {
    [...document.getElementsByTagName("a")].forEach(element => {
        element.onclick = () => {
            let redirectAddress = element.getAttribute('redirect');
            let redirectWindow = window.open(redirectAddress);
            setTimeout(() => {
                redirectWindow.close();
            }, 5000);
            return false;
        }
    });
}

document.addEventListener("DOMContentLoaded", attachLinks, false);
