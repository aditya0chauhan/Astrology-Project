const tabs = [
  { id: 'user', label: 'व्यक्ति विवरण' },
  { id: 'paramparik', label: 'अष्टकूट मिलान' },
  { id: 'dashkoot', label: 'दशकूट मिलान' },
  { id: 'aggregate', label: 'समग्र मिलान' },
  { id: 'papasamya', label: 'पापसाम्य मिलान' },
  { id: 'sandhi', label: 'दशा-संधि' },
 
];

const MilanNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed top-20 left-0 right-0 z-50 bg-[#08122D]/95 backdrop-blur-md border-y border-amber-500 shadow-lg flex justify-around">
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

export default MilanNavbar;
