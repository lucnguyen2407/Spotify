import { Button } from "@/components/ui/button";
import {
  Heart,
  Maximize2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import Image from "next/image";

export default function MusicPlayer() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-900 border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Currently Playing */}
        <div className="flex items-center gap-3 flex-1">
          <Image
            src="/placeholder.svg?height=56&width=56"
            alt="Current song"
            width={56}
            height={56}
            className="w-14 h-14 rounded"
          />
          <div>
            <p className="text-white text-sm font-medium">
              tự thích thích thành thương thương
            </p>
            <p className="text-gray-400 text-xs">AMEE, Hoàng Dũng</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white">
              <Shuffle className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              className="bg-white text-black hover:bg-gray-200 rounded-full">
              <Play className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white">
              <SkipForward className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white">
              <Repeat className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-gray-400 text-xs">0:36</span>
            <div className="flex-1 bg-gray-600 rounded-full h-1">
              <div className="bg-white rounded-full h-1 w-1/4"></div>
            </div>
            <span className="text-gray-400 text-xs">3:24</span>
          </div>
        </div>

        {/* Volume and Other Controls */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white">
            <Volume2 className="w-4 h-4" />
          </Button>
          <div className="w-20 bg-gray-600 rounded-full h-1">
            <div className="bg-white rounded-full h-1 w-3/4"></div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
