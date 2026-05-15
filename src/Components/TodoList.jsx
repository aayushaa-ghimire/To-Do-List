export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto py-6">
      {todos.map((todo) => (
        <div 
          key={todo.id}
          
          className={`group flex items-center gap-6 p-6 md:p-8 rounded-[2rem] transition-all duration-500 border ${
            todo.completed 
            ? 'bg-[#F9F4F9]/30 border-transparent opacity-50' 
            : 'bg-white border-[#F3E8FF] shadow-sm hover:shadow-xl hover:shadow-purple-100/30'
          }`}
        >
          <button 
            onClick={() => onToggle(todo.id)}
            className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all shrink-0 ${
              todo.completed ? 'bg-[#6B4E71] border-[#6B4E71] text-white' : 'border-[#F3E8FF] bg-white hover:border-[#6B4E71]'
            }`}
          >
            {todo.completed ? '✓' : ''}
          </button>

          <div className="flex-1 min-w-0" onClick={() => onToggle(todo.id)}>
            <div className="flex items-center gap-3 mb-1">
              <span className="px-3 py-0.5 bg-[#6B4E71] text-[#ffffff] text-[9px] font-black uppercase tracking-widest rounded-full">
                {todo.category}
              </span>
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
                {todo.time}
              </span>
            </div>
            
            <p className={`text-xl md:text-2xl font-bold tracking-tight truncate ${
              todo.completed ? 'line-through text-gray-300' : 'text-[#4A3B4E]'
            }`}>
              {todo.text}
            </p>
          </div>

          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => onDelete(todo.id)}
              className="text-[10px] font-black text-rose-300 hover:text-rose-500 tracking-widest"
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}


