// Show a greeting alert when the page loads
window.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to our website!");
    showTime(); // Start clock
  });
  
  // Optional: Display a live clock in the header
  function showTime() {
    const clock = document.createElement('div');
    clock.style.marginTop = '10px';
    clock.style.fontSize = '1.2rem';
    clock.style.color = '#ccc';
  
    document.querySelector('header').appendChild(clock);
  
    setInterval(() => {
      const now = new Date();
      clock.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }, 1000);
  }
  
  // Simple interaction: alert when user clicks "Contact" section
  document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.addEventListener('click', () => {
        alert("Feel free to reach out to us via email!");
      });
    }
  });
  