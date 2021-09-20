import './App.scss';
import Location from './Components/Locations/Locations';
import Header from './Components/header/Header';
import {CardContextProvider, useCardContext} from './Context/LocationCardContext';


function App() {
  return (
    <div className="App">
      <Header/>
      <CardContextProvider>
        <Location/>
      </CardContextProvider>
    </div>
  );
}

export default App;
