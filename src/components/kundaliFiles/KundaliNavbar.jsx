const tabs = [
  { id: 'user', label: 'व्यक्ति विवरण' },
  { id: 'paramparik', label: 'पारंपरिक' },
  { id: 'navmansh', label: 'नवमांश कुंडली' },
  { id: 'chandra', label: 'चंद्र कुंडली' },
  { id: 'mahadasha', label: 'महादशा' },
  { id: 'gem', label: '💎 शुभ रत्न और रुद्राक्ष' },
  { id: 'sadeSati', label: 'शनि साढ़े साती' },
  { id: 'MangalDosh', label: 'मंगल दोष' },
  { id: 'manglik', label: 'मांगलिक दोष' },
  { id: 'kaalsarap', label: 'कालसर्प दोष' },
  { id: 'pitra', label: 'पितृ दोष' },
  { id: 'sun', label: 'सूर्य + भाव चलित कुंडली' },
  { id: 'ashtakvarga', label: 'अष्टकवर्ग' },
  { id: 'dreshkan', label: 'षष्ठांश + सप्तमांश कुंडली' },
  { id: 'asthdash', label: 'अष्टमांश + दशांश कुंडली' },
  { id: 'd12', label: 'द्वादशांश + षोडशांश कुंडली' },
  { id: 'd20', label: 'विंशांश + चतुर्विंशांश कुंडली' },
  { id: 'd27', label: 'सप्तविंशांश + त्रिंशांश कुंडली' },
  { id: 'd40', label: 'खवेदांश + अक्षवेदांश कुंडली' },
];

const KundaliNavbar = ({ activeTab, setActiveTab }) => {
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

export default KundaliNavbar;
