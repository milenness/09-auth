import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  const isPublicRoute = pathname === "/sign-in" || pathname === "/sign-up";
  const isPrivateRoute =
    pathname.startsWith("/profile") || pathname.startsWith("/notes");

  if (!session && isPrivateRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (session && isPublicRoute) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
};
