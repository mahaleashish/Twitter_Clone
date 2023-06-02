import React, { useEffect, useState } from 'react';
import styles from './trending.module.css';
import data from '../../../../trending.json'

function Trending() {
     const[trendingData,setTrendingData]=useState([]);
  
       const trending=trendingData.slice(0,10);
    useEffect(()=>{
      setTrendingData(data)
    },[])

  return (
    <div className={styles.trendingcontainer}>
      <h2 style={{margin:"5%"}}>What’s happening</h2>
        {
          trending.map((item)=>
            
            <div className={styles.data}>
              <p style={{fontSize:"20px", marginLeft:"15px",fontWeight:"bold"}}>{item.hashtag}</p>
              <p style={{marginLeft:"15px"}}><span>{item.count}  </span>Tweets</p>
            </div>
           )
        } 
        <h3 className={styles.lastbtn}>Show more</h3>
      
    </div>
  )
}

export default Trending