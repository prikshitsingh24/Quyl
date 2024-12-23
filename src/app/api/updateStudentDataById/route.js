import { prisma } from "../prisma";
import { NextResponse } from "next/server"



export async function POST(req){
    const {studentId, studentName,cohortId,courseId,status}= await req.json();
    try{
       await prisma.student.update({
        where:{
            studentId:studentId
        },
        data:
        { 
            studentName:studentName,
            cohortId:cohortId,
            courseId:courseId,
            status:status

        }
    })

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({message:"Student added successfully"},{status: 200})
}