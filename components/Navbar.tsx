import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex w-screen h-auto py-4 px-4 items-center justify-between">
      <div className="text-4xl font-extrabold text-blue-600">IRCTC</div>
      <div className="flex gap-2">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/admin">
          <Button>Admin Page</Button>
        </Link>

        <Button>
          <Link href="/sign-up">SignUp</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
