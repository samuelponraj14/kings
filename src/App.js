import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Home from './components/home/Home';
import About from './components/about/About';
import Live from './components/feed/Live';
import Publications from './components/publications/Publications';
import Contact from './components/contact/Contact';
import tt_pub_logo from './assets/tt-pub-logo.jpg'
import ut_pub_logo from './assets/ut-pub-logo.jpg'
import kk_pub_logo from './assets/kk-pub-logo.jpg'

function App() {


  const data = [
    {
      id: "1",
      key: "1",
      title: "Tamil Times",
      img: tt_pub_logo
    },
    {
      id: "2",
      key: "2",
      title: "Ungal Thozhan",
      img: ut_pub_logo
    },
    {
      id: "3",
      key: "3",
      title: "King of Kings",
      img: kk_pub_logo
    },
  ]

  const pdfs = {
    1: './monthly-issues/jan.pdf',
    2: './monthly-issues/feb.pdf',
    3: './monthly-issues/mar.pdf',
    4: './monthly-issues/apr.pdf',
    5: './monthly-issues/may.pdf',
    6: './monthly-issues/jun.pdf',
    7: './monthly-issues/jul.pdf',
    8: './monthly-issues/aug.pdf',
    9: './monthly-issues/sep.pdf',
    10: './monthly-issues/oct.pdf',
    11: './monthly-issues/nov.pdf',
    12: './monthly-issues/dec.pdf',
  }

  const tariffs = {
    tt: './tariffs/tamiltimes_tariff.jpg',
  }


  return (
      <div>
        <Nav />
        <Home />
        <Live />
        <Publications 
          data={data}
          pdfs={pdfs}
          tariffs={tariffs}
          />
        <About />
        <Contact />
      </div>
  );
}

export default App;
