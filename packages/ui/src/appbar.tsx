"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react"

export const Appbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between border-b px-4 py-4 items-center mx-4 rounded-md shadow-sm shadow-gray-500 mt-2 bg-white z-50">
      <div className="text-lg flex flex-col justify-center">
        SnippetShop
      </div>
      <div className="flex gap-4">
        <a href="/about">About</a>
        <a href="/about">Privacy Policy</a>
        <a href="/about">Guidelines</a>
      </div>
      <div className="flex gap-2 justify-center">
        <button 
          onClick={() => router.push('https://github.com/SoloDevAbu/SnippetShop')}
        className="text-white bg-gray-800 rounded-lg px-2">
          <Github/>
        </button>
        {session ? (
          <div className="flex gap-2 justify-center">
            <Button
              className="bg-gray-800 hover:bg-gray-700 cursor-pointer text-white px-2 py-1 rounded-md"
              onClick={() => router.push("/developer/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              className="bg-gray-800 hover:bg-gray-700 cursor-pointer text-white px-2 py-1 rounded-md"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            className="bg-gray-800 hover:bg-gray-700 cursor-pointer text-white px-2 py-1 rounded-md"
            onClick={() => signIn()}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};