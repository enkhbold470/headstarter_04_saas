import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/sign-up",
  "/premium",
  "/api/create-payment-intent",
]);

export default clerkMiddleware((auth, req) => {
  // print the request URL
  if (!auth().userId && !isPublicRoute(req)) {
    // Add custom logic to run before redirecting
    return auth().redirectToSignIn();
  }

  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
