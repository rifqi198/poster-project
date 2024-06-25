import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchMovieById, similarMovie } from "../../service/api";
import Card from "../../components/MovieCard/Card";
import './Movies.css'

const Movies = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        const getMovie = async () => {
            try {
                const data = await fetchMovieById(id)
                const sim = await similarMovie(id)
                setMovie(data)
                setSimilar(sim.results)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            } 
        }

        getMovie()
    }, [id])

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    if (!movie) {
        return <div>No movie data found</div>;
    }

    function backdrop(){
        var w = window.innerWidth
        var backdropUrl
        if(w >= 768){
            backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
        }else{
            backdropUrl = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        }
        return backdropUrl
    }
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    return(
        <div className="movie-page" key={movie.id}>
            <div className="movie-image-container" style={{backgroundImage: `url(${backdrop()})`}}>
                {/* <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="movie-backdrop"/> */}
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster"/>
            </div>
            <div className="movie-detail">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-description">{movie.overview}</p>
                <h4>Genres</h4>
                <div className="movie-genre-container">
                    {movie.genres.map(genre => <span className="movie-genres" key={genre.id}>{genre.name}</span>)}
                </div>
                <h3 className="movie-similar-text">Similar Movies</h3>
            </div>
            <div className="movie-similar">
                <Slider {...settings} className="movie-slider">
                    {similar.map(movies => (
                        <Card key={movies.id} movie={movies}/>
                    ))}
                </Slider>
            </div>
            
        </div>
    )
}

export default Movies