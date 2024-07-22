import { signIn, signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "../data/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const user =  await currentUser();

  if (user) {
    redirect('/mypage');
  }

  return (
    <div className="p-6">
      {user && <p>{JSON.stringify(user)}</p>}

      <form action={signIn}>
          <Button>Login</Button>
        </form>
    </div>
  )
}
