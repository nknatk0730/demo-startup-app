import Link from "next/link"
import { Button } from "./ui/button"
import { currentUser } from "@/app/data/auth"
import { signOut } from "@/actions/auth";

export const Header = async () => {
  const user = await currentUser();

  return (
    <header className="h-16 gap-3 border-b px-6 flex items-center">
      <Button asChild variant="ghost" className="font-bold text-xl">
        <Link href="/">Logo</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/items">Item list</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/mypage">My Page</Link>
      </Button>

      <span className="flex-1"></span>

      {user ? (
        <form action={signOut}>
          <Button variant='outline'>Logout</Button>
        </form>
      ) : (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </header>
  );
}