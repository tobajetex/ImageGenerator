import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './Context'

export default function Gallery() {
  const { searchInput } = useGlobalContext()

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData', searchInput],
    queryFn: () =>
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=tyMW3owT0goleC5u1AM-zS3fv1cOXl6oly0LLj1MaI8&query=${searchInput}`
      ).then((res) => res.json()),
  })
  if (!searchInput) {
    return (
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <h1>Type in animal of your choice</h1>
      </div>
    )
  }

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  if (data.results.length < 1) {
    return (
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <h1>No Result found</h1>
      </div>
    )
  }

  return (
    <div>
      {data.results.map((item) => (
        <div className="card">
          <img src={item.urls.small} />
        </div>
      ))}
    </div>
  )
}
