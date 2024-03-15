import { useCallback, useState ,useEffect} from 'react'
 
import './App.css'


function App() {
  const [lenght, setLength] = useState(8)
const[numAllowed,setNumAllowed]=useState(false)
const[charAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState()

const passGenerator=()=>{
let pass="" 
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
if(numAllowed){
  str=str+"0123456789"
}
if(charAllowed){
  str += "!@#$%^&*-+=_[]()~";
}
for(let i=0;i<=lenght;i++)
{
 let char=Math.floor(Math.random()*str.length+1)

pass +=str.charAt(char)
}
setPassword(pass)
} 


useEffect(()=>{
  passGenerator()//mtlb jb b dependencies m se kuch update hoga to useEffect fr vhlega or uske andr mera passgenerator to wo utne he bar chklega
},[lenght,numAllowed,charAllowed])

return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400 '>
   <h1 className='my-3 text-center text-white'> PAssword generator</h1>  
  
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" value={password} className='outline-none w-full py-1 px-3 my-5' placeholder='password' readOnly/>
<button className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0'>copy</button>
</div>
<div className='flex test-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range" min={6} max={100} value={lenght} className='cursor-pointer' onChange={(e)=>{
      setLength(e.target.value)
    }}/>
    <label> Length : {lenght}</label>
  </div>
  <div className='flex items-center gap-x-1'>

    <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={()=>{
      setNumAllowed((prev)=> !prev)
    }} />

    <label htmlFor="numberInput">Numbers</label>
  </div>
  <div className='flex items-center gap-x-1'>

<input type="checkbox" defaultChecked={charAllowed} id="charaterInput" onChange={()=>{
  setCharAllowed((prev)=> !prev)
}} />

<label htmlFor="numberInput">Numbers</label>
</div>


</div>
   </div>
    </>
  )
}

export default App
