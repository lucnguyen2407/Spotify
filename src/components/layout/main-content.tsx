import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardNoBorder } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { popularArtists, trendingSongs } from "@/constants/data";
import Image from "next/image";

export default function MainContent() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-900 to-black">
      <ScrollArea className="h-screen p-6">
        {/* Trending Songs */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending songs</h2>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white p-0">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {trendingSongs.map((song) => (
              <CardNoBorder
                key={song.id}
                className="hover:bg-gray-800 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src={song.image || "/placeholder.svg"}
                      alt={song.title}
                      width={200}
                      height={200}
                      className="w-full aspect-square object-cover rounded-lg bg-gray-800"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 truncate text-white">
                    {song.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {song.artist}
                  </p>
                  {song.subtitle && (
                    <p className="text-xs text-gray-400 truncate">
                      {song.subtitle}
                    </p>
                  )}
                </CardContent>
              </CardNoBorder>
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular artists</h2>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white p-0">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {popularArtists.map((artist) => (
              <CardNoBorder
                key={artist.id}
                className="border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3">
                    <Avatar className="w-full h-auto aspect-square mx-auto">
                      <AvatarImage
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gray-800 text-white text-lg">
                        {artist.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 truncate text-white">
                    {artist.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-gray-700 text-gray-300 text-xs">
                    {artist.type}
                  </Badge>
                </CardContent>
              </CardNoBorder>
            ))}
          </div>
        </section>

        {/* Popular Albums and Singles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular albums and singles</h2>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white p-0">
              Show all
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {trendingSongs.slice(0, 5).map((album) => (
              <CardNoBorder
                key={album.id}
                className="border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <Image
                      src={album.image || "/placeholder.svg"}
                      alt={album.title}
                      width={200}
                      height={200}
                      className="w-full aspect-square object-cover rounded-lg bg-gray-800"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 truncate text-white">
                    {album.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {album.artist}
                  </p>
                </CardContent>
              </CardNoBorder>
            ))}
          </div>
        </section>
      </ScrollArea>
    </main>
  );
}
