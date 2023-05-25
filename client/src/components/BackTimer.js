import React, { useState,useEffect } from 'react';
import '../css/style.css';
import Text from './Text';
import Chat from './Chat';



export default function BackTimer()  {

    const[backTimerSecond,setBackTimerSecond] = useState(15);
    const[backTimerMinute,setBackTimerMinute] = useState(17);
    const[backTimerHour,setBackTimerHour] = useState(20);
    const[backTimerDay,setBackTimerDay] = useState(45);

    
    
    useEffect(() => {
        if(backTimerDay !==0 || backTimerHour !==0 || backTimerMinute !==0 || backTimerSecond !==0 ){
            const interval = setInterval(() => {
                setBackTimerSecond(prev => prev - 1);
              }, 1000);
          
              return () => {
                clearInterval(interval);
              };
        }
        
      });
    
      useEffect(() => {
        if (backTimerSecond === -1) {
          setBackTimerMinute(prev => prev - 1);
          setBackTimerSecond(59);
        }
      }, [backTimerSecond]);
    
      useEffect(() => {
        if (backTimerMinute === -1) {
          setBackTimerHour(prev => prev - 1);
          setBackTimerMinute(59);
          
        }
      }, [backTimerMinute]);
    
      useEffect(() => {
        if (backTimerHour === -1) {
          setBackTimerDay(prev => prev - 1);
          setBackTimerHour(59);
        }
      }, [backTimerHour]);

   
    
        return (
            <div id='div' >
                <div><h2>YKS 2023 GERİ SAYIM - TYT - AYT - YDT</h2><br/><h4>YKS Sınav Tarihi: 17 Haziran 2023, Cumartesi </h4></div><br/><br/>
                <section id='section'><div className='secondDiv'>
                <p className='divp'>{backTimerDay}</p><i className='divi'>GÜN</i>
                </div>
                <div className='secondDiv'>
                <p className='divp'>{backTimerHour}</p><i className='divi'>SAAT</i>
                </div>
                <div className='secondDiv'>
                <p className='divp'>{backTimerMinute}</p><i className='divi'>DAKİKA</i>
                </div>
                <div className='secondDiv'>
                <p className='divps'><i className='animation'>{backTimerSecond}</i></p><i className='divi'>SANİYE</i>
                </div></section>
                {/* <section id='section2'><i>GÜN</i><i>SAAT</i><i>DAKİKA</i><i>SANİYE</i></section> */}
                <Text/>
                <Chat/>
            </div>
            
        );
    
}

 