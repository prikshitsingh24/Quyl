"use client"
import { useStore } from "@/app/store";

export default function Alert(){
    const isStudentAdded = useStore((state)=>state.isStudentAdded);
   
    if(isStudentAdded){
        return(
            <div className="text-[18px] flex justify-center mt-2">
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