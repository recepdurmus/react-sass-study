import React from 'react'
import Card from './Card'
import './Main.scss'
import { data } from '../../helpers/data'

const Main = () => {

console.log(data);

  return (
    <div className='card-container'>
        {data.map((item, index) => {
            return(
                <Card key={index} item={item}/>
            )   
        })}
        
    </div>
  )
}

export default Main