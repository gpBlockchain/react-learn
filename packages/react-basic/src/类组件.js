import React from 'react';

// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component{
    render() {
        return <div>this is class component</div>
    }
}

function App() {
    return (
        <div className="App">
            <HelloComponent />
        </div>
    );
}

export default App;
