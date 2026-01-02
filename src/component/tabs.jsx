import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab  } from '../redux/feature/searchslice';


const tabs = () => {
     const dispatch=useDispatch();
     const currenttab=useSelector(state=>state.search.activeTab);
     console.log("current tab is",currenttab)

     let tabs=['images','videos','Gifs'];
  return (
    <div className='flex justify-center gap-30 p-10 text-lg font-medium border-b-2 bg-gray-800 h-1/5 '>
    {
     tabs.map((elem,index)=>{
          return ( <button className={` ${(currenttab===elem ? "bg-gray-600 border-gray-600" : "bg-gray-400 border-gray-400")} px-4 py-2 border-2 rounded-xl uppercase cursor-pointer active:scale-95`} key={index} onClick={()=>{
              dispatch(setActiveTab(elem))
          }}>{elem}</button>
          )

     })
    }
      
    </div>
  )
}

export default tabs
