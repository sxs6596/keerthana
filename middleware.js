// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const token = req.cookies.get("token"); // Check for the authentication token in cookies

//   // Redirect to login if no token is found
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // Parse the token to check user roles (You can replace this with your JWT decoding logic)
//   const user = JSON.parse(atob(token.split(".")[1]));

//   req.nextUrl.pathname = req.nextUrl.pathname || "/";

//   // Example route-based role restriction
//   if (req.nextUrl.pathname === "/admin" && !user.roles.includes("Admin")) {
//     return NextResponse.redirect(new URL("/unauthorized", req.url)); // Redirect unauthorized users
//   }

//   return NextResponse.next(); // Allow access
// }

// export const config = {
//   matcher: ["/submit-thesis", "/peer-review", "/admin"], // Protected routes
// };

// // export const config = {
// //   matcher: ["/submit-thesis", "/admin"], // Protected routes
// // };

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token"); // Check for the authentication token in cookies

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if no token is found
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    console.log("Authenticated User:", user);

    // Example route-based role restriction
    if (req.nextUrl.pathname === "/admin" && !user.roles.includes("Admin")) {
      return NextResponse.redirect(new URL("/unauthorized", req.url)); // Redirect unauthorized users
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect on verification error
  }

  return NextResponse.next(); // Allow access
}

export const config = {
  matcher: ["/admin"], // Protected routes
};

// export const config = {
//   matcher: ["/submit-thesis", "/peer-review", "/admin"], // Protected routes
// };

