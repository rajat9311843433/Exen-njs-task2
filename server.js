const express = require('express');
const app = express();
const port = 3000;

// Route for /number
app.get('/number', (req, res) => {
    res.send('Go to /number/:num to check if :num is/isn’t a palindrome');
});

// Route for /number/:num
app.get('/number/:num', (req, res) => {
    const numStr = req.params.num;

    // Check if the number is negative
    if (parseInt(numStr) < 0) {
        res.send('The number is negative');
        return;
    }

    // Check if the number is a palindrome
    const isPalindrome = numStr === numStr.split('').reverse().join('');
    if (isPalindrome) {
        res.send(`${numStr} is a palindrome`);
    } else {
        res.send(`${numStr} isn't a palindrome`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
