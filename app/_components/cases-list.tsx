"use client"

import { MoreHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for the cases list
const cases = [
    {
      id: "1",
      title: "Bullying Incident in Cafeteria",
      description: "A student reported being verbally harassed during lunch...",
      date: "Oct 26, 2024",
    },
    {
      id: "2",
      title: "Lost and Found: Missing Laptop",
      description: "A student misplaced their laptop in the library...",
      date: "Sep 24, 2024",
    },
    {
      id: "3",
      title: "Vandalism in Classroom",
      description: "Graffiti was found on the walls of Room 204...",
      date: "Oct 22, 2024",
    },
    {
      id: "4",
      title: "Suspicious Activity Near Dormitory",
      description: "A student noticed an unknown individual near the dorm entrance...",
      date: "Oct 20, 2024",
    },
    {
      id: "5",
      title: "Physical Altercation in Hallway",
      description: "Two students were involved in a fight outside the science lab...",
      date: "Sep 18, 2024",
    },
    {
      id: "6",
      title: "Academic Misconduct Report",
      description: "A student was caught using unauthorized materials during an exam...",
      date: "Sep 16, 2024",
    },
    {
      id: "7",
      title: "Cyberbullying Complaint",
      description: "A student reported receiving harassing messages online...",
      date: "Sep 11, 2024",
    },
    {
      id: "8",
      title: "Property Theft in Locker Room",
      description: "A student's phone was reported stolen from their gym locker...",
      date: "Sep 09, 2024",
    },
    {
      id: "9",
      title: "Unauthorized Entry into Restricted Area",
      description: "Students were found in the school's restricted zone after hours...",
      date: "Sep 05, 2024",
    },
  ];
  

interface CasesListProps {
  onSelectCase: (id: string) => void
  selectedCaseId: string | null
}

export function CasesList({ onSelectCase, selectedCaseId }: CasesListProps) {
  return (
    <div className="flex h-full w-[250px] flex-col border-r">
      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h2 className="text-lg font-semibold">All Cases</h2>
          <p className="text-sm text-gray-500">Total {cases.length} cases</p>
        </div>
        <Button variant="outline" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <line x1="9" x2="9" y1="21" y2="9" />
          </svg>
        </Button>
      </div>

      <div className="flex items-center gap-2 border-b p-2">
        <div className="flex flex-1 items-center gap-1 rounded-md border px-3 py-1.5">
          <span className="text-sm font-medium">Date Updated</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-1 rounded-md border px-3 py-1.5">
          <span className="text-sm font-medium">Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M11 18h4" />
            <path d="M11 12h7" />
            <path d="M11 6h10" />
            <path d="M3 6h4" />
            <path d="M3 12h4" />
            <path d="M3 18h4" />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className={`border-b p-4 cursor-pointer hover:bg-gray-50 ${selectedCaseId === caseItem.id ? "bg-blue-50" : ""}`}
            onClick={() => onSelectCase(caseItem.id)}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-base line-clamp-1">{caseItem.title}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">{caseItem.description}</p>
            <div className="mt-2 flex items-center text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-3 w-3"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {caseItem.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

