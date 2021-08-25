import './App.css';

import Admin from './components/admin/admin.component'
import {Departures} from './components/departures/departures.component'
import TrainSelector from './components/train-selector/train-selector.component'

import {useSelector} from 'react-redux'



function App() {
  const adminPage = false
  const TrainData = useSelector((state :any)=>(state.trainData))
  return (
    <div className="App">
      {console.log(TrainData)}
      {(adminPage)?<Admin /> :
      (Object.keys(TrainData).length === 0)?
      <TrainSelector
      />:
      <Departures />
      }
      
    </div>
  );
}
/*

Suspense react
*/
export default App;
