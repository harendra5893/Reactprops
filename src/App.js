import './App.css';
import './Invitation';
import Invitation from './Invitation';
function App() {
  return (
    <div className="App">
     <Invitation    data={{ Subject: 'Birthday party Invitation', Email: ' jaGdish@gmail.com', Name: 'jaGdish ', Text1: 'birthday party', Names: 'Ritu , Saurabh , Kartik', Place: 'Green field Avenue', From: 'JaGdish'}}/>
    </div>
  );
}

export default App;
