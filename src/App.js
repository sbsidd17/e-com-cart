
import './App.css';
import CreateNotes from './components/CreateNotes';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <nav>
            <h1>Notes Manager</h1>
      </nav>
      <CreateNotes />
      <NotesList />
    </div>
  );
}

export default App;
