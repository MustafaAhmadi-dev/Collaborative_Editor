import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";

export default function CollaborativeRoomSkeleton() {
  return (
    <div className="collaborative-room">
      <Header>
        <Skeleton className="flex h-12 w-3/4 items-center justify-center gap-2 bg-slate-800" />
      </Header>

      <div className="flex size-full h-[550px]">
        <div className="m-5 ml-20 w-full animate-pulse bg-slate-800" />
        <div className="m-5 w-1/3 animate-pulse bg-slate-800" />
      </div>
    </div>
  );
}
