
import { NextResponse } from "next/server"
import { prisma } from "../prisma";

export async function GET(req){
    try{
        const studentData = await prisma.student.findMany({orderBy:{
            dateJoined:'desc'
        }});
        return NextResponse.json({studentData},{status: 200});
    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
}