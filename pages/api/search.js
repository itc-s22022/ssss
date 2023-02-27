// pages/api/search.js
import unsplash from '../../lib/unsplash'

export default async function handler(req, res) {
  const { query: { q } } = req
  const result = await unsplash.search.photos(q)
  const json = await result.json()
  res.status(200).json(json)
}

