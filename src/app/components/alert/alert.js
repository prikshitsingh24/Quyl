"use client"
import { useStore } from "@/app/store";

export default function Alert(){
    const isStudentAdded = useStore((state)=>state.isStudentAdded);
    const isStudentUpdated = useStore((state)=>state.isStudentUpdated);
    const isStudentDeleted = useStore((state)=>state.isStudentDeleted);
    const isPhone = useStore((state)=>state.isPhone);
    if(isStudentAdded){
        return(
          <>
          {isPhone?(
             <div className="fixed top-10 left-0 right-0 text-[14px] flex flex-row transition-transform duration-300 z-20 ease-in-out transform translate-y-full justify-center items-center">
              <div className="bg-green-500 text-white p-2 rounded-[6px] shadow-xl">
              Student data added successfully!!
              </div>
          </div>
          ):(
            <div className="text-[14px] flex justify-center">
            <div className="bg-green-500 text-white p-2 rounded-[6px]">
            Student data added successfully!!
            </div>
        </div>
          )}
          </>
        )
    }

    if(isStudentUpdated){
        return(
            <>
            {isPhone?(
               <div className="fixed top-10 left-0 right-0 text-[14px] flex flex-row transition-transform duration-300 z-20 ease-in-out transform translate-y-full justify-center items-center">
                <div className="bg-blue-500 text-white p-2 rounded-[6px] shadow-xl">
                Student data updated successfully!!
                </div>
            </div>
            ):(
              <div className="text-[14px] flex justify-center">
              <div className="bg-blue-500 text-white p-2 rounded-[6px]">
              Student data updated successfully!!
              </div>
          </div>
            )}
            </>
        )
    }

    if(isStudentDeleted){
        return(
            <>
            {isPhone?(
               <div className="fixed top-10 left-0 right-0 text-[14px] flex flex-row transition-transform duration-300 z-20 ease-in-out transform translate-y-full justify-center items-center">
                <div className="bg-red-500 text-white p-2 rounded-[6px] shadow-xl">
                Student data deleted successfully!!
                </div>
            </div>
            ):(
              <div className="text-[14px] flex justify-center">
              <div className="bg-red-500 text-white p-2 rounded-[6px]">
              Student data deleted successfully!!
              </div>
          </div>
            )}
            </>
        )
    }
    
    else{
        return(
            <div className="transition-transform duration-300 z-20 transform -translate-y-10">
            </div>
        )
    }
}