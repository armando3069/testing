import React from 'react'
import './intro.css';
import Img01 from '../assets/img/02.png'

function intro() {
  return (
    <div className='i'>
      <div className='i-left'>
      <div className='i-left-wrapper'>
         <h2 className='i-intro'>Hello my name is</h2>
         <h1 className='i-name'>Mark <span>Felix</span></h1>
          <div className='title'>
            <div className='i-title-wrapper'>
             <div className='i-title-item'>Menager <span>Security</span></div>
            
            </div>
          </div>
          <div className='i-desc'>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          </div>
      </div>
      </div>

      <div className='i-right'>
       
         <div className='i-bg'></div>
         <img src={Img01} className= "i-img"/>
           
      </div>
    
    </div>
  )
}

export default intro;