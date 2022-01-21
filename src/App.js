import logo from './logo.svg';
import './App.css';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto title="Lotto" numBalls={6} maxNum={40} />
      <Lotto title="Mini Daily" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
