import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Recordedmeal from "./Recordedmeal"

const firebaseUrl='https://rebuild-fe1f3-default-rtdb.asia-southeast1.firebasedatabase.app/'
function Mealrecord() {

  let mealInput=useRef()
  let excerciseInput=useRef()
  let[todos,setTodos]=useState([])
  let[formStatus,setFormStatus]=useState(false)
  let[appStatus,setAppStatus]=useState(false)

   function handlelog(){
     setFormStatus(true)
    let meal= mealInput.current.value;
     axios.post(`${firebaseUrl}todos.json`,{
      title:meal 
     }).then(()=>{
      setFormStatus(false)
        fetchTodos()
     },[])

   }
   function handlesubmit(){
     setAppStatus(true)
    let exercise = excerciseInput.current.value;
     axios.post(`${firebaseUrl}todos.json`,{
      title:exercise
     }).then(()=>{
      setAppStatus(false)
        fetchTodos()
     },[])

   }

   function fetchTodos(){
    axios.get(`${firebaseUrl}todos.json`).then(todos=>{
      //  console.log(todos.data)
      let tempTodos=[];
       for(let key in todos.data){
       let todo={
         id:key,
         ...todos.data[key]
        }
         tempTodos.push(todo)
       }
      //  console.log(tempTodos)
       setTodos(tempTodos)
    })
  
  }
    function handleDelete(id){
      // console.log('Delete function is called buddy')
   axios.delete(`${firebaseUrl}todos/${id}.json`).then(()=>{
      fetchTodos();
   })
 
    }

   useEffect(()=>{
    fetchTodos()
  },[])

  return (
    <>
    
      <div className="w-screen h-screen bg-yellow-50">
          <div className="w-[600px] rounded-3xl border bg-neutral-100 p-4  mx-auto mt-12">
          <h1 className="text-4xl  text-center font-bold">Log your Diet meals and Excercises</h1>
          <p className="mt-6 text-center text-neutral-600">Log your diet meals and exercises easily to stay on track with your health goals. This app helps you record what you eat, monitor your workouts, and track your daily progress.Review your progress & do improve your fitness. </p>
          <div className="flex gap-2 items-center">
              <input ref={mealInput} className=" w-[400px] mt-6 border p-3 focus:outline-none" type="text"  placeholder="Add Meal i.e [Day-1] Meal : boiled veggies" />
            <button onClick={handlelog} className="bg-violet-200 px-3 py-2 mt-4 text-violet-600 rounded-md ">{!formStatus ? "Add Meal" : "Submitting..."}</button> 
          </div>

          <div className="flex gap-2 items-center" >
              <input ref={excerciseInput} className=" w-[400px] mt-6 border p-3 focus:outline-none" type="text"  placeholder="Add Exercise i.e [Day-1] Exercise : Jumping jacks " />
            <button onClick={handlesubmit} className="bg-violet-200 px-3 py-2 mt-4 text-violet-600 rounded-md ">{!appStatus ? "Add Exercise" : "Submitting..."}</button> 

          </div>

          <div>
            {todos.map(todo=><Recordedmeal handleDelete={handleDelete} id={todo.id} key={todo.id} title ={todo.title}  /> )}
          </div>

      </div>
      </div>

      
 
    </>
  )
}

export default Mealrecord
