// const PredictionCard = ({ title, text }) => {

//     if (!text) return null;

//     const cleanedText = text
//         .split(". ")
//         .filter(sentence => {
//             const lower = sentence.toLowerCase();

//             return !(
//                 lower.includes("moon in") ||
//                 lower.includes("first house") ||
//                 lower.includes("second house") ||
//                 lower.includes("third house") ||
//                 lower.includes("fourth house") ||
//                 lower.includes("fifth house") ||
//                 lower.includes("sixth house") ||
//                 lower.includes("seventh house") ||
//                 lower.includes("eighth house") ||
//                 lower.includes("ninth house") ||
//                 lower.includes("tenth house") ||
//                 lower.includes("eleventh house") ||
//                 lower.includes("twelfth house") ||
//                 lower.includes("jupiter") ||
//                 lower.includes("saturn") ||
//                 lower.includes("mars") ||
//                 lower.includes("mercury") ||
//                 lower.includes("venus") ||
//                 lower.includes("rahu") ||
//                 lower.includes("ketu")
//             );
//         })
//         .join(". ");

//     return (
//         <div className="bg-black/30 rounded-xl p-4 border border-yellow-500/20">

//             <h3 className="text-yellow-400 font-semibold mb-2">
//                 {title}
//             </h3>

//             <p className="text-gray-200 leading-7">
//                 {cleanedText}
//             </p>

//         </div>
//     );
// };
// export default PredictionCard