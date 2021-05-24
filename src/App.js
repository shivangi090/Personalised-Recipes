import './App.css';
import AddForm from './components/AddForm';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState(false);
  return (
    <div>
      <Home onOpen={() => setForm(true)}>
        <AddForm open={form} onClose={() => setForm(false)} />
      </Home>
    </div>

  );
}
export default App;
