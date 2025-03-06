import { Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex h-full w-[200px] flex-col border-r bg-slate-50">
      <div className="flex items-center gap-2 p-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        </div>
        <span className="font-semibold">Speak UP</span>
      </div>

 

      <div className="relative mx-4 mt-2">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input placeholder="Search" className="pl-8" />
      </div>

      <nav className="mt-6 flex-1 space-y-1 px-2">
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
          </svg>
          Cases
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Spam
        </Link>
      </nav>

      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">B</div>
          <div className="flex flex-col text-sm">
            <span className="font-medium">Admin Name</span>
            <span className="text-xs text-gray-500">AdminFcahpt#764</span>
          </div>
        </div>
      </div>
    </div>
  )
}

