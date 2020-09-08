import React, {useState, useContext} from 'react';
import Movie from "../../Components/Movie/Movie";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Nomination from "../../Components/Nomination/Nomination";
import { Grid, Segment, Message } from 'semantic-ui-react'
import {MAX_NOMINATIONS} from '../../Constants'
import { AppContext } from '../../Context/AppContext'
import './Dashboard.css';
import '../../Components/Nomination/Nomination.css';

const Dashboard = () => {
    // const [movies, setMovies] = useState([]);
    // const [nominations, setNomination] = useState(
    //     JSON.parse(localStorage.getItem("localStorage")) || []
    // );
    // const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useContext(AppContext);

    const { movies, loading, nominations, errorMessage } = state;

    const search = (searchValue) => {
        setState(state => ({ ...state, loading: true }));

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=6e6fccd5`)
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.Response === "True") {
                setState(state => ({ ...state, loading: false }));
                setState(state => ({ ...state, movies: jsonResponse.Search}));
                setState(state => ({ ...state, errorMessage: ''}));
            } else {
                setState(state => ({ ...state, loading: false }));
                setState(state => ({ ...state, errorMessage: jsonResponse.Error}));
            }
        })
        .catch((error) => {
            setState(state => ({ ...state, loading: false }));
            setState(state => ({ ...state, errorMessage: error.toString()}));
        });
    };

    const nominate = (movie) => {
        const newNomination = [...nominations, movie];
        setState(state => ({ ...state, nominations: newNomination}));
        localStorage.setItem("localStorage", JSON.stringify(newNomination));
    };

    const deleteNomination = (imdbID) => {
        const newNomination = nominations.filter(movie => movie.imdbID !== imdbID);
        setState(state => ({ ...state, nominations: newNomination}));
        localStorage.setItem("localStorage", JSON.stringify(newNomination));
    };

    return (
        <div className="App">
            <Grid centered columns={2} stackable >
                <Grid.Row>
                    <Grid.Column className="nomination-container" id="fonts" width={4} height={10}>
                            {nominations.length <= 0 ? (
                                <div className="nomination">No Movies Are Nominated</div>
                            ) : (
                                nominations.map((movie, index) => (
                                    <Nomination key={`${index}-${movie.Title}`} movie={movie} deleteNomination={deleteNomination}/>
                                ))
                            )}
                    </Grid.Column>

                    <Grid.Column width={12}> 
                        <Searchbar search={search} loading={loading}/>
                        {nominations.length >= MAX_NOMINATIONS &&
                            <Message
                                info
                                header='Max nominations have been made'
                                content="Roll out the red carpet!"
                            />
                        }   
                        <div>
                            {errorMessage ? (
                                <div className="errorMessage"><h1 id='fonts'>{errorMessage}</h1></div>
                            ) : (
                                movies.map((movie, index) => (
                                    <Movie key={`${index}-${movie.Title}`} movie={movie} nominate={nominate} nominations={nominations} />
                                ))
                            )}
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    );
    
}
export default Dashboard;