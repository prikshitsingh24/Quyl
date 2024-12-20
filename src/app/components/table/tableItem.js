"use client";
import { useStore } from "@/app/store";
import Image from "next/image";

export default function TableItem({ data }) {
    const studentData = useStore((state) => state.studentData);

    if (!studentData || studentData.length === 0) {
        return (
            <div className="text-center py-4">
                <p>Fetching data...</p>
            </div>
        );
    }

    return (
        <>
            {studentData.map((student, index) => (
                <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr] items-center" key={index}>
                    <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                        {student.studentName}
                    </div>
                    <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                        {student.cohort}
                    </div>
                    <div className="border-b-[1px] text-[12px] pb-4 pt-4 border-tableBorderColor">
                        <div className="flex flex-row items-center">
                            <div className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                CBSE 9 Science
                            </div>
                            <div className="mr-20 bg-background rounded-[6px] pl-2 pr-4 pt-1 pb-1">
                                CBSE 9 Math
                            </div>
                        </div>
                    </div>
                    <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                        {student.dateJoined}
                    </div>
                    <div className="border-b-[1px] text-[12px] pb-5 pt-5 border-tableBorderColor">
                        17,Nov,2024 4:16 PM
                    </div>
                    <div className="border-b-[1px] text-[12px] pb-5 pt-5 ml-3 border-tableBorderColor">
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
