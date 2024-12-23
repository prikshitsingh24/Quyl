import { prisma } from "../prisma";
import { NextResponse } from "next/server"


export async function POST(req){
    const {studentName,cohortId,courseId,dateJoined,status}= await req.json();
    try{
       await prisma.student.create({
        data:{
            studentName:studentName,
            cohortId:cohortId,
            courseId:courseId,
            dateJoined:new Date(dateJoined),
            status:status
        }
       })

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({message:`${studentName}\n${cohortId}\n${dateJoined}\n${status}`},{status:200})
}