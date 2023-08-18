import { NextRequest, NextResponse } from "next/server";

export default function protectedMiddleware(req: NextRequest) {
    console.log('yes??');
    return NextResponse.next();
}

export const config = {
    matchers: ['/api/users/*', '/api/todos/*']
}