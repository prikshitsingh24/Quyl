"use client"
import TableItem from "./tableItem"
import { useStore } from "@/app/store";
import { useEffect } from "react";

export default function Table(){
    const handleStudentData = useStore((state) => state.handleStudentData);

    useEffect(()=>{
       const handleTableData=async()=>{
        const response = await fetch(`/api/getStudentData`);
        const studentData = await response.json();
        handleStudentData(studentData.data);
       }
       handleTableData()
    },[])
   

    return(
        <div className="h-full w-full mt-[52px]">
            <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr]">
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Student Name
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Cohort
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Courses
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Date joined
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Last login
                </div>
                <div className="border-b-[1px] text-[12px] text-tableHeadingColor font-bold pb-5 border-tableBorderColor">
                    Status
                </div>
            </div>
             <TableItem/>
        </div>
    )
}