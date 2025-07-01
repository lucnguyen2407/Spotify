import LeftSideBarMain from "@/components/layout/left-side-bar-main";
import MainContent from "@/components/layout/main-content";
import MainNav from "@/components/layout/main-navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="flex">
        <LeftSideBarMain />
        <MainContent />
      </div>
    </div>
  );
}
