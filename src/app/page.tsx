"use client"
import { useAppContext } from "@/app/app_provider";

export default function Home() {
  const {sessionToken} = useAppContext();
  console.log(sessionToken);
  return (
    <div>
    sdfsdf
    </div>
  );
}
