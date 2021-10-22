
import React from 'react'
import './Api.css'
import { useEffect,useState } from 'react'

   export function Api()  {
   const [result, setresult] = useState([])   
   const[count,setCount]=useState(10)
 

useEffect(() => {
 fetch('https://api.coincap.io/v2/assets').then((res)=>res.json()).then((data)=>{
   setresult(data)
 })     
 },[])

 function resultReturn(){
  return result.data  && result.data.slice(0,count).map((item,index)=>{
    const {rank,name,priceUsd,marketCapUsd,vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr,symbol}=item
    const sym=symbol.toLowerCase()
    const price =Math.round((priceUsd ) * 100) / 100
    const vwap =Math.round((vwap24Hr ) * 100) / 100
      return(
       <tr key={index} >
                <td>{rank}</td>
               <td><img className="img" src={`https://assets.coincap.io/assets/icons/${sym}@2x.png`}  alt='logo'/> {name}</td>
                <td>${price}</td>
                <td>${ Math.round((marketCapUsd ) * 100) / 100}</td>
                <td>${vwap}</td>
                <td>{ Math.round((supply ) * 100) / 100}</td>
                <td>${Math.round((volumeUsd24Hr ) * 100) / 100 }</td>
                <td>{changePercent24Hr}%</td>
                </tr> 
            )}
                )
                     }
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
                 { resultReturn()}
            </tbody>
       </table>
            <button onClick={()=>{setCount(count+10)}} className="btn">View More</button>
                </div>
    )
}

export default Api



