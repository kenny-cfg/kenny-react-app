import Greeting from "./Greeting"

function App() {
  return <>
    <p>HELLO WORLD</p>
    <Greeting name="kirstie" />
    <Greeting name={"Gemma" + " McDonald"} />
  </>
}

export default App
