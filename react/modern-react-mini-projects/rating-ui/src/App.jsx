import Rating from "./components/Rating";

const App = () => {
  const name = 'Arusha';
  return ( 
    <div>
      <h1>Hello {name}</h1>
      <Rating />
    </div>
   );
}
 
export default App;