"use client";
import { useRouter } from "next/navigation";
import{ useState} from "react";
import React from "react";
import logo from 'C:/Users/user/Documents/jobdam/app/logo.png'
import eye from 'C:/Users/user/Documents/jobdam/app/eye.png'
import eyes from 'C:/Users/user/Documents/jobdam/app/eyes.png'

const profile3 = () => {
    const router = useRouter();
    const [setpw, setSetpw] = useState(false);  //비밀번호 표시 여부
    const [setpw4, setSetpw4] = useState(false);  //비밀번호 확인 표시 여부
    const [setpw2, setSetpw2] = useState("");   //비밀번호 입력값
    const [setpw3, setSetpw3] = useState("");   //비밀번호 확인 입력값
    const [email, setEmail] = useState("");  //이메일 입력값
    const [code, setCode] = useState("");   //인증코드 입력값

    const sendData = async () => {
        try{
            const res = await fetch("localhost:8090/sign-up",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    code: code,
                    password: setpw2,
                }),
            });

        const data = await res.json();
        console.log(data);
        
    } catch (err) {
        console.error("Error:", err);
    }
};
    return(
        <div className="min-h-screen w-screen bg-white">
            <img src={logo.src} alt="잡담 로고" className="w-[198.6px] h-[100.3px] ml-[621px] mt-[50px]"/>
            <p className="text-black text-[Pretendard] text-[18px] ml-[420px] mt-[87.7px]">이메일</p>
            <input type="text" 
                placeholder="이메일을 입력하세요" 
                className="border-2 border-gray-100 rounded-md w-[600px] h-[56px] text-black ml-[420px] mt-[15px] bg-[#F2F4F7] pl-[16px] pr-[16px];"
                value={email}onChange={(e) => setEmail(e.target.value)}
            />
            <button className="text-[#02C551] ml-[933px] text-[15px] mt-[8px]">인증코드 발송</button>
            <button className="text-[#02C551] ml-[919px] text-[15px] mt-[8px] hidden">인증코드 재발송</button>
            <p className="text-[#D61E1E] text-[Pretendard] text-[15px] ml-[847px] mt-[8px] hidden">* 잘못된 이메일 형식입니다.</p>
            <p className="text-black text-[Pretendard] text-[18px] ml-[420px] mt-[10px]">인증코드</p>
            <input type="text" 
                placeholder="인증코드를 입력하세요" 
                className="border-2 border-gray-100 rounded-md w-[600px] h-[56px] text-black ml-[420px] mt-[15px] bg-[#F2F4F7] pl-[16px] pr-[16px];"
                value={code}onChange={(e) => setCode(e.target.value)}/>
                <p className="text-[#D61E1E] text-[Pretendard] text-[15px] ml-[864px] mt-[8px] hidden">* 인증코드가 틀렸습니다.</p>
            <p className="text-black text-[Pretendard] text-[18px] ml-[420px] mt-[36px]">비밀번호</p>
            <input type={setpw4 ? "text" : "password"} 
                placeholder="비밀번호를 입력하세요" 
                className="border-2 border-gray-100 rounded-md w-[600px] h-[56px] text-black ml-[420px] mt-[15px] bg-[#F2F4F7] pl-[16px] pr-[16px];"></input>
                <p className="text-[#D61E1E] text-[Pretendard] text-[15px] ml-[864px] mt-[8px] hidden">* 잘못된 비밀번호입니다.</p>
            <button onClick={() => setSetpw4(!setpw4)} 
                className="ml-2 text-sm text-blue-600">{setpw4 ? <img src={eyes.src}className="absolute left-[971px] top-[568px] w-[24px]"/> : <img src={eye.src}className="absolute left-[971px] top-[568px] w-[24px]"/>}
            </button>
            <button onClick={() =>{sendData; router.push("/profile2");}} className="text-white bg-[#02C551] w-[600px] h-[56px] ml-[420px] mt-[50px] rounded-md text-[24px]">확인</button>
            <p className="mt-[50px]"></p>
        </div>
    )
    
}
export default profile3