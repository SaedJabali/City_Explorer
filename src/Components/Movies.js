import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Movie extends Component {
    render() {
        return (
            <div>
                {this.props.movieData.map(movie =>
                    <Card className='card' style={{ width: '18rem', fontSize: '24px', }}>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bolder' }}>{movie.title}</Card.Title>
                        <Card.Body>
                        <Card.Img width='30%' variant="top" src={`https://image.tmdb.org/t/p/original${movie.image}`} />
                        </Card.Body>
                        <Card.Text>
                            {`Released on  ${movie.released_date}`}
                        </Card.Text>
                        <hr />

                    </Card>

                )}

            </div>
        );
    }
}

export default Movie;