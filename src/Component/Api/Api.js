
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

 const formatCash = n => {
   if (n < 1e3) return n;
   if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
   if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
   if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
   if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
 };
 


 function resultReturn(){
  return result.data  && result.data.slice(0,count).map((item,index)=>{
    const {rank,name,priceUsd,marketCapUsd,vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr,symbol}=item
    const sym=symbol.toLowerCase()
    const price =Math.round((priceUsd ) * 100) / 100
    const vwap =Math.round((vwap24Hr ) * 100) / 100
    const percent=Math.round((changePercent24Hr ) * 100) / 100
    
      return(
       <tr key={index} >
                <td>{rank}</td>
               <td><img className="img" src={`https://assets.coincap.io/assets/icons/${sym}@2x.png`}  alt='logo'/> {name}</td>
                <td>${price}</td>
                <td>${ formatCash(marketCapUsd)}</td>
                <td>${vwap}</td>
                <td>{ formatCash(supply) }</td>
                <td>${formatCash(volumeUsd24Hr)}</td>
                <td>{percent}%</td>
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
                     <th>VWAP(24Hr)</th>
                     <th>Supply</th>
                     <th>Volume(24Hr)</th>
                    <th>Change(24Hr)</th>
                  </tr>
                 { resultReturn()}
            </tbody>
       </table>
            <button onClick={()=>{setCount(count+10)}} className="btn">View More</button>
                </div>
    )
}

export default Api



