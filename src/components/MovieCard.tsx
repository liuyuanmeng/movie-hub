import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const getImageUrl = (size: string, path: string) =>
    `https://image.tmdb.org/t/p/${size}/${path}`
  return (
    <Card>
      <Image
        src={getImageUrl('w500', movie.poster_path)}
        alt={`Poster for ${movie.title}`}
      />
      <Heading fontSize="2xl">{movie.title}</Heading>
    </Card>
  )
}

export default MovieCard
