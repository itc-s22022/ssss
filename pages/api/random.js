export default function handler(req, res) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  res.status(200).json({ randomNumber });
}

