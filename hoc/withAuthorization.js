"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const withAuthorization = (Component, allowedRoles) => {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    if(isAuthorized){
        console.log("User is authorized man");
    }

    useEffect(() => {
      const userData = localStorage.getItem("user");
      console.log(`userdata from the middleware role is:${userData.role}`);

      if (!userData) {
        console.warn("No user data found. Redirecting to login.");
        router.push("/login");
        return;
      }

      try {
        const user = JSON.parse(userData);
        console.log("Loaded User:", user);

        if (!user.role) {
          console.error("User role is missing. Redirecting to login.");
          router.push("/login");
          return;
        }

        const hasAccess = allowedRoles.includes(user.role);

        if (!hasAccess) {
          console.warn(
            `Access Denied. User Role: ${user.role}, Required Roles: ${allowedRoles}`
          );
          router.push("/unauthorized");
        } else {
          setIsAuthorized(true); // User is authorized
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/login");
      }
    }, [router]);

    if (!isAuthorized) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
};
