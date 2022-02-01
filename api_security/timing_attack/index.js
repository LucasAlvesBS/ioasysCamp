const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db');
const app = express();
const port = 3000;

app.use(express.json()); // req.body

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");

        res.json(allUsers.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const selectUser = await pool.query("SELECT * FROM users WHERE user_id = $1", 
        [id]);

        res.json(selectUser.rows[0]);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.post("/users", async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            "INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING *", 
            [email, hashedPassword]
        );

        res.json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.post("/users/login", async (req, res) => {
    const { email, password } = req.body;
    const validEmail = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);
    if (!(validEmail.rows.length === 0)) {
        const validPassword = await bcrypt.compare(password, validEmail.rows[0].user_password);
        if (validPassword) 
            return res.status(200).json("Sucess!");
        return res.status(401).json("Invalid credentials");
    } else {
        const fakePassword = await bcrypt.hash(password, 10); // Avoiding the timing attack
        return res.status(401).json("Invalid credentials");
    }   
});

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params; // WHERE
        const { email, password } = req.body; // SET
        const hashedPassword = await bcrypt.hash(password, 10);
        const upadateUser = await pool.query("UPDATE users SET user_email = $1, user_password = $2 WHERE user_id = $3", 
        [email, hashedPassword, id]);

        res.json("User was updated");
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query(`DELETE FROM
        users WHERE user_id = $1`, [id]);

        res.json("User was sucessfully deleted!")
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});