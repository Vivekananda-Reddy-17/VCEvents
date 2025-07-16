// Countdown Timer
const countdown = () => {
    const eventDate = new Date("2025-06-17T00:00:00"); // Replace with your event date
    const now = new Date();
    const diff = eventDate - now;

    // If the countdown is over
    if (diff <= 0) {
        document.querySelector("#countdown").innerHTML = "<h3>Event is live!</h3>";
        clearInterval(interval); // Stop the interval
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
};

// Start the countdown
const interval = setInterval(countdown, 1000);


document.querySelector(".navbar-toggler").addEventListener("click", function () {
    this.classList.toggle("toggled");
});

// Select the navbar
const navbar = document.querySelector(".navbar");

// Add scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // When the page is scrolled 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// background changer
// Select the hero section
const heroSection = document.querySelector(".hero-section");

// List of background images
const backgrounds = [
    "url('assets/image1.jpg')",
    "url('assets/image2.jpg')",
    "url('assets/image3.jpeg')",
    "url('assets/image4.jpeg')"
];

// Counter to track the current background
let currentIndex = 0;

// Function to change the background
function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length; // Cycle through backgrounds
    heroSection.style.background = `${backgrounds[currentIndex]} no-repeat center center/cover`;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);


document.getElementById("eventSearch").addEventListener("input", filterEvents);
document.getElementById("eventCategory").addEventListener("change", filterEvents);

function filterEvents() {
    const searchQuery = document.getElementById("eventSearch").value.toLowerCase();
    const selectedCategory = document.getElementById("eventCategory").value;

    document.querySelectorAll(".event-card").forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const category = card.dataset.category; // Add data-category attribute to each event

        const matchesSearch = title.includes(searchQuery);
        const matchesCategory = !selectedCategory || category === selectedCategory;

        card.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
}



// Registration Form Validation
document.querySelector(".registration-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();
    const event = e.target[3].value;

    if (!name || !email || !phone || !event) {
        alert("Please fill all the fields.");
        return;
    }

    // Example: Save data (replace with backend API call)
    console.log({ name, email, phone, event });
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
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
    const colors = ["#ff0", "#f00", "#0f0", "#00f", "#f0f", "#0ff", "#ffa500", "#800080"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event Modal Pop-up  
document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".modal-title").textContent = button.getAttribute("data-title");
        document.querySelector(".modal-body h4").textContent = button.getAttribute("data-title");
        document.querySelector(".modal-body p").textContent = button.getAttribute("data-description");
        const details = `
            <ul class="list-unstyled">
                <li><strong>Date:</strong> ${button.getAttribute("data-date")}</li>
                <li><strong>Venue:</strong> ${button.getAttribute("data-venue")}</li>
            </ul>
        `;
        document.querySelector(".modal-body ul").innerHTML = details;
    });
});

// Category Cards Interaction
document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.querySelector("h4").textContent.toLowerCase();
        console.log(`Filter by category: ${category}`);
        // Example: Add logic to filter events by category
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("event-calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth", // Month view
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        events: [
            {
                title: "Hackathon",
                start: "2025-02-14", // Event start date
                description: "Join us for a 24-hour coding marathon!",
            },
            {
                title: "Cultural Fest",
                start: "2025-02-20",
                end: "2025-02-22", // Multi-day event
                description: "Experience vibrant culture and performances!",
            },
            {
                title: "Sports Meet",
                start: "2025-03-01",
                description: "Participate in exciting sports events.",
            }
        ],
        datesSet: function () {
            const calendarContainer = document.querySelector("#event-calendar");
            calendarContainer.classList.add("fade-in");
            setTimeout(() => calendarContainer.classList.remove("fade-in"), 500); // Remove animation class after animation ends
        },
        eventClick: function (info) {
            // Display Event Details
            alert(`${info.event.title}\n${info.event.start.toLocaleString()}\n${info.event.extendedProps.description}`);
        },
        height: "auto",
    });

    calendar.render();
});


// Admin Dashboard Stats
const updateAdminStats = () => {
    // Replace this static data with an API call if needed
    const stats = {
        registrations: 1024,
        activeEvents: 15,
        averageRating: 4.8,
        successRate: "76%"
    };

    document.querySelectorAll(".card-body h3")[0].textContent = stats.registrations;
    document.querySelectorAll(".card-body h3")[1].textContent = stats.activeEvents;
    document.querySelectorAll(".card-body h3")[2].textContent = stats.averageRating;
    document.querySelectorAll(".card-body h3")[3].textContent = stats.successRate;
};
updateAdminStats();
