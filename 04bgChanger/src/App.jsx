import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center top-1/2 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColor("red")}
            className="rounded-full px-4 py-1 outline-none text-white shadow-lg"
            style={{ backgroundColor:"red"}}
            >Red</button>

          <button
            onClick={() => setColor("green")}
            className="rounded-full px-4 py-1 outline-none text-white shadow-lg"
            style={{ backgroundColor:"green"}}
            >Green</button>

          <button
            onClick={() => setColor("blue")}
            className="rounded-full px-4 py-1 outline-none text-white shadow-lg"
            style={{ backgroundColor:"blue"}}
            >Blue</button>

          <button
            onClick={() => setColor("yellow")}
            className="rounded-full px-4 py-1 outline-none text-black shadow-lg"
            style={{ backgroundColor:"yellow"}}
            >Yellow</button>

          <button
            onClick={() => setColor("purple")}
            className="rounded-full px-4 py-1 outline-none text-white shadow-lg"
            style={{ backgroundColor:"purple"}}
            >Purple</button>

            <button
            onClick={() => setColor("black")}
            className="rounded-full px-4 py-1 outline-none text-white shadow-lg"
            style={{ backgroundColor:"black"}}
            >Black</button>

            <button
            onClick={() => setColor("white")}
            className="rounded-full px-4 py-1 outline-none text-black shadow-lg"
            style={{ backgroundColor:"white"}}
            >White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
