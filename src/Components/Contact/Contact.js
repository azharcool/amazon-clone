import React from 'react';
import './Contact.css';
import { ElfsightWidget } from 'react-elfsight-widget';
function contact() {
    return (
        <div className='main'>
        <div className='test_1'>
            <h2>
                If you a seller , For Purchase Product Strongly connect with our <span className='serv'>CSR</span>  for further Details 
            </h2 >
            <h3 style={{fontWeight:'800' }} className='small_text'>
                Amazon Customer Service For Purchasing Product
            </h3>
             
        </div>
        <ElfsightWidget widgetID='41efd4b8-961a-4c4f-bbfa-1d7cc13ac734' lazy />;
        <ElfsightWidget widgetID='56674c18-22b4-443e-bdfe-94feae9816ce' lazy />;
        <ElfsightWidget widgetID='13938c39-a2b2-42a7-bce0-7514fc75160a' lazy />;
        </div>
    );
}

export default contact;