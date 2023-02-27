export default async function handler(req, res) {
  const query = req.query.q;

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=10`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const data = await response.json();

  res.status(200).json({ results: data.results });
}

