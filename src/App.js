import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet'
import {Message} from './components/message'
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
function App() {
  return (
    <div className="App">
     {/* <Greet name='Sabareesh' heroName='BatChild'/>
      <Greet name='Mithuuu' heroName='Skynigger'> <button>Action</button></Greet>
      <Greet name='Muruguuu' heroName='TheGOD'/>
      <Greet name ='Asteriod Destroyer' heroName='CuteNDestroyer'>
        <p>This is Childrens props</p>
        <p>Nothing Bro!!</p>
        <h2>Monkey . D . Luffy</h2>
        </Greet>  
        <Message />*/}
        {/*<ClickHandler />*/}
        <ParentComponent />
    </div>
  );
}

export default App;
