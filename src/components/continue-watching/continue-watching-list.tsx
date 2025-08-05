import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { continueWatchingItems } from "@/lib/data"
import { Play } from "lucide-react"

export function ContinueWatchingList() {
  return (
    <div className="space-y-4">
      {continueWatchingItems.map((item) => (
        <Card key={item.title} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-lg object-cover w-24 h-24 sm:w-28 sm:h-28"
              data-ai-hint={item.dataAiHint}
            />
            <div className="flex-1 w-full">
              <p className="text-sm text-muted-foreground">{item.module}</p>
              <h3 className="font-semibold font-headline text-lg leading-tight mb-2">{item.title}</h3>
              <div className="flex items-center gap-3 mb-4">
                <Progress value={item.progress} className="w-full h-2" />
                <span className="text-sm font-medium text-muted-foreground">{item.progress}%</span>
              </div>
              <Button className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                Retomar agora
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
