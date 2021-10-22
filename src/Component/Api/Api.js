
import React from 'react'
import './Api.css'
import { useEffect,useState } from 'react'

   export function Api()  {
   const [result, setresult] = useState([])   
   const[count,setCount]=useState(10)

   function handleCount(){
 
        setCount(count+10)
   }
   

      useEffect(() => {
 fetch('https://api.coincap.io/v2/assets').then((res)=>res.json()).then((data)=>{
  // console.log(data)
   setresult(data)
 })
       
 }, [])

    return (
        <div>
          
           <table className='students'>
       <tbody>
   <tr>
    <th>Rank </th>
    <th>Name</th>
    <th>Price</th>
    <th>Market Cap</th>
    <th>VWAP</th>
    <th>Supply</th>
    <th>Volume</th>
    <th>Change</th>
  </tr>
  {result.data  && result.data.slice(0,count).map((item,index)=>{
     console.log(item)
     return(
      <tr key={index} >
               <td>{item.rank}</td>
               <td>{item.name}</td>
               <td>${Math.round((item.priceUsd ) * 100) / 100}</td>
               <td>${ Math.round((item.marketCapUsd ) * 100) / 100}</td>
               <td>${Math.round((item.vwap24Hr ) * 100) / 100}</td>
               <td>{ Math.round((item.supply ) * 100) / 100}</td>
               <td>${Math.round((item.volumeUsd24Hr ) * 100) / 100 }</td>
               <td>{item.changePercent24Hr}%</td>
               </tr> )
  })}
            
              </tbody>
           </table>
           <button onClick={handleCount} className="btn">View More</button>
            
        </div>
    )
}

export default Api



