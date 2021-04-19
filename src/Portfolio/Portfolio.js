import React from 'react';
import Navbar from '../components/Navbar';

export const CoverArt = (props) => {
    return (
        <main className='portfoliomain'>
        <Navbar />
      <div className='portfolio'>
       <div className='section1'>
          <h1 className='title1'>Cover Art<br />Todas <br />mienten</h1>
          <div className='coverart_img1'></div>
          <div className='coverart_img2'></div>
          <div className='coverart_img3'></div>
        </div>
      </div>
    </main> 
    );
};

export const PackshotParfum = (props) => {
  return (
      <main className='portfoliomain'>
      <Navbar />
    <div className='portfolio'>
     <div className='section1'>
        <h1 className='title1'>Packshot<br />Parfum <br /></h1>
        <div className='PackshotParfum1'></div>
        <div className='PackshotParfum2'></div>
        <div className='PackshotParfum3'></div>
      </div>
    </div>
  </main> 
  );
};
