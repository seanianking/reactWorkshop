import './App.css';
import 'bulma/css/bulma.min.css';
import Counter from './components/Counter';
import { Columns } from 'react-bulma-components';
import JokesForm from './components/JokeAPI/JokesForm';

function App() {
  return (
    <div className="App">
      <Columns>
        <Columns.Column>
          <Counter />
        </Columns.Column>
        <Columns.Column>
          <JokesForm />
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
