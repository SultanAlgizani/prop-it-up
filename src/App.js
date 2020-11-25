import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">

      <PersonCard firstName="Sultan" lastName="Algizani" age={24} hairColor="dark brown" />

      <PersonCard firstName="mohammed" lastName="baraas" age={23} hairColor="black" />

      <PersonCard firstName="Juwana" lastName="Algizani" age={5} hairColor="brown" />

      <PersonCard firstName="will" lastName="goode" age={35} hairColor="brown" />

    </div>
  );
}


export default App;
