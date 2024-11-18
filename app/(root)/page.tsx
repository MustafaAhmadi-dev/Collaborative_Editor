import { Suspense } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Notifications from "@/components/Notifications";
import Header from "@/components/Header";
import Home from "./_components/Home";
import Loader from "@/components/Loader";

export default async function HomePage() {
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          <Notifications />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <Suspense fallback={<Loader hasText />}>
        <Home />
      </Suspense>
    </main>
  );
}
