import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

// import Poster from '.movie';
const poster = 'http://image.tmdb.org/t/p/w154/';
const backdrop = 'http://image.tmdb.org/t/p/w1280/';
class MovieDetail extends PureComponent {
  state = {
    movie: {},
  }
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${backdrop}/${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${poster}/${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-szie: cover; 
`;

const MovieInfo = styled.div` 
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div{
    margin-left: 20px;
  }
  img{
    position:relative;
    top: -5rem;
  }
`;
