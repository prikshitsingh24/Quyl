"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStore } from '../store';

export default function AddNewStudent() {
  const date = Date()
  const [studentName, setStudentName] = useState('');
  const [cohort, setCohort] = useState('');
  const [course, setCourse] = useState('');
  const [dateJoined, setDateJoined] = useState(date.toString());
  const [status, setStatus] = useState('');
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const handleStudentAdded = useStore((state)=>state.handleStudentAdded);

  // onChange handlers
  const handleStudentNameChange = (e) => setStudentName(e.target.value);
  const handleCohortChange = (e) => setCohort(e.target.value);
  const handleCourseChange = (e) => setCourse(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const handleAddStudentClick=async()=>{
    setLoading(true);
    if(!studentName || !cohort || !course || !dateJoined || !status){
        setLoading(false);
        return;
    }
    else{
        const response = await fetch("/api/addStudent",{
            method:"POST",
            body:JSON.stringify({studentName,cohort,dateJoined,status})
        })
        if(response.ok){
          setLoading(false);
          setStudentName('');
          setCohort('');
          setCourse('');
          setStatus('')
          handleStudentAdded();
          router.back();
        }else{
          setLoading(false);
        }
    }
  }

  return (
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
      <div className="flex justify-center mt-10 ">
        <div className={`${loading?'bg-gray-500':'bg-green-500'} p-2 rounded-[6px] text-white cursor-pointer`} onClick={loading?()=>{}:handleAddStudentClick}>
          Add student
        </div>
      </div>
    </div>
  );
}
