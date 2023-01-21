//jsx 样式控制
//1. 行内样式  - 在元素身上绑定一个style 属性即可
import "./app.css"

const style = {
    color: 'red',
    fontSize: '30px'
}

//2. 类名样式


function App() {
    return (
        <div className="App">

            <span style={{color: 'red', fontSize: '30px'}}>this is span</span>
            <span style={style}>this is span 2</span>
            <span className='active'>this is class style </span>
        </div>
    );
}

export default App;
