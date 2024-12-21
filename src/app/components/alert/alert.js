"use client"
import { useStore } from "@/app/store";

export default function Alert(){
    const isStudentAdded = useStore((state)=>state.isStudentAdded);
    const isStudentUpdated = useStore((state)=>state.isStudentUpdated);
    if(isStudentAdded){
        return(
            <div className="text-[14px] flex justify-center">
                <div className="bg-green-500 text-white p-2 rounded-[6px]">
                Student added successfully!!
                </div>
            </div>
        )
    }

    if(isStudentUpdated){
        return(
            <div className="text-[14px] flex justify-center">
                <div className="bg-red-500 text-white p-2 rounded-[6px]">
                Student updated successfully!!
                </div>
            </div>
        )
    }
    
    else{
        return(
            <>
            </>
        )
    }
}