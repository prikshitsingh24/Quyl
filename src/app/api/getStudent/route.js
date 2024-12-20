
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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