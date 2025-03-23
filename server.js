const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /browser
app.use(express.static(path.join(__dirname, '.')));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dindex.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});