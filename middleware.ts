import { NextRequest } from "next/server";
import { proxy } from "./lib/proxy";

export function middleware(request: NextRequest) {
  return proxy(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
