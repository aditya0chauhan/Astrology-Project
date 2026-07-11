import { useTranslation } from 'react-i18next'
const Services = () => {
     const { t } = useTranslation()

  return (
    <button className="mt-3 cursor-pointer relative bg-white/10 font-semibold py-2 rounded-full min-w-[8.5rem] min-h-[1.92rem] group max-w-full flex items-center justify-start hover:bg-amber-400 hover:text-white transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
      <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
        <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
        <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-amber-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
          <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
              <path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
        {t("view")}
      </div>
    </button>
  );
}

export default Services;
