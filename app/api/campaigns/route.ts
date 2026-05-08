
import {NextResponse, NextRequest} from "next/server";
import axios from 'axios'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { leads } = await request.json(); 
    const cookieStore = await cookies();
  
      const supabaseClient = await createClient(cookieStore);
      const user = await supabaseClient.auth.getUser();
      const userEmail = user.data.user?.email;

  
      console.log("User email from testing auth:", userEmail);
     
  try {
    const response = await axios.post('http://localhost:5678/webhook/55737e71-af29-470f-b86b-04fa0e9b9a64', { leads, userEmail });
    
    return NextResponse.json({ success: true, data: response.data });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}


export async function GET (request :NextRequest ){
   const cookieStore = await cookies();
  
      const supabaseClient =  createClient(cookieStore);
      const user = await supabaseClient.auth.getUser();
      const userEmail = user.data.user?.email;

      try {
      const {data, error} = await  supabaseClient.from('campaigns').select('*').eq('user_email',userEmail);
        console.log('error',error, data,'data')

       return NextResponse.json({campaigns:data, error:error})
      } catch (error) {
        console.log(error) ;
        return NextResponse.json({error:error, data:null});
      

      }
}