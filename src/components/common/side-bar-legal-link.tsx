import { Button } from "@/components/ui/button";

export default function SideBarLegalLink() {
  return (
    <div className="text-xs text-gray-400 space-y-2 mb-4">
      <div className="flex flex-wrap gap-4">
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          Legal
        </Button>
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          Safety & Privacy Center
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          Privacy Policy
        </Button>
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          Cookies
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          About Ads
        </Button>
        <Button
          variant="link"
          className="text-gray-400 hover:text-white p-0 h-auto text-xs">
          Accessibility
        </Button>
      </div>
    </div>
  );
}
