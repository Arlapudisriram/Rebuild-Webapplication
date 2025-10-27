
function Recordedmeal({title,handleDelete,id}) {
  return (
    <div className="">
      <div className='border box-border w-[400px]  flex justify-between bg-neutral-200 items-center rounded-lg mt-2 p-3'>
        <h2>{title}</h2>
        <button onClick={()=>handleDelete(id)} className="text-red-500 hover:text-red-300">Delete</button>
     </div>

    </div>
  )
}

export default Recordedmeal
