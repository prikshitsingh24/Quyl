// import { prisma } from "../prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function POST(req){
    const {studentId,studentName,cohort,dateJoined,status}= await req.json();
    try{
       await prisma.student.update({
        where:{
            studentId:studentId
        },
        data:
        { 
            studentName:studentName,
            cohort:cohort,
            dateJoined:new Date(dateJoined),
            status:status
        }
    })

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({message:"Student added successfully"},{status: 200})
}