import React from "react";
import { step4Type, stepType } from "./_myTypes";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFFile } from "./_components/PDFFile";

export const Step4: React.FC<step4Type> = ({
  step,
  setStep,
  estimateValue,
  groupedItems,
  setGroupedItems,
  quality,
  totalRate,
  reset,
  costPerSqft,
}) => {
  const handleProceed = () => {
    reset();
  };

  return (
    <>
      <div
        className={`w-[899px] max-xl:w-[90vw] h-auto gap-[30px] pt-3  pb-6 bg-white rounded-bl-lg rounded-br-lg border border-orange-400 flex-col justify-center items-center inline-flex  ${
          step !== 4 ? "hidden" : ""
        }`}
      >
        <div className="w-[899px] h-auto" >
          <PDFFile
            step={step}
            setStep={setStep}
            estimateValue={estimateValue}
            groupedItems={groupedItems}
            setGroupedItems={setGroupedItems}
            quality={quality}
            totalRate={totalRate}
            costPerSqft={costPerSqft}
          />
        </div>
        <div className="justify-center items-center gap-5 inline-flex w-[80vw] flex-wrap">
          <PDFDownloadLink
            document={
              <PDFFile
                step={step}
                setStep={setStep}
                estimateValue={estimateValue}
                groupedItems={groupedItems}
                setGroupedItems={setGroupedItems}
                quality={quality}
                totalRate={totalRate}
                costPerSqft={costPerSqft}
              />
            }
            fileName="Generated Estimate"
            className="w-[200px] px-10 py-2.5 bg-white rounded-[20px] border border-orange-400 justify-center items-center gap-2.5 flex transition-transform transform hover:scale-110"
          >
            <div className="text-orange-400 text-base font-normal font-['Anek Latin']">
              Download PDF
            </div>
          </PDFDownloadLink>
          <button
            onClick={handleProceed}
            className="w-[300px] px-10 py-2.5 bg-orange-400 rounded-[20px] justify-center items-center gap-2.5 flex transition-transform transform hover:scale-110"
          >
            <div className="text-white text-base font-normal font-['Anek Latin']">
              Generate New Budget
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
