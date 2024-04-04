import React, { useState } from 'react';
import Movie from './Movie'; 
import ImageTwo from '../Images/Blow.jpg'; 
import ImageThree from '../Images/AG.jpg'; 
import ImageFour from '../Images/Casino.jpg'; 

// Define a functional component MovieList

const MovieList = () => {

    // Define state for movies using useState hook, initialized with an array of movie objects
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Goodfellas',
            starring:'Robert De Niro, Ray Liotta, Joe Pesci',
            image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
            synopsis: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. ',
            rating: "R",
            reviews: [],
        },
        {
            id: 2,
            title: 'Blow',
            image: ImageTwo, // Using the imported image for the movie "Blow"
            starring: 'Johnny Depp, Ray Liotta',
            synopsis: "In the turbulence of the 1970s, the international drug trade underwent a fast, violent and lucrative revolution - and one ordinary American was at its center. But in just a few short years, George Jung (Johnny Depp), a high-school football star single handedly became the world's premiere importer of cocaine from Colombia's Medellin cartel, changing the course of an entire generation.",
            rating: "R",
            reviews: [],
        },
        {
            id: 3,
            title: 'American Gangster',
            image: ImageThree, // Using the imported image for the movie "American Gangster"
            starring: 'Denzel Washington, Russel Crowe',
            synopsis:'Harlem drug dealer Frank Lucas rises to power in corrupt 1970s New York, equalling and surpassing the notorious Mafia families with the reach of his empire. On the other side of the law, honest cop Richie Roberts dedicates himself to taking down `the most dangerous man walking the streets. Lucas acts with impunity, smuggling heroin into the US in the coffins of American soldiers killed in Vietnam.',
            rating: "R",
            reviews: [],
        },
        {
            id: 4,
            title: 'Casino',
            image: ImageFour, // Using the imported image for the movie "Casino"
            starring: 'Robert De Niro, Joe Pesci, Sharron Stone, Frank Vincent',
            synopsis: "In early-1970s Las Vegas, low-level mobster Sam 'Ace' Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. ",
            rating: "R",
            reviews: [],
        },
        {
            id: 5,
            title5: 'The Godfather',
            image: 'https://m.media-amazon.com/images/I/71khjV-MoOS.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            starring: 'Al Pacino, James Caan, Marlon Brando ',
            synopsis: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife.",
            rating: "R",
            reviews: [],
        },
    ]);

       
    // Render the MovieList component
    return (
        <div>
            <div className="movieContainers">
                <div className="row">
                    {/* Map over the movies array and render a Movie component for each movie */}
                    {movies.map(movie => (
                        <div className='col-4 m-2' key={movie.id}>
                            <Movie movie={movie} /> {/* Render the Movie component and pass the movie object as a prop */}
                            {/* <h2 style={{ fontSize: '30px' }}>{movie.title}</h2> Render the movie title */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList; 


