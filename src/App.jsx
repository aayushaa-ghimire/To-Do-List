import { useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoStats from './Components/TodoStats'

export default function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All')
  const [showInput, setShowInput] = useState(false)

  const categories = ['All', ...new Set(todos.map(t => t.category))]

  const addTodo = (text, category) => {
    if (!text.trim()) return
    const newTodo = {
      id: Date.now(),
      text,
      category: category || 'General',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      completed: false 
    }
    setTodos([newTodo, ...todos])
    setShowInput(false)
  }

  const filteredTodos = filter === 'All' ? todos : todos.filter(t => t.category === filter)

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex flex-col lg:flex-row font-['Plus_Jakarta_Sans',sans-serif] text-[#4A3B4E]">
      
      <aside className="w-full lg:w-[350px] lg:h-screen bg-[#F3E8FF] p-8 lg:p-12 lg:fixed lg:left-0 lg:top-0 z-30 overflow-y-auto">
        <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-8 h-full">
          
          <div className="flex-1 lg:w-full">
            <h1 className="text-4xl lg:text-6xl font-serif italic text-[#6B4E71] mb-2">My Day.</h1>
            <p className="text-[#A594A9] uppercase tracking-[0.2em] text-[10px] font-bold mb-8">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </p>
            
            <div className="hidden lg:block">
              <TodoStats todos={todos} />
            </div>

            <nav className="mt-8">
              <p className="text-[10px] font-black text-[#6B4E71]/40 uppercase tracking-[0.2em] mb-4 hidden lg:block">Focus Areas</p>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
                      filter === cat 
                      ? 'bg-[#6B4E71] text-white border-[#6B4E71] shadow-lg shadow-purple-200' 
                      : 'bg-white/50 text-[#6B4E71] border-transparent hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="fixed bottom-6 right-6 lg:relative lg:bottom-0 lg:right-0 lg:w-full z-40">
            <button 
              onClick={() => setShowInput(true)}
              className="w-16 h-16 lg:w-full lg:h-auto lg:py-5 bg-gradient-to-br from-[#6B4E71] to-[#8E7294] text-white rounded-full lg:rounded-2xl font-bold shadow-2xl hover:shadow-purple-300 transition-all flex items-center justify-center text-3xl lg:text-base"
            >
              <span className="lg:hidden">+</span>
              <span className="hidden lg:inline">+ CREATE TASK</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-purple-200/30 lg:ml-[350px] p-6 lg:p-20">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-end mb-12 border-b border-black/5 pb-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#4A3B4E]">
                {filter === 'All' ? 'Upcoming' : filter}
              </h2>
              <p className="text-sm opacity-40 mt-2 font-medium">You have {filteredTodos.length} tasks today</p>
            </div>
            <div className="hidden lg:block text-[#A594A9] text-xs font-bold tracking-[0.5em]">Notes App</div>
          </header>

          <TodoList 
            todos={filteredTodos} 
            onToggle={(id) => setTodos(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t))} 
            onDelete={(id) => setTodos(todos.filter(t => t.id !== id))} 
          />
        </div>
      </main>

      {showInput && <TodoInput onAdd={addTodo} onClose={() => setShowInput(false)} />}
    </div>
  )
}