import './App.css';
import HamBurgerMenu from './components/HamBurgerMenu';
import ButtonA from './components/ButtonA'

function App() {
  return (
    <div className="App">
      
      <div className="section2">
      <h1>Find Your Dream Job with Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </p>
      <ButtonA/>
      </div>
      <div className="section1">
      <HamBurgerMenu />
      </div>
    </div>
  );
}

export default App;
