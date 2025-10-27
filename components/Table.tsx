'use client'
import { useEffect, useState } from 'react';
import { Axios } from 'axios';

export default function Table() {
  const today = new Date();
  const today4 = new Date();
  const days = ['월', '화', '수', '목', '금'];
  const periods = ['1', '2', '3', '4', '5', '6', '7'];
  const [timetable, setTimetable] = useState<Record<string, string[]>>({});
  const axios = new Axios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const KEY = "ae1991d7e10440a9b108a90727b78a44";
        const ATPT_OFCDC_SC_CODE = "F10";
        const SD_SCHUL_CODE = "7380292";
        const GRADE = "1";
        const CLASS_NM = "1";
          const AY = today.getFullYear().toString();
          const month = (today.getMonth() + 1).toString().padStart(2, "0");
          const day = today.getDate().toString().padStart(2, "0");
        const TI_FROM_YMD = `${AY}${month}${day}`;
        today4.setDate(today4.getDate()+4);
          const month4 = (today4.getMonth()+1).toString().padStart(2, "0");
          const day4 = today4.getDate().toString().padStart(2,"0");
        const TI_TO_YMD = `${today4.getFullYear()}${month4}${day4}`;
        
        const API_URL = `https://open.neis.go.kr/hub/hisTimetable?KEY=${KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${SD_SCHUL_CODE}&GRADE=${GRADE}&CLASS_NM=${CLASS_NM}&AY=${AY}&TI_FROM_YMD=${TI_FROM_YMD}&TI_TO_YMD=${TI_TO_YMD}`;
        
        console.log("API 호출 시작");

        const res: any = await axios.get(API_URL);
        const data = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
        console.log("API 응답 데이터:", data);

        const rows = data?.hisTimetable?.[1]?.row || [];
        const temp: Record<string, string[]> = {};
        days.forEach((day) => (temp[day] = Array(7).fill("")));

        rows.forEach((r: any) => {
          const date = r.ALL_TI_YMD;
          const subject = r.ITRT_CNTNT;
          const period = parseInt(r.PERIO); // PERIO가 올바른 키
          const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
          const weekday = new Date(formattedDate).getDay();

          if (weekday >= 1 && weekday <= 5 && period <= 7) {
            const dayName = days[weekday - 1];
            temp[dayName][period - 1] = subject;
          }
        });

        console.log("정리된 시간표 데이터:", temp);
        setTimetable(temp);
      } catch (err) {
        console.error("불러오기 실패:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "12px" }}>교시</th>
            {days.map((day) => (
              <th key={day} style={{ border: "1px solid #ccc", padding: "12px" }}>{day}요일</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((period, idx) => (
            <tr key={period}>
              <th style={{ border: "1px solid #ccc", padding: "12px" }}>
                {period}교시
              </th>
              {days.map((day) => (
                <td key={day + period} style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  minWidth: "80px",
                  textAlign: "center",
                }}>
                  {timetable[day]?.[idx] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
