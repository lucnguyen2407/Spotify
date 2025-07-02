import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, Plus } from "lucide-react";
import { PromoCard } from "../common/promo-card";
import SideBarLegalLink from "../common/side-bar-legal-link";

const promoCards = [
  {
    title: "Create your first playlist",
    description: "It's easy, we'll help you",
    buttonText: "Create playlist",
    className: "mb-6",
  },
  {
    title: "Let's find some podcasts to follow",
    description: "We'll keep you updated on new episodes",
    buttonText: "Browse podcasts",
    className: "mb-8",
  },
];

export default function LeftSideBarMain() {
  return (
    <aside className="w-80 bg-black">
      <ScrollArea className="h-screen p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-300 font-semibold">Your Library</h2>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {promoCards.map((card, idx) => (
          <PromoCard
            key={idx}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            className={card.className}
          />
        ))}

        <div className="mt-auto">
          <SideBarLegalLink />
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            <Globe className="w-4 h-4 mr-2" />
            English
          </Button>
        </div>
      </ScrollArea>
    </aside>
  );
}
