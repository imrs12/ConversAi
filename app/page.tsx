import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect("/sign-up")
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div>
          HomePage
        </div>
      </div>
    </div>
  );
}
