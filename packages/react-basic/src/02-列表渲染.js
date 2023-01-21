//react 如何完成列表渲染？
// 技术方案  map
const songs = [
  {id:1,name:'first'},
  {id:2,name:"2nd"}
]


function App() {
  return (
    <div className="App">
      <ul>
        {songs.map(song=><li key={song.id}>{song.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
