"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";

export default function Home() {
  const { push } = useRouter();
  const skeleton = [1, 2, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    push("/home");
  }, []);
  return (
    <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 md:gap-y-10">
      {skeleton.map((item) => (
        <div>
          <Skeleton variant="rectangular" sx={{ height: 250 }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem", maxWidth: 400 }} />
        </div>
      ))}
    </div>
  );
}
