interface CaseDetailProps {
    caseId: string | null;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export function CaseDetail({ caseId }: CaseDetailProps) {
    // In a real app, you would fetch the case details based on the ID
  
    return (
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-bold">Bullying Incident at aso rock</h1>
  
          <p className="mb-4 text-base">
            On October 26, 2024, a student reported experiencing verbal harassment during lunch at the campus cafeteria.
            The incident occurred around 12:30 p.m., when the victim was sitting with friends.
          </p>
  
          <p className="mb-4 text-base">
            The victim, a sophomore, stated that another student repeatedly made offensive remarks and engaged in
            name-calling. Witnesses confirmed that the accused student had been involved in similar incidents in the past.
          </p>
  
          <p className="mb-4 text-base">
            The situation escalated when the accused student threw a tray on the floor and walked away. No physical
            altercation was reported, but the victim expressed distress and concern over continued harassment.
          </p>
  
          <p className="mb-4 text-base">
            A cafeteria staff member intervened and reported the incident to the school administration. Security footage
            from the cafeteria is being reviewed to verify the sequence of events.
          </p>
  
          <p className="mb-4 text-base">
            The school&apos;s guidance counselor has been informed, and a meeting has been scheduled with both students and
            their guardians to address the situation. Additional support has been offered to the victim.
          </p>
  
          <p className="mb-4 text-base">
            The case is currently under review by the student affairs office, and appropriate disciplinary actions will be
            determined based on the school&apos;s code of conduct.
          </p>
        </div>
      </div>
    );
  }
  