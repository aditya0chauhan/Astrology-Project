import { useNavigate } from "react-router-dom";


const PremiumLock = ({
  user,
  title = "Premium Feature",
  children,
}) => {

  const navigate = useNavigate();
  const handleUpgrade = () => {
    navigate("/account");
  };
  const hasPremiumAccess = user?.plan?.trim() === "Silver";

  if (!hasPremiumAccess) {
    return (
      <div className="rounded-2xl border border-amber-400/30 bg-slate-900 p-8 text-center">
        <h2 className="text-2xl font-bold text-amber-300">
          🔒{title}
        </h2>

        <p className="mt-3 text-slate-300">
          {title} अभी सदस्यता लें
        </p>

        <button
          onClick={handleUpgrade}
          className="mt-6 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300"
        >
          Upgrade to Premium
        </button>
      </div>
    );
  }

  return children;
};

export default PremiumLock;