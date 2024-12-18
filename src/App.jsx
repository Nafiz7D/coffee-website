import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services';
import WhereToBuy from './components/WhereToBuy/WhereToBuy';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero></Hero>
      <Services></Services>
      <WhereToBuy></WhereToBuy>
    </div>
  );
};

export default App;