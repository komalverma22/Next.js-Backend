export function GET(){
    // database logic
    return Response.json({
        email:"komalverma22@gmail.com",
        name:"Komal Verma"
    })
}

import { NextRequest } from "next/server";
import { PrismaClient } from "../../generated/prisma";
const client=new PrismaClient()
// in express
// app.get("/api/user",()=>{
//     res.json({
//         message: "hiii"
//     })
// })

export async function POST(req:NextRequest){
const body=await req.json();

// database-store the data

console.log(body);


const user=await client.user.create({
    data:{
        username:body.username,
        password:body.password
    }
})
console.log(user);

return Response.json({
    message: "logged in successfully"
})

}