const PremiumLock = ({
  user,
  title = "Premium Feature",
  children,
}) => {
 
  const hasPremiumAccess =  user?.plan?.trim() === "Premium";

  if (!hasPremiumAccess){
    return (
      <div className="rounded-2xl border border-amber-400/30 bg-slate-900 p-8 text-center">
        <h2 className="text-2xl font-bold text-amber-300">
          🔒{title}
        </h2>

        <p className="mt-3 text-slate-300">
          {title} is available only for Premium Members.
        </p>

        <button className="mt-6 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300">
          Upgrade to Premium
        </button>
      </div>
    );
  }

  return children;
};

export default PremiumLock;