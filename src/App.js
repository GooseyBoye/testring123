
import logo from './logo.svg';
//import './App.css';

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button>I'm a button</button>
    
  );
}

function App() {
  const name = "Zuriel"
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
  return (
    <div className="App">
      <h1>Hello <p style = { {backgroundColor: "red"} }>{name}!</p></h1>
      <MyButton />
      <p>More text being returned </p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

      
    </div>
  );
}

export default App;

// function Example() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Open Modal</button>
//       {showModal && (
//         <div style={{ background: 'white', padding: 20 }}>
//           <h3>Modal Title</h3>
//           <p>Modal Content</p>
//           <button onClick={() => setShowModal(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Example;