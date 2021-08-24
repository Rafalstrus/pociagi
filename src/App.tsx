import './App.css';

import Admin from './components/admin/admin.component'

import TrainSelector from './components/train-selector/train-selector.component'

function App() {
  const adminPage = false
  return (
    <div className="App">
      {(adminPage)?<Admin /> :
      <TrainSelector />
      }
      
    </div>
  );
}
/*

Suspense react
*/
export default App;
