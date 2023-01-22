import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import SecondPage from "./components/SecondPage/SecondPage"
import Areas from "./components/Areas/Areas"
import Clients from "./components/Clients/Clients"
import Team from "./components/team/Team"
import FAQ from "./components/faq/FAQ"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondPage />
      <Areas />
      <Clients />
      <Team />
      <FAQ />
    </div>
  )
}

export default App