
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Event Registration Form</h2>

        <form action="/register" method="POST">

            Name:<br>
            <input type="text" name="name" required>
            <br><br>

            Email:<br>
            <input type="email" name="email" required>
            <br><br>

            Phone Number:<br>
            <input type="tel" name="phone" required>
            <br><br>

            Event Date:<br>
            <input type="date" name="eventDate" required>
            <br><br>

            <button type="submit">Register</button>

        </form>
    `);
});

app.post("/register", (req, res) => {
    const { name, email, phone, eventDate } = req.body;
    const registrationDate = new Date().toLocaleDateString();

    res.send(`
        <h2>Registration Successful!</h2>
        Name: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Event Date: ${eventDate}<br>
        Registration Date: ${registrationDate}
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
