const LalNavbar = ({activeTab,setActiveTab}) => {

const navItems = [
{
name:"📕 लाल कुंडली",
value:"chart"
},
{
name:"📕 वार्षिक कुंडली",
value:"yearlychart"
},
{
name:"🔮 ग्रहों की स्थिति",
value:"prediction"
},
{
name:"⚖️ ऋण दोष",
value:"debts"
},
{
name:"🏠 ग्रह खाना स्थिति",
value:"house"
},
{
name:"🪐 ग्रह विवरण",
value:"planet"
},
{
name:"🧿 उपाय",
value:"remedy"
}
];

return (
  <div className="pt-16 px-3 md:px-5">
    <div className="mt-20 flex items-center gap-2 md:justify-center md:gap-3 overflow-x-auto">
      {navItems.map((item) => (
        <button
          key={item.value}
          onClick={() => setActiveTab(item.value)}
          className={`min-w-fit rounded-xl border px-3 py-2 text-sm duration-300 md:px-4 md:py-2.5 md:text-base ${activeTab === item.value ? 'border-orange-500 bg-orange-500 text-black shadow-lg shadow-orange-500/30' : 'border-orange-500 text-orange-400 hover:border-orange-400 hover:bg-orange-500/10'}`}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>

)

}

export default LalNavbar;