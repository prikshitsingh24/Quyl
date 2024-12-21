
import { NextResponse } from "next/server"
import { prisma } from "../prisma";

export async function GET(req){
    try{
        const data = await prisma.student.findMany({orderBy:{
            dateJoined:'desc'
        }});
        return NextResponse.json({data});
    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
}