import React, { Component } from 'react';
import {getMovies} from "./db/fakeMovieService"
class MoviesPage extends Component {
    state = { 
        movies:getMovies()
     }
    render() { 
        let {movies}=this.state;
        return ( 
            <div className="row">
                <div className="col-3"></div>
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Like</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map((movie)=>{
                                    return <tr>
                                        <td>{movie["title"]}</td>
                                        <td>{movie["genre"]["name"]}</td>
                                        <td>{movie["numberInStock"]}</td>
                                        <td>{movie["dailyRentalRate"]}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default MoviesPage;
