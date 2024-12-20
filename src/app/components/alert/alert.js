"use client"
import { useStore } from "@/app/store";

export default function Alert(){
    const isStudentAdded = useStore((state)=>state.isStudentAdded);
   
    if(isStudentAdded){
        return(
            <div className="text-[14px] flex justify-center">
                <div className="bg-green-500 text-white p-2 rounded-[6px]">
                Student added successfully!!
                </div>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}