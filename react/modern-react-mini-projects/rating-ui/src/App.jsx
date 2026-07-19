import Rating from "./components/Rating";

const App = () => {
  return ( 
    <div>
      <Rating heading = 'How do you feel about React?' color="red" feedback= {[
        'Hate it', 'Dislike it', 'Meh', 'Like it', 'Love it'
      ]}/>
    </div>
   );
}
 
export default App;