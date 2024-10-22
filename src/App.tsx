import Card from "./components/Card"
import './App.css'

function App() {

  return (
    <body className="bg-background h-full">

      <header className="flex justify-end h-20 p-20">

        <p className="text-white font-bold text-4xl">
          HTL Dornbirn 5bWI
        </p>
      </header>

      <div className="">
        <Card name="Jonas" description="Schüler" imageUrl="https://picsum.photos/200/300" />
        <Card name="Diego" description="Schüler" imageUrl="https://picsum.photos/200/300" />

      </div>
    </body >
  )
}

export default App
