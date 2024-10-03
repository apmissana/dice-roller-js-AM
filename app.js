const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/roll', (req, res) => {
    const dice = [];
    for (let i = 0; i < 5; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ dice });
});

app.listen(port, () => {
    console.log(`Dice roller API running on port ${port}`);
});
