"use client"
import TableItem from "./tableItem"
import { useStore } from "@/app/store";
import { useEffect } from "react";

export default function Table(){
    const handleStudentData = useStore((state) => state.handleStudentData);
    const isPhone = useStore((state)=>state.isPhone);
    
    console.log(navigator.userAgent);
    useEffect(()=>{
       const handleTableData=async()=>{
        const response = await fetch(`/api/getStudentData`);
        const studentData = await response.json();
        handleStudentData(studentData.data);
       }
       handleTableData()
    },[])
    
    

    if(isPhone){
        return (
            <div className="h-full w-full mt-[52px] overflow-x-auto whitespace-nowrap">
                <div className="">
                    <div className="grid grid-cols-[3fr_3fr_6fr_3fr_3fr_1fr] min-w-max">
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
                </div>
                <div className=" h-[450px]  shadow-inner">
                <TableItem />
                </div>
            </div>
        );
        
    }

    else{
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


}