export const fetchCohortById = async (cohortId) => {
    const response = await fetch('/api/getCohortById', {
        method: 'POST',
        body: JSON.stringify({ cohortId })
    });

    if (response.ok) {
        const data = await response.json();
        return data.cohort[0].cohortName;
    }
    return null;  
};


export const fetchCohort = async () => {
    const response = await fetch('/api/getCohort');

    if (response.ok) {
        const data = await response.json();
        return data.cohort;
    }
    return null;  
};


export const fetchSubjectsById = async (courseId) => {
const response = await fetch('/api/getSubject', {
    method: 'POST',
    body: JSON.stringify({ courseId })
});

if (response.ok) {
    const data = await response.json();
    return data.subject;
    
}
return []; 
};

