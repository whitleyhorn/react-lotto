import './App.css';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto title="Mini Daily" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
