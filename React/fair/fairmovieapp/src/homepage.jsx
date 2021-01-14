import React, { Component } from 'react';
import {getMovies} from "./db/fakeMovieService";
import {getGenres} from "./db/fakeGenreService";
import axios from "axios";

class MoviePage extends Component {
    state = { movies:getMovies(),
              searchQuery:"",
              currentPage:1,
              limit:4 ,
            genres:[{_id:"1",name:"All Genres"}]}
 handleDelete=(deleteMovie)=>{
     let remainingMovies=this.state.movies.filter((movie)=>{
         return movie["_id"]!==deleteMovie["_id"]
     })
     this.setState({movies:remainingMovies})
 }

 toggleLike=(toggleMovie)=>{
     let togglemovies=this.state.movies.map((movie)=>{
         if(movie["_id"]===toggleMovie["_id"]){
             movie["liked"]=!movie["liked"];
             return movie;
         }else{
             return movie;
         }
     })
     this.setState({movies:togglemovies});
 }

 handleChange=(e)=>{
    let value=e.currentTarget.value;
    this.setState({searchQuery:value});
 }
handlePageChange=(page)=>{
  this.setState({currentPage:page});
}

//life cylcle method
// componentDidMount(){
//     let NewGArray=[...this.state.genres,...getGenres()];
//     this.setState({
//         genres:NewGArray
//     })
// }

// life cycle methods
componentDidMount() {
    // /request 
    // genres update 
    // array destructuring
    // console.log(getGenres());
    // console.log(...getGenres());
    let resP = axios.get("/getGenres"); //promise
    resP.then( (res)=>  {     //use arrow function else give undefined
      console.log(res.data);
      let NewGArray = [...this.state.genres, ...res.data.genres];
      // console.log(NewGArray);
      this.setState({
        genres: NewGArray
      })
    });
  }

    render() { 
        let {movies,searchQuery,currentPage,limit,genres}=this.state;
        if(searchQuery){
            movies=movies.filter((movie)=>{
              let uCaseMovie=movie["title"].toUpperCase();
              let uCaseSQuery=searchQuery.toUpperCase();
              return uCaseMovie.startsWith(uCaseSQuery);
            })
            // this.setState({movies:searchMovies});
        } 
      //To print movies on page
      let pagelength=movies.length/limit;
      let pagesArr=[];
      for(let i=1;i<=pagelength;i++){
          pagesArr.push(i);
      }
      //Pagination=>movies,starting index,ending index
      let sIndex=(currentPage-1)*limit;
      let eIndex=sIndex+limit;

      movies=movies.slice(sIndex,eIndex);

        return (
         <div className="row">
        <div className="col-3">
            <ul className="list-group">
        {genres.map((genre)=>{
            return <li className="list-group-item">{genre.name}</li>
        })}
            </ul>
        </div>
        <div className="col">
            <input type="text" value={searchQuery} onChange={this.handleChange}></input>
            <button>search</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Name</th>
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
                              <td><i class={movie["liked"]===true?"fas fa-heart":"far fa-heart"} onClick={()=>{this.toggleLike(movie)}} ></i></td>
                              <td><button className="btn btn-danger" onClick={()=>{this.handleDelete(movie)}}>Delete</button></td>
                          </tr>;
                      })  
                    }
                </tbody>
            </table>
            <ul className="pagination">
                {pagesArr.map((page)=>{
                    return <li className="page-item"><a href="javascript:;'" className="page-link" onClick={()=>{this.handlePageChange(page)}}>{page}</a></li>})}
            </ul>
        </div>  
        </div>);
    }
}
 
export default MoviePage;