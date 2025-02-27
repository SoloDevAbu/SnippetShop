"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./button";

export const Appbar = () => {
  const { data: session } = useSession();
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
      <div className="flex flex-col justify-center">
        <Button
          className="bg-gray-800 hover:bg-gray-700 cursor-pointer text-white px-2 py-1 rounded-md"
          onClick={session ? () => signOut() : () => signIn()}
        >
          {session ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};