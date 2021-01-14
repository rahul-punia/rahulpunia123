import React, { Component } from 'react';

import {getMovies} from './db/fakeMovieService';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>

class App extends Component {
    state = { movies:getMovies(),like:'fas fa-heart',dislike:'far fa-heart'}

    handleDelete=(dmovie)=>{
        let remmovies=this.state.movies.filter((movie)=>{
            return ( movie['title']!==dmovie['title']);
        })

        this.setState({movies:remmovies});
    }

    handleLike=(tmovie)=>{
        let tooglemovies=this.state.movies.map((movie)=>{
            if(movie["_id"]===tmovie["_id"]){
                movie["liked"]=!movie["liked"];
                return movie;
            }else{
                return movie;
            }
        })

        this.setState({movies:tooglemovies})
    }

    render() { 
        var comp=this;
        let {movies}=this.state;
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col' style={{color:"blue"}} >Title</th>
                            <th scope='col'>Genre</th>
                            <th scope='col'>Stock</th>
                            <th scope='col'>Rate</th>
                            <th scope='col'>like</th>
                            <th scope='col'>Delete</th>
                            </tr>
                    </thead>
                    <tbody>
                        {movies.map(function(movie){
                            return (
                                <tr>
                                    <th scope='row' style={{color:"blue"}} >{movie['title']}</th>
                                    <td>{movie['genre']["name"]}</td>
                                    <td>{movie['numberInStock']}</td>
                                    <td>{movie['dailyRentalRate']}</td>
                                    <td><i class={movie['liked']===true?"fas fa-heart":"far fa-heart"} onClick={()=>{comp.handleLike(movie)}}></i></td>
                                    <td><button onClick={()=>{comp.handleDelete(movie)}}>delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>    
            </React.Fragment>
        );
    }
}
 
export default App;