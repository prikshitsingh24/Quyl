import { create } from "zustand";


export const useStore = create((set)=>({
    isStudentAdded:false,
    handleStudentAdded: ()=>{
        set({isStudentAdded:true});
        setTimeout(() => {
            set({ isStudentAdded: false });
          }, 3000);
    },
    studentData:[],
    handleStudentData:(data)=>{
        set({studentData:data})
    }
}))