import React from 'react';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ImgCard from './Components/Image'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: '',
      data: '',
      show: false,
      text: ''
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      this.setState({ show: true });
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.selectedLocation}&format=json`;
      let select = await axios.get(url);
      this.setState({
        data: select.data[0],
        show: true
      })
    } catch (error) {
      console.log('error')
      this.setState({ show: false, text: 'ERROR, pleas enter a valid city name' });
    }
  }
  updateselectedLocation = (event) => {
    event.preventDefault();
    this.setState({ selectedLocation: event.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Body
          getLocation={this.getLocation}
          updateselectedLocation={this.updateselectedLocation}
        />
        {(this.state.show) ?
          <>
            <ImgCard lat={this.state.data.lat} lon={this.state.data.lon} name={this.state.data.display_name} />
          </>
          : <p style={{ textAlign: 'center' }} >{this.state.text}</p>}
        <Footer />
      </div>
    )
  }
}
export default App