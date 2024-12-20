import React from 'react';
import Work1 from '../Pages/work pages/Work1';
import Work2 from '../Pages/work pages/Work2';
import Work3 from '../Pages/work pages/Work3';
import Quotepage from '../Commoncomponents/Quote/Quotepage';
import Footer from '../Commoncomponents/Footer/Footer';

function Workpages() {
  return (
    <div>
         <Work1/>
         <Work2/> 
         <Work3/>
         <Quotepage/>
         <Footer/>
    </div>
  );
}

export default Workpages;
