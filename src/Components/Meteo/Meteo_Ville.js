import React from 'react';

class Api extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        hums :[],
        ids: []
      };
    }
  
    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=75001,fr&appid=eac817d99f3b002a46e6ce605f81b49d")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result['main']);
                    console.log(result['weather']);
                    this.setState({
                        isLoaded: true,
                        items: result['main'],
                        hums: result['weather'],
                        ids: result['id'],
                    });
                },
                (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                    });
                }
            )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        const Kelvin = 273.15;
        const Celcius = items.temp - Kelvin;
        return (
        <div className="App-temp">
            <p className="App-texte-temp01">Température : 
              <br/>
              <b className="App-numero-temp">{items.temp} K </b> ( <b className="App-numero-temp">{Number.parseFloat(Celcius).toFixed(2)} °C</b> )</p>
              <br/>
              <br/>
            <p className="App-texte-temp02">Humidité : 
              <br/>
            <b className="App-numero-temp">{items.humidity} %</b>
            </p>
        </div>
        );
      }
    } 
}

export default Api;