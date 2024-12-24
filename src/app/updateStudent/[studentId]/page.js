"use client"
import { useRouter } from 'next/navigation';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';
import { dateConversion } from '@/app/helper/dateConversion';
import { fetchCohort, fetchCohortById, fetchSubjectsById } from '@/app/helper/processor';

export default function UpdateStudent({params}){
    const date = Date()
    const [studentName, setStudentName] = useState('');
    const [cohort, setCohort] = useState('');  // Cohort data
    const [allCohort,setAllCohort] = useState([]);
    const [cohortId,setCohortId] = useState('');
    const [course, setCourse] = useState([]);  // Courses data
    const [courseId, setCourseId] = useState('');
    const [subjects, setSubjects] = useState({});  // Store subjects by courseId
    const [allSubjects,setAllSubjects] = useState([]);
    const [subjectId, setSubjectId] = useState('');  // Store selected subjectId
    const [dateJoined, setDateJoined] = useState(date.toString());
    const [status, setStatus] = useState('');
    const [updateLoading,setUpdateLoading] = useState(false);
    const [deleteLoading,setDeleteLoading] = useState(false);
    const router = useRouter();
    const handleStudentUpdated = useStore((state)=>state.handleStudentUpdated);
    const handleStudentDeleted = useStore((state)=>state.handleStudentDeleted);
    const studentData = useStore((state)=>state.studentData);
    const isPhone = useStore((state)=>state.isPhone);

  // onChange handlers
  const handleStudentNameChange = (e) => setStudentName(e.target.value);
  
  const handleCohortChange = (e) => {
    const selectedCohortId = e.target.value;
    setCourseId('');  // Reset courseId when cohort is changed
    setSubjects({});  // Reset subjects when cohort is changed
    setCohortId(selectedCohortId)
  };

  const handleCourseClick=(e)=>{
    setCourseId(e.target.value);
  }

  const handleStatusChange = (e) => setStatus(e.target.value);
    
    const handleUpdateStudentDataClick = async()=>{
        const id = await params;
        setUpdateLoading(true);
        if(!id || !studentName || !cohortId || !status){
          return;
        }
        const originalData = studentData.find(student=>student.studentId==id.studentId);
        console.log(originalData)
        if(originalData){
          if(originalData.studentName==studentName && originalData.cohortId==cohortId && originalData.courseId==courseId && originalData.status==status ){
            setUpdateLoading(false);
            return;
            
          }
        }
        const response = await fetch(`/api/updateStudentDataById`,{
            method:"POST",
            body:JSON.stringify({studentId:id.studentId, studentName, cohortId, courseId, status})
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
          setAllCohort(await fetchCohort());
          const id = await params;
          const response = await fetch(`/api/getStudentDataById`,{
              method:"POST",
              body:JSON.stringify({studentId:id.studentId})
          })
          if(response.ok){
              const data = await response.json();
              setStudentName(data.details.studentName);
              setCohortId(data.details.cohortId);
              setStatus(data.details.status);
          }
        }
       
        fetchStudentDetails();
  },[])





      // Fetch Courses based on Cohort ID
  const fetchCourses = async (cohortId) => {
    const response = await fetch('/api/getCourse', {
      method: 'POST',
      body: JSON.stringify({ cohortId })
    });
    if (response.ok) {
      const data = await response.json();
      setCourse(data.course || []); // Set courses based on selected cohort
      if(data.course.length>0){
        setCourseId(data.course[0].courseId)
        data.course.forEach(course => {
        fetchSubjects(course.courseId);  // Call fetchSubjects for each course
      });
      }
    }
  };

  // Fetch Subjects based on Course ID
  const fetchSubjects = async (courseId) => {
    const response = await fetch('/api/getSubjectById', {
      method: 'POST',
      body: JSON.stringify({ courseId })
    });
    if (response.ok) {
      const data = await response.json();
      setAllSubjects((prevSubjects) => ({
        ...prevSubjects,
        [courseId]: data.subject  // Store subjects by courseId
      }));
    }
  };

  useEffect(()=>{
    fetchCourses(cohortId);
  },[cohortId])


    return(
      <div className="text-black p-2">
      <div className="font-semibold text-[24px]">Add new student</div>
      <hr className="border-1 border-tableBorderColor" />
      <div className="grid mt-5 grid-cols-1 gap-5 screen-1024:grid-cols-3 screen-1280:grid-cols-3">
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
            <select value={cohortId} className='text-[16px] p-1 rounded-[6px] outline-none w-48' onChange={handleCohortChange}>
              {allCohort.length>0 && allCohort.map((cohort, index) => (
                <option value={cohort.cohortId} key={index}>{cohort.cohortName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <div className="text-[12px]">Courses</div>
          <div>
          <select className='text-[16px] p-1 rounded-[6px] outline-none min-w-48' onChange={handleCourseClick}>
          {course.map((course, index) => (
            <option value={course.courseId} key={index}>
              {allSubjects[course.courseId] && allSubjects[course.courseId].length > 0 ? 
                allSubjects[course.courseId].map((subject, subIndex) => (
                  `${subject.courseBoard} ${subject.courseClass} ${subject.courseSubject}${subIndex < allSubjects[course.courseId].length - 1 ? ', ' : ''}`
                ))
                : ' No Subjects Available'}
            </option>
          ))}
        </select>
          </div>
        </div>
        <div className="relative">
          <div className="text-[12px]">Date joined</div>
          <div>
            <input
              type="text"
              defaultValue={dateConversion(dateJoined)}
              readOnly
              className="text-[16px] p-1 rounded-[6px] outline-none"
            />
          </div>
        </div>
        <div className="relative">
          <div className="text-[12px]">Status</div>
          <div>
            <select value={status} className='text-[16px] p-1 rounded-[6px] outline-none w-48' onChange={handleStatusChange}>
            <option value={"Online"}>Online</option>
            <option value={"Offline"}>Offline</option>
            </select>
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
      <div className={`${deleteLoading?'bg-gray-500':'bg-red-500'} p-2 rounded-[6px] mr-10 text-white cursor-pointer`} onClick={deleteLoading?()=>{}:handleDeleteStudentDataClick}>
          Delete student Data
        </div>
        <div className={`${updateLoading?'bg-gray-500':'bg-blue-500'} p-2 rounded-[6px] text-white cursor-pointer`} onClick={updateLoading?()=>{}:handleUpdateStudentDataClick}>
          Update student Data
        </div>
     
      </div>
     )}
      </div>
    );
}