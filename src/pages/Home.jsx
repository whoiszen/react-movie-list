import { useState } from "react";
import { MovieCard } from "../components/MovieCard"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "Demon Slayer", release_date: "2025" },
        { id: 2, title: "John Wick", release_date: "2020" },
        { id: 3, title: "Call Me Mother", release_date: "2026" }


    ];
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit" >Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>

    );
}
export default Home;
