"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react"
import { CodeXml } from "lucide-react"

export const Appbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="text-gray-300 fixed top-0 left-0 right-0 flex justify-between border-b px-4 py-4 items-center mx-4 rounded-md shadow-sm shadow-gray-500 mt-2 z-50 bg-gray-900">
      <div className="text-lg flex gap-2  justify-center items-center font-bold font ">
        <div className="bg-gray-800 rounded-full p-2">
          <CodeXml />
        </div>
        <h1 className="text-xl font-bold">SnippetShop</h1>
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
          <Github />
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