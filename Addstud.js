import React, { useContext, useState } from 'react'
import { studcontxt } from './App';
import Render from './Render';


function Addstud() {
    const {stud,setstud}=useContext(studcontxt)
    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Dep, setDep] = useState("");
    const [sem, setSem] = useState("");
    const [Cgpa, setCgpa] = useState("");
    const Handleaddstud  = () => {
        const obj = {
            id,
            Name,
            Dep,
            sem,
            Cgpa
           
        }
        setstud([...stud,obj])
        
        setid("")
        setName("")
        setDep("")
        setSem("")
        setCgpa("")
    }
   
    return (
        <div>
          

      
        
      <h3 className='texalcen'>Add-student</h3>
          <form className='inputgrp'>
              <input type='text' placeholder='Enter ID' className='inmar' value={id} onChange={(e)=>setid(e.target.value)}></input>Id<br></br>
              <input type='text' placeholder='Enter Name' className='inmar' value={Name} onChange={(e)=>setName(e.target.value)}></input>Name<br></br>
              <input type='text' placeholder='Enter Deapartment' className='inmar' value={Dep} onChange={(e)=>setDep(e.target.value)}></input >Enter Department<br></br>
              <input type='text' placeholder='Enter Semester'  className='inmar' value={sem} onChange={(e)=>setSem(e.target.value)}></input>Enter Semester<br></br>
              <input type='text' placeholder='Enter CGPA'  className='inmar'value={Cgpa} onChange={(e)=>setCgpa(e.target.value)}></input>Enter CGPA<br></br>
              <div>
                  <button className='addbtn'onClick={Handleaddstud}>Addstudent</button>
                </div>
                
            </form>
            <Render/>
          
          </div>
       
            
            
  )
}

export default Addstud;