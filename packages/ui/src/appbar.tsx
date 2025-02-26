"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./button";

export const Appbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">
        SnippetShop
      </div>
      <div className="flex flex-col justify-center pt-2">
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