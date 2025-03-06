"use client"

import { Sidebar } from "@/app/_components/sidebar"
import { CasesList } from "@/app/_components/cases-list"
import { CaseDetail } from "@/app/_components/case-detail"
import { useState } from "react"

export default function Home() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>("1")

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <CasesList onSelectCase={(id) => setSelectedCaseId(id)} selectedCaseId={selectedCaseId} />
      <CaseDetail caseId={selectedCaseId} />
    </div>
  )
}

