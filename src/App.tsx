import Counter from './apps/Counter/Counter'
import Todo from './apps/Todo/Todo'

function App() {
  return (
    <div className="container">
      <h4 className="text-center mt-4">
        Hello Dear Geek! Please read README.MD file for the instructions.
      </h4>
      <Todo />
      <Counter />
    </div>
  )
}

export default App
