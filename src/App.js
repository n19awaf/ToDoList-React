import './App.css';
import TodoTable from './components/TodoTbale';



function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One'}
  ]




  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <h3>Your Todo's</h3>
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
