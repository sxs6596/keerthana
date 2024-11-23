"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const getCurrentUserRole = () => {
  if (typeof window !== "undefined") {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    return loggedInUser ? loggedInUser.role : null;
  }
  return null;
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const userRole = getCurrentUserRole();

  useEffect(() => {
    if (!userRole) {
      toast.error("You need to be logged in to access this page.");
      router.push("/login");
    } else if (!allowedRoles.includes(userRole)) {
      toast.error("You do not have permission to access this page.");
      router.push("/");
    }
  }, [userRole, allowedRoles, router]);

  if (!userRole || !allowedRoles.includes(userRole)) {
    return null; // Render nothing while redirecting
  }

  return children;
};

export default ProtectedRoute;
