// ...existing code...
import React, { useEffect, useState } from 'react'

export default function Script() {
  const [artists, setArtists] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      try {
        const res = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=coldplay')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (mounted) setArtists(data.artists || [])
      } catch (err) {
        if (mounted) setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchData()
    return () => { mounted = false }
  }, [])

  if (loading) return <div>Loading…</div>
  if (error) return <div>Error: {error}</div>
  if (!artists || artists.length === 0) return <div>No artist found</div>

  return (
    <div>
      {artists.map(artist => (
        <div key={artist.idArtist}>
          <h2>{artist.strArtist}</h2>
          <p>{artist.strGenre}</p>
          {artist.strArtistThumb && (
            <img src={artist.strArtistThumb} alt={artist.strArtist} style={{ maxWidth: 200 }} />
          )}
        </div>
      ))}
    </div>
  )
}
// ...existing code...