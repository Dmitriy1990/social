import React from 'react';
import { About } from './components/About';
import { Censor } from './components/Censor';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Invest } from './components/Invest';
import { Properties } from './components/Properties';
import { Slider } from './components/Slider';
import { Page } from './components/UI/Page';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Page>
     <Header/>
     <Slider/>
     <About/>
     <Properties/>
     <Censor/>
     <Invest/>
     <Footer/>
     <GlobalStyle/>
    </Page>
  );
}

export default App;
