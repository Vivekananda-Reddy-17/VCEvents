

// Registration Form Validation
document.querySelector(".registration-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target[0].value.trim();
  const email = e.target[1].value.trim();
  const phone = e.target[2].value.trim();
  const event = e.target[3].value;

  if (!name || !email || !phone || !event) {
    // alert("Please fill all the fields.");
    return;
  }

  // Example: Save data (replace with backend API call)
  console.log({ name, email, phone, event });
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  successModal.show();

  // Trigger confetti animation
  triggerConfetti();
  e.target.reset();
});

// Function to trigger confetti animation
function triggerConfetti() {
  const confettiContainer = document.getElementById("confettiContainer");
  confettiContainer.innerHTML = ""; // Clear existing confetti

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.setProperty("--confetti-color", getRandomColor());
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);
  }
}

// Generate random confetti color
function getRandomColor() {
  const colors = [
    "#ff0",
    "#f00",
    "#0f0",
    "#00f",
    "#f0f",
    "#0ff",
    "#ffa500",
    "#800080",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

