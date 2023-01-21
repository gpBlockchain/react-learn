//1. 识别常规 变量
//2. 识别func
//3. 三元表达式
const name = 'cai teacher'
const getAge = ()=> {
  return 18;
}
const flag = true

function App() {
  return (
    <div className="App">
        {name}
      {getAge()}
      {flag?'true':'false'}
    </div>
  );
}

export default App;
