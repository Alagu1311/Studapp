import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';



function Base() {
    const navigate=useNavigate("")
   
  return (
    <div>
      <div className='btngrp'>
          <Button variant="contained"className='btnal' onClick={()=>navigate("/Render")}>Student</Button>
          <Button variant="contained"className='btnal' onClick={()=>navigate("/Addstud")}>Addstudent</Button>
        <Button variant="contained" className='btnal' onClick={()=>navigate("/Editstud")}>Editstudent</Button>
        </div>
         
          
      
      </div>
  )
}

export default Base;