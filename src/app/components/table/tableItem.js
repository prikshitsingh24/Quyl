"use client";
import { dateConversion } from "@/app/helper/dateConversion";
import { useStore } from "@/app/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TableItem() {
    const studentData = useStore((state) => state.studentData);
    const router = useRouter();
    const isPhone = useStore((state)=>state.isPhone);

    const handleTableItemClick=(stduentId)=>{
        router.push(`/updateStudent/${stduentId}`)
    }

    if (!studentData || studentData.length === 0) {
        return (
            <div className="text-center py-4">
                <p>Fetching data...</p>
            </div>
        );
    }

    if(isPhone){   
        return (
          <>
                {studentData.map((student, index) => (
                    <div
                        className="grid grid-cols-[3fr_2.7fr_6fr_2.4fr_3fr_1fr] items-center cursor-pointer min-w-max"
                        key={index}
                        onClick={() => handleTableItemClick(student.studentId)}
                    >
                        <div className="border-b-[1px] pl-2 text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {student.studentName}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {student.cohort}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                            <div className="flex flex-row items-center">
                                <div className="mr-2 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                    CBSE 9 Science
                                </div>
                                <div className="bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                    CBSE 9 Math
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {dateConversion(student.dateJoined)}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            17,Nov,2024 4:16 PM
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-[25.3px] pl-6 border-tableBorderColor">
                            {student.status === "Online" ? (
                                <Image src={"/statusGreen.png"} alt="statusGreen" width={14.4} height={14} />
                            ) : (
                                <Image src={"/statusRed.png"} alt="statusRed" width={14.4} height={14} />
                            )}
                        </div>
                    </div>
                ))}
               
               </>
        
    );
    }
    
    else{
        return (
            <div className="w-full h-[360px] shadow-inner screen-1024:h-[420px] screen-1280:h-[440px] screen-1440:h-[520px] screen-1512:h-[550px] screen-1680:h-[660px] screen-1920:h-[690px] screen-2560:h-[950px] overflow-y-scroll">
                {studentData.map((student, index) => (
                    <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr] items-center cursor-pointer" key={index} onClick={()=>handleTableItemClick(student.studentId)}>
                        <div className="border-b-[1px] pl-2 text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {student.studentName}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {student.cohort}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                            <div className="flex flex-row items-center">
                                <div className="mr-10 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                    CBSE 9 Science
                                </div>
                                <div className=" bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                    CBSE 9 Math
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            {dateConversion(student.dateJoined)}
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                            17,Nov,2024 4:16 PM
                        </div>
                        <div className="border-b-[1px] text-[12px] pb-5 pt-[25.5px] pl-6 border-tableBorderColor">
                            {student.status === "Online" ? (
                                <Image src={"/statusGreen.png"} alt="statusGreen" width={14.4} height={14} />
                            ) : (
                                <Image src={"/statusRed.png"} alt="statusRed" width={14.4} height={14} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
