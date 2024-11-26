import './App.css'
import PeopleContainer from "./components/PeopleContainer.tsx"

function App() {

  return (
    <body className="bg-background h-full">

      <header className="flex justify-center h-20 p-20 md:justify-end lg:justify-end">
        <p className="text-white text-5xl font-headFont md:text-7xl lg:text-7xl">
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
