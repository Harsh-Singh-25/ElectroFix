
    // Generates a friendly ticket ID and keeps the preview panel in sync as the person types.
    
   const form = document.getElementById("bookingForm");
const ticketIdEl = document.getElementById("ticketId");
const pNameEl = document.getElementById("pName");
const pEmailEl = document.getElementById("pEmail");
const pServiceEl = document.getElementById("pService");
const pSlotEl = document.getElementById("pSlot");
const statusEl = document.querySelector(".status-pending");
let generatedTicketId = "—";

const generateTicketId = () =>
  `EF-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`;

const updatePreview = () => {
    ticketIdEl.textContent = generatedTicketId;
    pNameEl.textContent = document.getElementById("name").value || "—";
    pEmailEl.textContent = document.getElementById("email").value || "—";
    pServiceEl.textContent = document.getElementById("service").value || "—";
    const dateValue = document.getElementById("date").value;
    const timeValue = document.getElementById("time").value;
    pSlotEl.textContent = dateValue && timeValue ? `${dateValue} ${timeValue}` : "—";
};

["name", "email", "service", "date", "time"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("input", updatePreview);
});

updatePreview();

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitBtn = form.querySelector("button");

    generatedTicketId = generateTicketId();
    ticketIdEl.textContent = generatedTicketId;
    statusEl.textContent = "Preparing ticket...";

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Booking...";

    const booking = {

        fullName: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        email: document.getElementById("email").value,

        service: document.getElementById("service").value,

        problem: document.getElementById("issue").value,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        address: document.getElementById("address").value,

        ticketId: generatedTicketId,

    };

    try {

        const response = await fetch("https://electrofix-backend-dv1u.onrender.com/api/booking", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(booking)

        });

        const data = await response.json();

        if (data.success) {
            ticketIdEl.textContent = data.booking.ticketId || "—";
            statusEl.textContent = "Sent to customer ✓";
            alert("Booking Successful! Your ticket has been sent to the customer email.");
            form.reset();
            updatePreview();
        }

        else {

            alert(data.message);

        }

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }

    submitBtn.disabled = false;

    submitBtn.innerHTML = `

<i class="fa-solid fa-ticket"></i>

Submit Service Ticket

`;

});
