"use client"
import { useRouter } from 'next/navigation';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';

export default function UpdateStudent({params}){
    const date = Date()
    const [studentName, setStudentName] = useState('');
    const [cohort, setCohort] = useState('');
    const [course, setCourse] = useState('');
    const [dateJoined, setDateJoined] = useState(date.toString());
    const [status, setStatus] = useState('');
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const handleStudentUpdated = useStore((state)=>state.handleStudentUpdated);
    const handleStudentDeleted = useStore((state)=>state.handleStudentDeleted);
    const studentData = useStore((state)=>state.studentData);

    const handleStudentNameChange = (e) => setStudentName(e.target.value);
    const handleCohortChange = (e) => setCohort(e.target.value);
    const handleCourseChange = (e) => setCourse(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);
    
    const handleUpdateStudentDataClick = async()=>{
        const id = await params;
        setLoading(true);
        if(!id || !studentName || !cohort || !status){
          return;
        }
        const originalData = studentData.find(student=>student.studentId==id.studentId);
        if(originalData){
          if(originalData.studentName==studentName && originalData.cohort==cohort && originalData.status==status ){
            setLoading(false);
            return;
            
          }
        }
        const response = await fetch(`/api/updateStudentDataById`,{
            method:"POST",
            body:JSON.stringify({studentId:id.studentId,studentName,cohort,dateJoined,status})
        })
        if(response.ok){
            const data = await response.json();
            setLoading(false);
            handleStudentUpdated();
            router.back();
       
        }else{
          setLoading(false);
        }
    }


    const handleDeleteStudentDataClick=async()=>{
      const id = await params;
      setLoading(true);
        if(!id){
          return;
        }
        const response = await fetch(`/api/deleteStudentDataById`,{
            method:"POST",
            body:JSON.stringify({studentId:id.studentId})
        })
        if(response.ok){
            setLoading(false);
            handleStudentDeleted();
            router.back();
       
        }else{
          setLoading(false);
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
        <div className="grid mt-5 grid-cols-5">
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
                defaultValue={dateJoined}
                className="text-[16px] p-1 rounded-[6px] outline-none"
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
        <div className="flex justify-center mt-14 ">
        <div className={`${loading?'bg-gray-500':'bg-red-500'} p-2 rounded-[6px] mr-10 text-white cursor-pointer`} onClick={loading?()=>{}:handleDeleteStudentDataClick}>
            Delete student Data
          </div>
          <div className={`${loading?'bg-gray-500':'bg-blue-500'} p-2 rounded-[6px] text-white cursor-pointer`} onClick={loading?()=>{}:handleUpdateStudentDataClick}>
            Update student Data
          </div>
       
        </div>
      </div>
    );
}