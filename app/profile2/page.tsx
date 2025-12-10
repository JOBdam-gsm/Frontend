"use client";
import { useRouter } from "next/navigation";
import{ useState } from "react";
import logo from 'C:/Users/user/Documents/jobdam/app/logo.png'
import eye from 'C:/Users/user/Documents/jobdam/app/eye.png'
import eyes from 'C:/Users/user/Documents/jobdam/app/eyes.png'
const profile2 = () => {
    const [setpw, setSetpw] = useState(false);  //비밀번호 표시 여부
    const router = useRouter();
    const [email, setEmail] = useState(""); //이메일 입력값
    const [setpw2, setSetpw2] = useState("");   //비밀번호 입력값
    return(
        
            <main className="font-[pretendard]">
                <img src={logo.src} 
                    alt="잡담 로고" 
                    className="w-[198.6px] h-[100.3px] ml-[621px] mt-[50px]"
                />
                <p className="text-black text-[Pretendard] text-[18px] ml-[420px] mt-[87.7px]">이메일</p>
                <input 
                    type="text" 
                    placeholder="이메일을 입력하세요" 
                    className="border-2 border-gray-100 rounded-md w-[600px] h-[56px] text-black ml-[420px] mt-[15px] bg-[#F2F4F7] pl-[16px] pr-[16px];"
                    value={email}onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="text-[#D61E1E] text-[Pretendard] text-[15px] ml-[847px] mt-[8px] hidden">* 잘못된 이메일 형식입니다.</p>
                <p className="text-black text-[Pretendard] text-[18px] ml-[420px] mt-[36px]">비밀번호</p>
                <div className="flex items-center ">
                    <input type={setpw ? "text" : "password"} 
                        placeholder="비밀번호를 입력하세요" 
                        className="border-2 border-gray-100 rounded-md w-[600px] h-[56px] text-black bg-[#F2F4F7] ml-[420px] mt-[15px] pl-[16px] pr-[16px]" 
                        value={setpw2}onChange={(e)=>setSetpw2(e.target.value)}
                    />
                    <button onClick={() => setSetpw(!setpw)} 
                        className="ml-2 text-sm text-blue-600">{setpw ? <img src={eyes.src}className="absolute left-[971px] top-[432px] w-[24px]"/> : <img src={eye.src}className="absolute left-[971px] top-[432px] w-[24px]"/>}
                    </button>
                </div>
                <p className="text-[#D61E1E] text-[Pretendard] text-[15px] ml-[864px] mt-[8px] hidden">* 잘못된 비밀번호입니다.</p>
                <button onClick={()=> {router.push("/profile4")}} className="text-[#02C551] ml-[934px] text-[15px] mt-[9px]">비밀번호 변경</button>
                <button className="text-white bg-[#02C551] w-[600px] h-[56px] ml-[420px] mt-[50px] rounded-md text-[24px]">확인</button>
                <p className="text-[#95979D] text-[15px] ">gd</p>
                <button onClick={()=> {router.push("/profile3")}} className ="text-[#02C551] mt-[11px] ml-[420px] text-[15px]">회원가입</button>
                <br/>
            </main>
    )
    
}
export default profile2