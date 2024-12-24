import { NextResponse } from "next/server";
import { prisma } from "../prisma";



export async function GET(req){
    try{
        const courseClass = await prisma.subject.findMany({
            select: {
              courseBoard: true,
              courseClass: true,
            },
            distinct: ['courseBoard'],
            distinct: ['courseClass']
          });
          
        return NextResponse.json({courseClass},{status:200})
    }catch(error){
        return NextResponse.json({},{status:500})
    }
}