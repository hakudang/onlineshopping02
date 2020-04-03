import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// IMPORT COMPONENT
import Header from './Components/Header'
import Carousel from './Components/Carousel'
import Promotion from './Components/Promotion'
import Smartphone from './Components/Smartphone'
import Laptop from './Components/Laptop'

// IMPORT DATA
import smartphones from './Data/smartphoneData'
import laptops from './Data/laptopData'

// App kế thừa Component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spInfo: smartphones,
      ltInfo: laptops
    }
  }

  render() {
    // console.log(this.state.spInfo);
    let _SmartPhones = this.state.spInfo.map((sp, index) => {
      return (
        <Smartphone
          key={index}
          id={sp.id}
          name={sp.name}
          price={sp.price}
          desc={sp.desc}
          imgUrl={sp.imgUrl}
          screen={sp.screen}
          backCamera={sp.backCamera}
          frontCamera={sp.frontCamera}
        />
      )
    })

    let _Laptops = this.state.ltInfo.map((lt, index) => {
      return (
        <Laptop
          key={index}
          id={lt.id}
          name={lt.name}
          price={lt.price}
          desc={lt.desc}
          imgUrl={lt.imgUrl}
          screen={lt.screen}
          cpu={lt.ram}
          ram={lt.ram}
        />
      )
    })

    return (
      <div className="App">
        <Header />
        <Carousel />
        <div className="bg-dark">

          {/* <!-- BEGIN SMARTPHONE --> */}
          <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
              {_SmartPhones}
            </div>
          </section>
        </div>

        <div className="bg-light">

          {/* <!-- BEGIN LAPTOP --> */}
          <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-black text-center">BEST LAPTOP</h1>
            <div className="row">
              {_Laptops}
            </div>
          </section>
        </div>

        <div className="bg-dark">
        <Promotion />
        </div>
        

      </div>
    )
  }
}

export default App;
