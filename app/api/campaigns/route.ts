
import {NextResponse, NextRequest} from "next/server";
import axios from 'axios'

export async function POST(request: NextRequest) {
  const { leads } = await request.json(); 

  try {
    const response = await axios.post('http://localhost:5678/webhook-test/55737e71-af29-470f-b86b-04fa0e9b9a64', { leads });
    
    return NextResponse.json({ success: true, data: response.data });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}