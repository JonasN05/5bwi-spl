import './App.css'
import PeopleContainer from "./components/PeopleContainer.tsx"

function App() {

  return (
    <body className="bg-background h-full">

      <header className="flex justify-end h-20 p-20">
        <p className="text-white text-7xl font-headFont">
          HTL Dornbirn 5bWI
        </p>
      </header>

      <div className="w-full p-20">
        <PeopleContainer />

      </div>
    </body >
  )
}

export default App
