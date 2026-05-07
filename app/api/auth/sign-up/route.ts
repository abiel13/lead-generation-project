import {NextResponse, NextRequest} from "next/server";
import {createClient} from '@/utils/supabase/server'
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {

    const {email, password} = await request.json();
    const cookiesStore = await cookies();
    const supabase = createClient(cookiesStore);
    const {error} = await supabase.auth.signUp({email, password});

    if (error) {
        return NextResponse.json({error: error.message}, {status: 401});
    }

    return NextResponse.json({message: "Account Created Successfully"});
}