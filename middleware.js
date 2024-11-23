// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if unauthorized
  }

  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next(); // Proceed if JWT is valid
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect on error
  }
}

export const config = {
  matcher: ["/api/users/me", "/api/otherProtectedRoute"], // Apply middleware to these routes
};
