import React from 'react'
export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Texto/> 
      
      <Cabecalho/>
    </div>
  )
}
export function Cabecalho(){
  return(
    <div style={{backgroundColor:'black',height:'10vh'}}>

    </div>
  )
}
export function Texto(){
  return(
  <div style={{paddingBottom:'20vh',paddingTop:'20vh'}}>
    <h1 style={{color:'red'}}>
    Ein Volk, ein Reich, ein Führer
    </h1>
  </div>)
}