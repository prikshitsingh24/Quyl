"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddStudentButton(){
    const router = useRouter();

    const handleAddNewStudentClick=()=>{
        router.push("/addNewStudent");
    }
    return(
        <div className="bg-dropdownBackground flex flex-row cursor-pointer justify-evenly items-center rounded-[6px] h-[36px] w-[197px]" onClick={handleAddNewStudentClick}>
        <Image src={"/plus.png"} className="h-[20px] w-[20px]" width={20} height={20}  alt="plusIcon"></Image>
        <div className="font-bold text-dropdownText ">
          Add new student
        </div>
        </div>
    )
}