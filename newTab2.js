document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    const link = event.target.closest('a[redirect]');
    if (!link) return;

    event.preventDefault();
    const redirectAddress = link.getAttribute('redirect');

    const redirectWindow = window.open(redirectAddress, '_blank');
    if (redirectWindow) {
      setTimeout(() => {
        if (!redirectWindow.closed) {
          redirectWindow.close();
        }
      }, 10000);
    }
  });
});
