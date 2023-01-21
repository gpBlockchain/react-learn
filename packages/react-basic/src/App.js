import React from 'react';

// 类组件的创建和渲染
// 创建
function Hello(){
    function clickDemo() {
        console.log('hello')
    }

    return <div onClick={clickDemo}>Hello</div>
}

function App() {
    return (
        <div className="App">
            <Hello />
        </div>
    );
}

export default App;
