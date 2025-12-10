'use client'
import { useState } from 'react'

export default function Test() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleClick = (name: string) => {
    setSelected(name)
    setOpen(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        {['A', 'B', 'C', 'D', 'E', 'F'].map((item) => (
          <div
            key={item}
            onClick={() => handleClick(item)}
            className="w-24 h-24 flex items-center justify-center bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl shadow-lg w-80 text-center"
          >
            <h2 className="text-lg font-semibold mb-3">선택한 칸</h2>
            <p className="text-gray-600 mb-4">{selected} 칸을 클릭했습니다.</p>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}