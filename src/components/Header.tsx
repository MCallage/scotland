import { GiPathDistance } from "react-icons/gi";

export default function Header() {
  return (
    <header className="w-full mb-10">
      <div className="flex justify-end w-full">
        <div className="flex items-center gap-4 bg-sky-500 text-white px-8 py-4 rounded-bl-3xl shadow-md transition-colors hover:bg-sky-600">
          <span className="font-body text-lg">PLACES TO DISCOVERY</span>
          <GiPathDistance className="w-8 h-8" />
          <span className="font-body text-lg">DEV →</span>
        </div>
      </div>
      
      <div className="mt-12 px-8">
        <h1 className="relative font-title text-5xl text-blue-950 pl-6 mb-4
                       before:content-[''] before:absolute before:left-0 before:top-1/2 
                       before:-translate-y-1/2 before:h-20 before:w-1.5 before:bg-cyan-200">
          PLACES TO GO IN SCOTLAND
        </h1>
        <p className="text-neutral-600 font-body">
          A guide with curiosities about tourist places in Scotland.
        </p>
      </div>
    </header>
  );
}