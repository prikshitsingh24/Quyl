
import { NextResponse } from "next/server"
import { prisma } from "../prisma";

export async function GET(req){
    try{
        const data = await prisma.student.findMany({orderBy:{
            dateJoined:'desc'
        }});
        return NextResponse.json({data},{status: 200});
    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
}