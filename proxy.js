import { clerkMiddleware , createRouteMatcher} from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
const backendRoutes= createRouteMatcher(['/api(.*)'])
const isProtectedRoute = createRouteMatcher(['/todos(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { isAuthenticated } = await auth()
  if (isProtectedRoute(req)) await auth.protect()
  if (backendRoutes(req) && !isAuthenticated){
    return new NextResponse('Unauthorized', { status: 401 })
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};