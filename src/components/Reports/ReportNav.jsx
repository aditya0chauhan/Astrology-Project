const tabs = [
  { id: "kundaliReport", label: "📄 कुंडली रिपोर्ट" },
  { id: 'vedicReport', label: 'वैदिक रिपोर्ट' }
];

const ReportNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed top-32 left-0 right-0 z-50 bg-[#08122D]/95 backdrop-blur-md border-y border-amber-500 shadow-lg">
      <div className="overflow-x-auto scrollbar-hide">
     <div className="flex w-max gap-3 px-4 py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border
               ${activeTab === tab.id ? 'bg-amber-400 text-black border-amber-400 shadow-lg scale-105' : 'bg-[#1A2742] text-white border-[#334155] hover:border-amber-400 hover:bg-[#243555]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportNav;
