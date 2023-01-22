import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import SecondPage from "./components/SecondPage/SecondPage"
import Areas from "./components/Areas/Areas"
import Clients from "./components/Clients/Clients"
import Team from "./components/team/Team"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondPage />
      <Areas />
      <Clients />
      <Team />
    </div>
  )
}

export default App