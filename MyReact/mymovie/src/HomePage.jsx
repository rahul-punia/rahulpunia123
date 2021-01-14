import React, { Component } from 'react';
import { getMovies } from './db/fakeMovieService';

class MovieApp extends Component {
    state = {movies:getMovies(),
            searchQuery:"",currentPage:1,limit:4}

     handleLike=(tmovie)=>{
         let tooglemovies=this.state.movies.map((movie)=>{
             if(movie["_id"]===tmovie["_id"]){
                 movie["liked"]=!movie["liked"];
                 return movie;
             }else{ return movie;}
         });

         this.setState({movies:tooglemovies});
     }   

     handleDelete=(dmovie)=>{
         let remMovie=this.state.movies.filter((movie)=>{
             return movie["_id"]!==dmovie["_id"];
         });

         this.setState({movies:remMovie});
     }

     handleChange=(e)=>{
        //  e.preventDefault() not work 
           const value=e.currentTarget.value;
           this.setState({searchQuery:value})
     }
     //pagination startIdx,EndIdx,movies
     handlepageChange=(pageNo)=>{
        this.setState({currentPage:pageNo});
     }

    render() { 
        let {movies,searchQuery,currentPage,limit}=this.state;
        if(searchQuery){  //React:13 may lecture time-176 
            movies=movies.filter((movie)=>{
                const ucMovie=movie["title"].toUpperCase();
                const ucsq=searchQuery.toUpperCase();
                return ucMovie.startsWith(ucsq);
            })
        }
       //Find no of pages
       const pages=movies.length/limit;
       const pagesArr=[]
       for(var i=0;i<=pages;i++){pagesArr.push(i+1);}
        //Pagination
        const sidx=(currentPage-1)*limit;
        const eidx=sidx+limit;
        movies=movies.slice(sidx,eidx);

        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col">
                    <input  type="text" value={searchQuery} onChange={this.handleChange}/>
                    <button>search</button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                           { movies.map((movie)=>{
                            return <tr>
                              <td>{movie["title"]}</td>
                             <td>{movie["genre"]["name"]}</td>
                             <td>{movie["numberInStock"]}</td>
                             <td>{movie["dailyRentalRate"]}</td>
                             <td><i class={movie['liked']===true?"fas fa-heart":"far fa-heart"} onClick={()=>{this.handleLike(movie)}}></i></td>
                             <td><button className='btn-danger' onClick={()=>{this.handleDelete(movie)}}>delete</button></td>
                             </tr>
                            })
                        }</tbody>
                    </table>
                    <ul className="pagination">
                        {
                            pagesArr.map((page)=>{
                               return <li className="page-item"><a href="javascript:;" className="page-link" onClick={()=>{this.handlepageChange(page)}}>{page}</a></li>
                            })
                        }
                    </ul>
            </div>
                </div>
        );
    }
}
 
export default MovieApp;