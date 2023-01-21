// 有一个状态type 1 2 3
// 1-> h1
// 2 -> h2
// 3 -> h3
// 原则： 模版中的逻辑尽量保持精简
// 复杂的分支逻辑收敛为一个函数

const getHtag = (type) =>{
    if(type === 1){
        return <h1>this is h1</h1>
    }
    if(type === 2){
        return <h2>this is h2 </h2>
    }
}

function App() {
    return (
        <div className="App">
            {getHtag(1)}
            {getHtag(2)}

        </div>
    );
}

export default App;
