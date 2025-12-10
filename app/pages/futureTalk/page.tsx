'use client'
import { useState } from 'react';
import Table from '@/components/Table';

export default function Book() {
  const [modal, setModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  

  const handleClick = (day: string, period: string) => {
    setSelectedDay(day);
    setSelectedPeriod(period);
    setModal(true);
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div>
      <Table onCellClick={handleClick} />
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center"onClick={(e) => e.stopPropagation()} >
            <h2 className="text-lg font-semibold mb-3">{selectedDay+"요일"} {selectedPeriod+"교시를 선택하였습니다."}</h2>
            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}
