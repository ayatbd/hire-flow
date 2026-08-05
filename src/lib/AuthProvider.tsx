"use client";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { logout, setUser } from "@/redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => (state as any)?.auth.token);
  const [skip, setSkip] = useState(true);

  // 1. On Mount, check if we have a token but NO user info
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setSkip(false); // Trigger the useGetMeQuery
    }
  }, []);

  // 2. Fetch user data using the token
  const {
    data: userData,
    isError,
    isLoading,
  } = useGetMeQuery(undefined, { skip });

  // 3. If data is fetched, update Redux
  useEffect(() => {
    if (userData) {
      dispatch(
        setUser({
          user: userData,
          token: localStorage.getItem("token"),
        }),
      );
    }
    if (isError) {
      dispatch(logout());
    }
  }, [userData, isError, dispatch]);

  if (!skip && isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
