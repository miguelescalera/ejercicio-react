import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5000,
      plazo: 3

    };
  }
  onSliderValue = value => {
    this.setState({ value });
  };

  onSliderPlazo = plazo => {
      this.setState({ plazo });
  };

  otroChange= event =>{
      this.setState({ value:event.target.value})
  }
  onPlazo= event =>{
    this.setState({ plazo:event.target.value})
}

  render() {
    return (
      <div className="App">
        <div className="header-gradient">
          <div className="sub-gradient">
            <h1 className="title">Simulá tu crédito</h1>

              {/*////////////////  MONTO TOTAL //////////////*/}

              <div className="cuadro">
                <h4>MONTO TOTAL</h4>
                <div className="borde">
                  <h2>$</h2>
                  <input className="inp" type={Number} value={this.state.value} onChange={this.otroChange}/>
                </div>
              </div>
              <div className="slider">
                <Slider
                  marks={{
                    5000:"$"+Intl.NumberFormat().format(5000),
                    50000:"$"+Intl.NumberFormat().format(50000)
                  }}
                  min={5000}
                  max={50000}
                  value={this.state.value}
                  onChange={this.onSliderValue}
                  railStyle={{
                    height: 5
                  }}
                  handleStyle={{
                    height: 17,
                    width: 17,
                    border: 0
                  }}
                />
              </div>
              
                {/*///////////////// PLAZO //////////////////////*/}

              <div className="cuadro">
                <h4>PLAZO</h4>
                <div className="borde">
                  <input type={Number} className="plazo" value={this.state.plazo} onChange={this.onPlazo} />
                </div>
              </div>
              <div className="slider">
                <Slider
                  marks={{
                    3:3,
                    24:24
                  }}
                  min={3}
                  max={24}
                  value={this.state.plazo}
                  onChange={this.onSliderPlazo}
                  railStyle={{
                    height: 5
                  }}
                  handleStyle={{
                    height: 17,
                    width: 17,
                    border: 0
                  }}
                />
              </div>
              
              {/*///////////////// Botones //////////////////////*/}

              <div className="cuotas">
                <p>CUOTA FIJA POR MES</p>
                <p className="cuotaNumero">${(this.state.value / this.state.plazo).toFixed(2)}</p>
              </div>
              <div className="botones">
              <button className="btn1">OBTENÉ CRÉDITO</button>
              <button className="btn2">VER DETALLE DE CUOTAS</button>
              </div>

          </div>
        </div>
      </div>
    );
  }
}
export default App

