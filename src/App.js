
import './App.css';
import Dictionary from "./Dictionary";
import { GoMarkGithub} from 'react-icons/go'

function App() {
  return (
     <div className="App">
       <div className="container">
      <header className="App-header">
       Dictionary
       </header>
       <main>
       <Dictionary  defaultWord= "hello"/>
       </main>
       </div>
       <footer className="App-footer">
         <small> coded by Kairika
           <a href="https://github.com/kairikadev/dictionary-app"> <GoMarkGithub />
           </a>
           </small>
       </footer>
      </div>
  );
}

export default App;
