import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany()
  return (
   <div>
    <div className="flex justify-center items-center h-screen">
      <div>
        <button>clcik me</button>
        {JSON.stringify(users)}       
      </div>
    </div>   
   </div>
  );
}
