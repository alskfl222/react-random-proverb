import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ['피할 수 없으면 즐겨라', '행복은 습관이다, 그것을 몸에 지니라', '인생에 뜻을 세우는데 있어 늦은 때라곤 없다']
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>명언</code> 을 보는 앱을 만듭니다
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
