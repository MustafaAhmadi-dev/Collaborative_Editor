import { Suspense } from "react";
import Document from "../../_components/Document";
import CollaborativeRoomSkeleton from "@/components/CollaborativeRoomSkeleton";

export default async function DocumentPage({
  params: { id },
}: SearchParamProps) {
  return (
    <>
      <Suspense fallback={<CollaborativeRoomSkeleton />}>
        <Document id={id} />
      </Suspense>
    </>
  );
}
