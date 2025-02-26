import Image from "next/image";

export default function Home() {
  return (
    
    <div className="">

      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <h1 className="text-7xl font-bold">Home Page</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full text-4xl">
          <a href="/aboutus">About Us</a>
        </button>
      </div>
    </div>
  );
}
