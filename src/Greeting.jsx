const Greeting = ({ salutation = "Hello", name }) => {
  name = name + "!"
  return <p>{salutation} FROM {name}!</p>
}

export default Greeting;