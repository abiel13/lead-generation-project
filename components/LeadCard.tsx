export default function LeadCard({
  lead,
  selected,
  onSelect,
}: {
  lead: any;
  selected: boolean;
  onSelect: () => void;
}) {


  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer rounded-2xl p-5 border transition
        ${
          selected
            ? "border-blue-500 bg-blue-50"
            : "border-slate-100 bg-white hover:shadow-md"
        }
      `}
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">
          {lead.name}
        </h3>

        <span className="w-2 h-2 rounded-full bg-blue-500" />
      </div>

      <p className="text-sm text-slate-500 mt-1">
        {lead.role}
      </p>

      <p className="text-sm text-slate-700 mt-1">
        {lead.company}
      </p>

    

      {/* AI insight */}
      <div className="mt-4 text-xs text-slate-500 leading-relaxed">
        <span className="text-blue-600 font-medium">AI: {lead.ai_insight}</span>{" "}
        
      </div>
    </div>
  );
}