import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ELecReducer } from './Reducer';
import {fetchelectronics} from './Action'

export default function Electronic() {
    const [state,setstate] = useState('');
    const data = useSelector((state)=> state.product);
    console.log(data);

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products/category/electronics")
    //     .then((res)=>{
    //         return res.json()
    //         .then((data)=>{
    //             setstate(dispatch(ELecReducer(data))); 
    //         })
    //     })
    // })

    useEffect(()=>{
      dispatch(fetchelectronics());
    },[dispatch]);


  return (
    <div>
      <h1>Electronic</h1>
    {
        data.map((el,i)=>{
          return <li>{el.title}</li>
        })
    }
    hello
    </div>
  )
}
