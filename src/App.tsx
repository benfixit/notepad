import { Notes } from './Notes/Notes';
import { Editor } from './Editor/Editor';
import { NoteProvider } from './store/NoteContext';
import { ThemeProvider } from './store/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <NoteProvider>
      <main className='app'>
        <section className='notes'>
          <Notes />
        </section>
        <section className='editor'>
          <Editor />
        </section>
      </main>
    </NoteProvider>
    </ThemeProvider>
  )
}

export default App
