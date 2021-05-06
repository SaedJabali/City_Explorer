import React from 'react';
import Card from 'react-bootstrap/Card'

class Image extends React.Component {
    render() {
        return (
            <>
                <Card style={{ textAlign: 'center' }}>
                    <Card.Body>
                        <Card.Text>
                            {this.props.name} is located at {this.props.lat} by {this.props.lon}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.b7fcc0587ad3f0d619842195ac6209a4&center=${this.props.lat},${this.props.lon}&zoom=12`} alt='' />

                </Card>
            </>
        );
    }
}
export default Image;