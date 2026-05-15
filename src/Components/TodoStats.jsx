export default function TodoStats({ todos }) {
  const completed = todos.filter(t => t.completed).length
  const progress = todos.length > 0 ? (completed / todos.length) * 100 : 0

  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-3xl font-bold text-[#6B4E71]">{Math.round(progress)}%</p>
          <p className="text-[10px] uppercase font-bold text-[#A594A9]">Progress</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-[#6B4E71]">{completed}/{todos.length}</p>
          <p className="text-[10px] uppercase font-bold text-[#A594A9]">Done</p>
        </div>
      </div>
      <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-[#6B4E71] h-full transition-all duration-700" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}