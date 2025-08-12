import express from 'express';

const app = express();

app.get('/health', async (req, res) => {
  try {
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    res.status(500).json({ error: 'Health check failed' });
  }
});

const PORT = 5000;
const HOST = '0.0.0.0'; 

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});