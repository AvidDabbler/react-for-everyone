/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

class MovieDetail extends Component {
  state = {
    movie: {},
  }
  
  
  async componentDidMount() {
      try {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
          const movie = await res.json();
          this.setState({
              movie,
              poster: `http://image.tmdb.org/t/p/w154/`
            });
        } catch (e) {
            console.log(e);
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.movie.title}</h1>
                <img src={`${this.state.poster}/${this.state.movie.poster_path}`} alt={this.state.movie.title}></img>
                <p>{this.state.movie.overview}</p>
            </div>
    );
  }
}

export default MovieDetail;
