// 条件渲染
// 技术方案: 三元表达式(常用) 逻辑&& 运算
//1。 三元表达式- 满足条件才渲染
//2. && 逻辑运算
const flag = true

function App() {
    return (
        <div className="App">
            {flag ?
                (<div>
                    <span>this is span</span>
                </div>) : null}
            {true && <span>this is span is true</span>}
            {false && <span>this is span is false</span>}

        </div>
    );
}

export default App;
