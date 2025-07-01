import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { House, Search, Plus, Download, Globe, Music } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const trendingSongs = [
    {
      id: 1,
      title: "KHÔNG ĐAU NỮA RỒI",
      artist: "EM XINH *SAY HI* 52Hz",
      subtitle: "Orange, Châu Bùi",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Dirty Work",
      artist: "aespa",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "THÁC NƯỚC",
      artist: "2pillz, MONO, GREY D",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "FAMOUS",
      artist: "ALLDAY PROJECT",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "On My Mind",
      artist: "Alex Warren, ROSÉ",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "Bông Phù Hoa",
      artist: "Phương Mỹ Chi, DTAP",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  const popularArtists = [
    {
      id: 1,
      name: "Sơn Tùng M-TP",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      id: 2,
      name: "SOOBIN",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      id: 3,
      name: "HIEUTHUHAI",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      id: 4,
      name: "Da LAB",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      id: 5,
      name: "buitruonglinh",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      id: 6,
      name: "Vũ.",
      type: "Artist",
      image: "/placeholder.svg?height=160&width=160",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8 bg-green-500">
            <AvatarFallback className="bg-green-500 text-black">
              <Music className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800">
            <House className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="What do you want to play?"
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800">
            <Download className="w-4 h-4" />
          </Button>
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-300">
            <Button
              variant="link"
              className="text-gray-300 hover:text-white p-0 h-auto">
              Premium
            </Button>
            <Button
              variant="link"
              className="text-gray-300 hover:text-white p-0 h-auto">
              Support
            </Button>
            <Button
              variant="link"
              className="text-gray-300 hover:text-white p-0 h-auto">
              Download
            </Button>
            <span className="text-gray-500">|</span>
            <Button
              variant="link"
              className="text-gray-300 hover:text-white p-0 h-auto">
              Install App
            </Button>
            <Button
              variant="link"
              className="text-gray-300 hover:text-white p-0 h-auto">
              Sign up
            </Button>
          </div>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
            Log in
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
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

            <Card className="mb-6 bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-white">
                  Create your first playlist
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {"It's easy, we'll help you"}
                </p>
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full">
                  Create playlist
                </Button>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-white">
                  {"Let's find some podcasts to follow"}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {"We'll keep you updated on new episodes"}
                </p>
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full">
                  Browse podcasts
                </Button>
              </CardContent>
            </Card>

            <div className="mt-auto">
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

        {/* Main Content */}
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
                  <Card
                    key={song.id}
                    className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
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
                  </Card>
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
                  <Card
                    key={artist.id}
                    className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
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
                  </Card>
                ))}
              </div>
            </section>

            {/* Popular Albums and Singles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Popular albums and singles
                </h2>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white p-0">
                  Show all
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {trendingSongs.slice(0, 5).map((album) => (
                  <Card
                    key={album.id}
                    className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
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
                  </Card>
                ))}
              </div>
            </section>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
