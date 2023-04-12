import './App.css';
import Navbar from'./components/Nav.js'
import TextBox from './components/TextBox.js';

function App() {
  return(
    <>
      <body>
        <Navbar/>
        <div className="intro container">
          Welcome to my first React Website.
        </div>
        <TextBox title="Enter your Text for conversion."/>
      </body>
    </>
  );
}

export default App;
