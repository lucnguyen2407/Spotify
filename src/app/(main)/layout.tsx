import MainNav from "@/components/layout/main-navigation";
import LeftSideBarMain from "@/components/layout/left-side-bar-main";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="flex">
        <LeftSideBarMain />
        {children}
      </div>
    </div>
  );
}
