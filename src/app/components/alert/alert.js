"use client"
import { useStore } from "@/app/store";

export default function Alert(){
    const isStudentAdded = useStore((state)=>state.isStudentAdded);
    const isStudentUpdated = useStore((state)=>state.isStudentUpdated);
    const isStudentDeleted = useStore((state)=>state.isStudentDeleted);
    if(isStudentAdded){
        return(
            <div className="text-[14px] flex justify-center">
                <div className="bg-green-500 text-white p-2 rounded-[6px]">
                Student data added successfully!!
                </div>
            </div>
        )
    }

    if(isStudentUpdated){
        return(
            <div className="text-[14px] flex justify-center">
                <div className="bg-blue-500 text-white p-2 rounded-[6px]">
                Student data updated successfully!!
                </div>
            </div>
        )
    }

    if(isStudentDeleted){
        return(
            <div className="text-[14px] flex justify-center">
            <div className="bg-red-500 text-white p-2 rounded-[6px]">
            Student data deleted successfully!!
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