import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImportNameForMoviejs from './movie.js'
// import Movie from './movie.js';

const movies = [
    {
        id:1,
        title: 'Star Wars',
        another: "Wedding Crashers",
        desc: "You know Star Wars..."
    },{
        id:2,
        title: 'Spiderman',
        another: 'Knocked Up'
    },{
        id:3,
        title: 'Fast and the Furious',
        another: 'Get Out'
    },{
        id:4,
        title: 'Bad Santa',
        another: '1917'
    }
]; // you can use map to iterate through the list of objects

class App extends Component {
    componentDidMount(){
        const data = fetch('https://api.themoviedb.org/3/movie/550?api_key=85fd4cc1a9da722b211bc427eb9eac3d')
            .then(data => console.log(data))
        console.log(data);
    }

    render(){return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header> 

            {movies.map(m=>(
                <ImportNameForMoviejs key={m.id} dp_movie={m} />
            ))}
        </div>
    );}
}


export default App;