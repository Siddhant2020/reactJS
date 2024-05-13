import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"red"}}
            onClick={() => setColor("red")}
            >
              Red
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"yellow"}}
            onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"green"}}
            onClick={() => setColor("green")}
            >
              Green
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"olive"}}
            onClick={() => setColor("olive")}
            >
              Olive
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"maroon"}}
            onClick={() => setColor("maroon")}
            >
              Maroon
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"purple"}}
            onClick={() => setColor("purple")}
            >
              Purple
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"aqua"}}
            onClick={() => setColor("aqua")}
            >
              Aqua
            </button>
            
            <button className="outline-none px-4 rounded-full shadow-lg" 
            style={{backgroundColor:"black", color:"white"}}
            onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
