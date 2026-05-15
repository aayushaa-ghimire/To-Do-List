import { useState } from 'react'

export default function TodoInput({ onAdd, onClose }) {
  const [text, setText] = useState("")
  const [cat, setCat] = useState("")

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#F3E8FF]/80 backdrop-blur-md">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <h3 className="text-2xl font-serif italic text-[#6B4E71] mb-8">What's on your mind?</h3>
        
        <div className="space-y-6">
          <input 
            autoFocus
            className="w-full border-b-2 border-[#F3E8FF] py-3 outline-none focus:border-[#D8B4FE] transition-colors text-[#6B4E71] placeholder-[#A594A9]/50 font-medium"
            placeholder="Task name..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input 
            className="w-full border-b-2 border-[#F3E8FF] py-3 outline-none focus:border-[#D8B4FE] transition-colors text-[#6B4E71] placeholder-[#A594A9]/50 font-medium"
            placeholder="Focus Area (e.g. Health, Work)"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onAdd(text, cat)}
          />
        </div>

        <div className="mt-12 flex gap-4">
          <button onClick={onClose} className="flex-1 py-4 text-[#A594A9] font-bold">Cancel</button>
          <button 
            onClick={() => onAdd(text, cat)}
            className="flex-1 py-4 bg-[#6B4E71] text-white rounded-2xl font-bold shadow-lg"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}