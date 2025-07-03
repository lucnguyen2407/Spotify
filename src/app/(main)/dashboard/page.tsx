import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return <p>Dashboard Page</p>;
}
