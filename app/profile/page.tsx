"use client";
import { useRouter } from "next/navigation";
const profile = () => {
    const router = useRouter();
    return(
        
        <div className="min-h-screen w-screen bg-white">
            <button onClick={() => {router.push("../")}} className="text-white bg-red-800 w-[90px] h-[40px]">홈으로</button>
            <p className="text-black">여기는 실예약 페이지입니다.</p>
        </div>
    )
}



export default profile