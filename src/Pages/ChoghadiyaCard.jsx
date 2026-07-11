const ChoghadiyaCard = ({data})=>{
return (
<div className="bg-black/30 p-4 rounded-xl space-y-2">

<p><strong className="text-green-400 font-semibold">🕐 प्रारंभ :</strong>
<span className="text-yellow-300 ml-2">
{data.start}
</span>

</p>

<p><strong className="text-green-400 font-semibold">⏳ समाप्त :</strong>
<span className="text-yellow-300 ml-2">

{data.end}

</span>

</p>

<p><strong className="text-green-400 font-semibold">🪔 मुहूर्त :
</strong>
<span className="text-amber-200-400 ml-2 font-bold">
{data.muhurat}
</span>

</p>

<p><strong className="text-amber-400 font-semibold">स्थिति :
</strong>
<span
className={data.type==="शुभ"?"text-green-400 ml-2":"text-red-400 ml-2"}>
{data.type}
</span>

</p>
</div>
)}
export default ChoghadiyaCard