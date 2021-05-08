import React from 'react';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ImgCard from './Components/Image';
import Weather from './Components/Weather';
import Movie from './Components/Movies';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: '',
      data: '',
      show: false,
      text: '',
      weatherData: [],
      movieData: []
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    try {
      this.setState({ show: true });
      let url = `https:/us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.selectedLocation}&format=json`;
      let select = await axios.get(url);
      this.setState({
        show: true,
        data: select.data[0],
      })
    } catch (error) {
      console.log('error');
      console.log(error.response);
      this.setState({ show: false, text: 'ERROR, please enter a valid city name' });
    }
    this.getWeatherData();
    this.getMovieData();
  }
  updateselectedLocation = (event) => {
    event.preventDefault();
    this.setState({ selectedLocation: event.target.value });
  };

  getWeatherData = async () => {
    const WeatherUrl = `${process.env.REACT_APP_PORT}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    const weatherReq = await axios.get(WeatherUrl);
    console.log(`first ${this.state.selectedLocation}`);
    this.setState({
      weatherData: weatherReq.data,
      show: true
    })
  };

  getMovieData = async () => {
    const movieUrl = `${process.env.REACT_APP_PORT}/movies?query=${this.state.selectedLocation}`;
    const movieReq = await axios.get(movieUrl);
    console.log(`second ${this.state.selectedLocation}`);
    this.setState({
      movieData: movieReq.data,
      show: true
    })
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
        <Weather
          weatherStatus={this.state.weatherData}
        />

        <Movie
          movieData={this.state.movieData}
        />

        <Footer />
      </div>
    )
  }
}
export default App