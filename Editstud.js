import React, { useContext, useEffect, useState } from 'react'
import Render from './Render';
import { studcontxt } from './App';



function Editstud() {
  const {stud,setstud,studId}=useContext(studcontxt)
   const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Dep, setDep] = useState("");
    const [sem, setSem] = useState("");
  const [Cgpa, setCgpa] = useState("");
   
  useEffect(() => {
    const studentdata = stud.find(student => student.id === studId)
    if (studentdata) {
      setid(studentdata.id)
      setName(studentdata.Name)
      setDep(studentdata.Dep)
      setSem(studentdata.sem)
       setCgpa(studentdata.Cgpa)
    }
    
  },[studId,stud])
  const editstudent = () => {
    const finalres=stud.findIndex((student)=>student.id!==studId)
    const obj = {
      id,
      Name,
      Dep,
      sem,
      Cgpa
    }
    stud[finalres] = obj;
    setstud([...stud,obj])
}
  return (

    <div>

      <h3 className='texalcen'>Edit student</h3>
       <Render/>
      

          
           <form className='inputgrp'>
              <input type='text' placeholder='Enter ID' className='inmar' value={id} onChange={(e)=>setid(e.target.value)}></input>Id<br></br>
              <input type='text' placeholder='Enter Name' className='inmar' value={Name} onChange={(e)=>setName(e.target.value)}></input>Name<br></br>
              <input type='text' placeholder='Enter Deapartment' className='inmar' value={Dep} onChange={(e)=>setDep(e.target.value)}></input >Enter Department<br></br>
              <input type='text' placeholder='Enter Semester'  className='inmar' value={sem} onChange={(e)=>setSem(e.target.value)}></input>Enter Semester<br></br>
              <input type='text' placeholder='Enter CGPA'  className='inmar'value={Cgpa} onChange={(e)=>setCgpa(e.target.value)}></input>Enter CGPA<br></br>
              <div>
                  <button className='addbtn'onClick={editstudent}>Editstudent</button>
              </div>
      </form>
     
          
    </div>
  )
}

export default Editstud