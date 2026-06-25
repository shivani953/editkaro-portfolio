const scriptURL = "https://script.google.com/macros/s/AKfycbwrCJEYyJMvPGOky_yb9G9ega52dM2DUIh6Cuzwwgx0_Ito-RZGK8v57Kvhx6HdCZGvpA/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        });

        const result = await response.text();

        if (result === "Success") {
            alert("Message Sent Successfully!");
            form.reset();
        } else {
            alert("Failed to send message.");
        }

    } catch (error) {
        console.error(error);
        alert("Error! Please try again.");
    }
});



