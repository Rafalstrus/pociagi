import './App.css';

import {useSelector} from 'react-redux'

import Admin from './components/admin/admin.component'

import TrainSelector from './components/train-selector/train-selector.component'

function App() {
  const data = useSelector((state :any) => state.trainName)
  return (
    <div className="App">
      <TrainSelector />
      <p>Initial App Pociagi</p>
      <p>{data}</p>
    </div>
  );
}

export default App;
