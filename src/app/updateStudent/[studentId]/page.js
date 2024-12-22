"use client"
import { useRouter } from 'next/navigation';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';
import { dateConversion } from '@/app/helper/dateConversion';

export default function UpdateStudent({params}){
    const date = Date()
    const [studentName, setStudentName] = useState('');
    const [cohort, setCohort] = useState('');
    const [course, setCourse] = useState('');
    const [dateJoined, setDateJoined] = useState(date.toString());
    const [status, setStatus] = useState('');
    const [updateLoading,setUpdateLoading] = useState(false);
    const [deleteLoading,setDeleteLoading] = useState(false);
    const router = useRouter();
    const handleStudentUpdated = useStore((state)=>state.handleStudentUpdated);
    const handleStudentDeleted = useStore((state)=>state.handleStudentDeleted);
    const studentData = useStore((state)=>state.studentData);
    const isPhone = useStore((state)=>state.isPhone);

    const handleStudentNameChange = (e) => setStudentName(e.target.value);
    const handleCohortChange = (e) => setCohort(e.target.value);
    const handleCourseChange = (e) => setCourse(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);
    
    const handleUpdateStudentDataClick = async()=>{
        const id = await params;
        setUpdateLoading(true);
        if(!id || !studentName || !cohort || !status){
          return;
        }
        const originalData = studentData.find(student=>student.studentId==id.studentId);
        if(originalData){
          if(originalData.studentName==studentName && originalData.cohort==cohort && originalData.status==status ){
            setUpdateLoading(false);
            return;
            
          }
        }
        const response = await fetch(`/api/updateStudentDataById`,{
            method:"POST",
            body:JSON.stringify({studentId:id.studentId,studentName,cohort,dateJoined,status})
        })
        if(response.ok){
            const data = await response.json();
            setUpdateLoading(false);
            handleStudentUpdated();
            router.back();
       
        }else{
          setUpdateLoading(false);
        }
    }


    const handleDeleteStudentDataClick=async()=>{
      const id = await params;
      setDeleteLoading(true);
        if(!id){
          return;
        }
        const response = await fetch(`/api/deleteStudentDataById`,{
            method:"POST",
            body:JSON.stringify({studentId:id.studentId})
        })
        if(response.ok){
            setDeleteLoading(false);
            handleStudentDeleted();
            router.back();
       
        }else{
          setDeleteLoading(false);
        }
    }

    useEffect(()=>{
        const fetchStudentDetails=async()=>{
            const id = await params;
            const response = await fetch(`/api/getStudentDataById`,{
                method:"POST",
                body:JSON.stringify({studentId:id.studentId})
            })
            if(response.ok){
                const data = await response.json();
                setStudentName(data.details.studentName);
                setCohort(data.details.cohort);
                setStatus(data.details.status)
            }
        }
        fetchStudentDetails();
    },[])



    return(
        <div className="text-black p-2">
        <div className="font-semibold text-[24px]">Add new student</div>
        <hr className="border-1 border-tableBorderColor" />
        <div className="grid mt-5 grid-cols-1 gap-5 screen-1024:grid-cols-3 screen-1280:grid-cols-5">
          <div className="relative">
            <div className="text-[12px]">Student name</div>
            <div>
              <input
                type="text"
                value={studentName}
                onChange={handleStudentNameChange}
                className="text-[16px] p-1 rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <div className="text-[12px]">Cohort</div>
            <div>
              <input
                type="text"
                value={cohort}
                onChange={handleCohortChange}
                className="text-[16px] p-1 rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <div className="text-[12px]">Courses</div>
            <div>
              <input
                type="text"
                value={course}
                onChange={handleCourseChange}
                className="text-[16px] p-1 rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <div className="text-[12px]">Date joined</div>
            <div>
              <input
                type="text"
                defaultValue={dateConversion(dateJoined)}
                className="text-[16px] p-1 rounded-[6px] outline-none"
                readOnly
              />
            </div>
          </div>
          <div className="relative">
            <div className="text-[12px]">Status</div>
            <div>
              <input
                type="text"
                value={status}
                onChange={handleStatusChange}
                className="text-[16px] p-1 rounded-[6px] outline-none"
              />
            </div>
          </div>
        </div>
     {isPhone?(
         <div className={`flex-col justify-center mt-14 `}>
               <div className={`${updateLoading?'bg-gray-500':'bg-blue-500'} p-2 mb-10 w-52 rounded-[6px] text-white cursor-pointer`} onClick={updateLoading?()=>{}:handleUpdateStudentDataClick}>
             Update student Data
           </div>
         <div className={`${deleteLoading?'bg-gray-500':'bg-red-500'} p-2 rounded-[6px] w-52 text-white cursor-pointer`} onClick={deleteLoading?()=>{}:handleDeleteStudentDataClick}>
             Delete student Data
           </div>
         </div>
     ):(
      <div className={`flex justify-center mt-14 `}>
      <div className={`${updateLoading?'bg-gray-500':'bg-red-500'} p-2 rounded-[6px] mr-10 text-white cursor-pointer`} onClick={updateLoading?()=>{}:handleDeleteStudentDataClick}>
          Delete student Data
        </div>
        <div className={`${deleteLoading?'bg-gray-500':'bg-blue-500'} p-2 rounded-[6px] text-white cursor-pointer`} onClick={deleteLoading?()=>{}:handleUpdateStudentDataClick}>
          Update student Data
        </div>
     
      </div>
     )}
      </div>
    );
}