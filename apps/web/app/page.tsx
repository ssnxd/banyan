import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="container flex flex-col items-center justify-between p-24">
        Hello, banyan tree!

        <Link href="/auth/login">
          Login
        </Link>
        <Link href="/auth/register">
          Register
        </Link>
      </main>

    </div>
  );
}
