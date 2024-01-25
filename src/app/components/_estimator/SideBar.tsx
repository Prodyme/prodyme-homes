import React, { useEffect, useState } from 'react'
import { stepType } from './_myTypes';

export const SideBar: React.FC<stepType> = ({ step, setStep, buildUpArea, quality })=> {
  const [qValue, setQValue] = useState("");
  useEffect(() => {
    if (quality === 1) {
      setQValue("Base");
    } else if (quality === 2) {
      setQValue("Classic");
    } else if (quality === 3) {
      setQValue("Premium");
    } else if (quality === 4) {
      setQValue("Luxury");
    } else if (quality === 5) {
      setQValue("Ultra-luxury");
    }
  }, [quality]);
  return (

    <div className="mt-2 flex min-[1280px]:flex-col text-center sticky top-[20px]">
      <div
        className={`${
          step === 1
            ? "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-orange-400 min-[1280px]:rounded-tl-lg min-[1280px]:rounded-bl-lg justify-end items-start gap-2.5 inline-flex text-white text-xl max-sm:text-base font-bold font-['Anek Latin'] max-xl:rounded-t-lg max-xl:rounded-r-lg "
            : "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-zinc-300 min-[1280px]:rounded-tl-lg justify-end items-start gap-2.5 inline-flex text-black text-xl max-sm:text-base font-normal font-['Anek Latin'] max-xl:rounded-tl-lg"
        }`}
      >
        <div className="">{isNaN(buildUpArea) ? 0 : buildUpArea} Sq ft.</div>
        <div className={step === 1 ? " hidden" : "w-[26px] h-[26px] relative max-sm:hidden"}>
          <img
            className="w-[26px] h-[26px] left-0 top-0 object-cover absolute rounded-full border-2 border-black"
            src="images/ok.svg"
            alt="ok"
          />
        </div>
      </div>
      <div
        className={
          step === 1
            ? "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6  min-[1280px]:rounded-bl-lg justify-end items-start gap-2.5 inline-flex text-orange-400 text-xl max-sm:text-base font-normal font-['Anek Latin'] max-xl:rounded-lg"
            : step === 2
            ? "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-orange-400  min-[1280px]:rounded-bl-lg justify-end items-start gap-2.5 inline-flex text-white text-xl max-sm:text-base font-bold font-['Anek Latin']"
            : "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-zinc-300  justify-end items-start gap-2.5 inline-flex text-black text-xl max-sm:text-base font-normal font-['Anek Latin']"
        }
      >

        <div className="">{qValue} </div>
        <div className={step <= 2 ? " hidden" : "w-[26px] h-[26px] relative max-sm:hidden"}>
          <img
            className="w-[26px] h-[26px] left-0 top-0 object-cover absolute rounded-full border-2 border-black"
            src="images/ok.svg"
            alt="ok"
          />
        </div>
      </div>
      <div
        className={
          step <= 2
            ? "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6  min-[1280px]:rounded-bl-lg max-xl:rounded-r-lg justify-end items-start gap-2.5 inline-flex text-orange-400 text-xl max-sm:text-base font-normal font-['Anek Latin'] max-sm:pl-24"
            : step === 3
            ? "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-orange-400  min-[1280px]:rounded-bl-lg max-xl:rounded-r-lg justify-end items-start gap-2.5 inline-flex text-white text-xl max-sm:text-base font-bold font-['Anek Latin'] max-sm:pl-24 max-sm:mx-0 "
            : "w-[300px] max-xl:w-[30vw] h-[80px] px-5 py-6 bg-zinc-300  justify-end items-start gap-2.5 inline-flex text-black text-xl max-sm:text-base font-normal font-['Anek Latin'] max-sm:pl-24 max-sm:mx-0"
        }
      >
        <div className="">Customize Estimator</div>
        <div className={step <= 3 ? " hidden" : "w-[26px] h-[26px] relative max-sm:hidden "}>
          <img
            className="w-[26px] h-[26px] object-cover left-0 top-0 absolute rounded-full border-2 border-black"
            src="images/ok.svg"
            alt="ok"
          />
        </div>
      </div>
    </div>
  );
}
