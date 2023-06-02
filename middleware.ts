import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";



export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req: NextRequest) {
    // console.log(req)
    return NextResponse.rewrite(new URL("/admin", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "AUTHORIZED",
    },
  }
)

export const config = { matcher: ["/dashboard/:path*"] }