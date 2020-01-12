import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component{
    static propTypes = {
        movie: PropTypes.shape({
            pttitle: PropTypes.string,
            ptdesc: PropTypes.string
        })
    }
// propTypes gets data from app.js > filters through defaultProps to check for missing data
// missing data is then filled in using default prop titles. Variables are fed into movie.js
// though the variables in the <ImportNameForMoviejs /> tag in app.js. 
    static defaultProps = {
        dp_movie:{
            dptitle: "missing title",
            dpdesc: 'Description not available',
        }
    }

    render() {
    return(
        <div>
            <h3>{this.props.dp_movie.title}</h3>
            <p>{this.props.dp_movie.desc}</p>
        </div>
    )
    }
}