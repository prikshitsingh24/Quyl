"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { dateConversion } from '../helper/dateConversion';

export default function AddNewStudent() {
  const date = Date();
  const [studentName, setStudentName] = useState('');
  const [cohort, setCohort] = useState([]);  // Cohort data
  const [cohortId,setCohortId] = useState('');
  const [course, setCourse] = useState([]);  // Courses data
  const [courseId, setCourseId] = useState('');
  const [subjects, setSubjects] = useState({});  // Store subjects by courseId
  const [subjectId, setSubjectId] = useState('');  // Store selected subjectId
  const [dateJoined, setDateJoined] = useState(date.toString());
  const [status, setStatus] = useState('Online');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleStudentAdded = useStore((state) => state.handleStudentAdded);

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

  const handleAddStudentDataClick = async () => {
    setLoading(true);
    if (!studentName || !cohortId || !courseId || !dateJoined || !status) {
      setLoading(false);
      return;
    } else {
      const response = await fetch("/api/addStudentData", {
        method: "POST",
        body: JSON.stringify({ studentName, cohortId, courseId, dateJoined, status})
      })
      if (response.ok) {
        setLoading(false);
        setStudentName('');
        setCohort([]);
        setCourse([]);
        setSubjects({});  // Reset subjects after successful add
        setStatus('');
        handleStudentAdded();
        router.back();
      } else {
        setLoading(false);
      }
    }
  }

  // Fetch Cohorts
  useEffect(() => {
    const handleCohortData = async () => {
      const response = await fetch('/api/getCohort');
      if (response.ok) {
        const data = await response.json();
        setCohort(data.cohort); // Set cohort data
        if(data.cohort.length){
          setCohortId(data.cohort[0].cohortId)
        }
      
      }
    }
    handleCohortData();
  }, []);

  // Fetch Courses based on Cohort ID
  const fetchCourses = async (cohortId) => {
    const response = await fetch('api/getCourse', {
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
    const response = await fetch('/api/getSubject', {
      method: 'POST',
      body: JSON.stringify({ courseId })
    });
    if (response.ok) {
      const data = await response.json();
      setSubjects((prevSubjects) => ({
        ...prevSubjects,
        [courseId]: data.subject  // Store subjects by courseId
      }));
    }
  };

  useEffect(()=>{
    fetchCourses(cohortId);
  },[cohortId])

  return (
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
            <select className='text-[16px] p-1 rounded-[6px] outline-none w-48' onChange={handleCohortChange}>
              {cohort.map((cohort, index) => (
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
              {subjects[course.courseId] && subjects[course.courseId].length > 0 ? 
                subjects[course.courseId].map((subject, subIndex) => (
                  `${subject.courseBoard} ${subject.courseClass} ${subject.courseSubject}${subIndex < subjects[course.courseId].length - 1 ? ', ' : ''}`
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
            <select className='text-[16px] p-1 rounded-[6px] outline-none w-48' onChange={handleStatusChange}>
            <option value={"Online"}>Online</option>
            <option value={"Offline"}>Offline</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className={`${loading ? 'bg-gray-500' : 'bg-green-500'} p-2 w-52 flex justify-center rounded-[6px] text-white cursor-pointer`} onClick={loading ? () => {} : handleAddStudentDataClick}>
          Add student
        </div>
      </div>
    </div>
  );
}
