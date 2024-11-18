import Image from "next/image";
import loader from "@/public/assets/icons/loader.svg";

function Loader({ hasText }: { hasText?: boolean }) {
  return (
    <main className="flex h-screen flex-col items-center justify-evenly gap-6 text-center text-white">
      {hasText && (
        <div>
          <h1 className="mb-8 text-4xl">
            Welcome to <span className="text-blue-400">LiveDocs</span>{" "}
          </h1>
          <h3 className="text-xl">
            We are trying to get your documents ready ...
          </h3>
        </div>
      )}
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src={loader}
          alt="loader"
          width={32}
          height={32}
          className="animate-spin"
        />
        Loading...
      </div>
    </main>
  );
}

export default Loader;
