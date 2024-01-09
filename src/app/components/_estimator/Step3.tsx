"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { GroupedItemType, ItemDetails, step3Type } from "./_myTypes";
// import * as xlsx from "xlsx";

const Step3: React.FC<step3Type> = ({
  step,
  setStep,
  estimateValue,
  groupedItems,
  setGroupedItems,
  quality,
  totalRate,
  costPerSqft
}) => {
  const [popUpFormFlag, setPopUpFormFlag] = useState(false);
  const [popUpFormData, setPopUpFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNo: "",
  });
  const [info, setInfo] = useState({ desc: "", name: "" });
  const [showOptions, setShowOptions] =
    useState<{ sectionId: number; showOptions: boolean }[]>();

  useEffect(() => {
    // try {
    //   fetch("https://mocki.io/v1/ac384b6b-81b2-483e-89ab-507a48c4f516")
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);

  // useEffect(() => {
  //   let options: { sectionId: number; showOptions: boolean }[] = [];
  //   data?.map((d) => {
  //     options.push({ sectionId: d.sectionID, showOptions: false });
  //   });
  //   setShowOptions(options);
  // }, [data]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPopUpFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(popUpFormData);
  }, [popUpFormData]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", phoneNo: "" };

    if (!popUpFormData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(popUpFormData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!/^\d{10}$/.test(popUpFormData.phoneNo)) {
      newErrors.phoneNo = "Invalid phone number format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform actions with the form data here
      console.log("Form Data:", popUpFormData);
      setStep(step + 1)
    } else {
      console.log("Form validation failed");
    }
  };
  const popUpForm = () => {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-opacity-50 bg-gray-950 z-40">
        <form
          className="flex flex-col justify-center items-center w-[300px] h-[500px] gap-[23px] bg-gray-950 text-white font-medium text-lg border border-orange-400 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="justify-center items-center flex flex-col m-3 ">
            <label className="my-1" htmlFor="username">
              Username:
            </label>
            <input
              placeholder="Username"
              className="border rounded-lg p-1 text-black"
              type="text"
              id="username"
              name="username"
              defaultValue={popUpFormData.username}
              onChange={handleChange}
            />
            <span className="text-red-500">{errors.username}</span>
          </div>

          <div className="justify-center items-center flex flex-col m-3 ">
            <label className="my-1" htmlFor="email">
              Email:{" "}
            </label>
            <input
              placeholder="useremail@mail.com"
              className="border rounded-lg p-1 text-black"
              type="email"
              id="email"
              name="email"
              defaultValue={popUpFormData.email}
              onChange={handleChange}
            />{" "}
            <span className="text-red-500">{errors.email}</span>
          </div>

          <div className="justify-center items-center flex flex-col m-3">
            <label className="my-1" htmlFor="phoneNo">
              Phone Number:{" "}
            </label>
            <input
              placeholder="Phone Number"
              className="border rounded-lg p-1 text-black"
              type="tel"
              id="phoneNo"
              name="phoneNo"
              defaultValue={popUpFormData.phoneNo}
              onChange={handleChange}
            />{" "}
            <span className="text-red-500">{errors.phoneNo}</span>
          </div>

          <button
            type="submit"
            className="w-[135px] px-10 py-2.5 bg-orange-400 rounded-[20px] justify-center items-center gap-2.5 flex transition-transform transform hover:scale-110"
          >
            <div className="text-white text-base font-medium font-['Anek Latin']">
              Submit
            </div>
          </button>
        </form>
        <button
          className="text-red-500 bg-white font-bold text-lg mt-[-500px] ml-[-20px] rounded-full border border-red-400 px-2 "
          onClick={() => setPopUpFormFlag(false)}
        >
          X
        </button>
      </div>
    );
  };
  const handleProceed = () => {
    setPopUpFormFlag(true);
  };

  const handleOptions = (items: GroupedItemType) => {
    let temp = [...groupedItems];
    temp.map((d) => {
      if (d.itemName === items.itemName) {
        if(d.Selected === true){
          d.Selected = false;
          setGroupedItems(temp);
          return ;
        }
        d.Selected = true;
      } else {
        d.Selected = false;
      }
    });
    setGroupedItems(temp);
  };

  const onChangeHandle = (item: ItemDetails) => {
    let temp = [...groupedItems];

    temp.map((d) => {
      if (d.Selected === true) {
        d.Selected = false;
        d.Category = item.Category;
      }
    });
    setGroupedItems(temp);
  };

  const handleReset = () => {
    let temp = [...groupedItems];

    temp.map((d) => {
      let q = "";
      if (quality === 1) {
        q = "Base";
      } else if (quality === 2) {
        q = "Classic";
      } else if (quality === 3) {
        q = "Premium";
      } else if (quality === 4) {
        q = "Luxury";
      } else {
        q = "Ultra-luxury";
      }
      d.Selected = false;
      d.Category = q;
    });
    setGroupedItems(temp);
  };

  // const readUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   if (e.target.files) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const data = e.target?.result;
  //       const workbook = xlsx.read(data, { type: "array" });
  //       const sheetName = workbook.SheetNames[1];
  //       const worksheet = workbook.Sheets[sheetName];
  //       const json = xlsx.utils.sheet_to_json(worksheet);
  //       console.log(json);
  //     };
  //     reader.readAsArrayBuffer(e.target.files[0]);
  //   }
  // };

  const showDesc = (items: GroupedItemType) => {
    items.items.map((item) => {
      if (items.Category === item.Category) {
        if (items.itemName === info.name) {
          setInfo({ desc: "", name: "" });
          return;
        }
        setInfo({ desc: item["Long Description"], name: items.itemName });
      }
    });
  };

  return (
    <div
      className={` flex-col justify-start items-start gap-[23px] flex w-[899px] max-xl:w-[90vw] h-auto p-5 pt-3 pb-6 bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg border border-orange-400  ${
        step !== 3 ? "hidden" : ""
      }`}
    >
      {popUpFormFlag && popUpForm()}
      {/* <input type="file" accept=".xls,.xlsx" onChange={readUploadFile} /> */}
      <span className="text-center text-black text-sm font-normal font-['Anek Latin']">
        Step 3/5
      </span>
      <div className="grid grid-cols-3 gap-4 max-lg:flex max-lg:flex-wrap justify-between self-start items-start ">
        {groupedItems?.map((d, i) => {
          return (
            <>
              <div className="  max-sm:mx-0 max-lg:w-[300px]  my-5 flex-col justify-start items-start gap-5 inline-flex relative">
                <div className="self-stretch justify-between items-center inline-flex max-sm:flex-col text-wrap text-left max-sm:items-start">
                  <div className="flex-col justify-start items-start inline-flex text-left">
                    <div className="text-black text-2xl font-normal font-['Anek Latin'] max-sm:w-[80vw]">
                      {d.itemName}
                    </div>
                    {/* <div className="text-black text-sm font-normal font-['Anek Latin']">
                      Rathi, Kamdhenu or equivalent
                    </div> */}
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleOptions(d)}
                      className="transition-transform transform hover:scale-110 w-[30px] object-contain"
                    >
                      <img src="images/pen.svg" alt="pen" />
                    </button>
                    <button
                      onClick={() => showDesc(d)}
                      className="transition-transform transform hover:scale-110 w-[30px] object-contain"
                    >
                      <img src="images/info.svg" alt="Detailed Description" />
                    </button>
                    {info.name === d.itemName && (
                      <div
                        className={`absolute z-50 font-normal bg-orange-50 mt-8 justify-center m-auto p-1 w-[400px]   max-xl:ml-[-25vw] max-sm:mx-2 max-sm:w-[90vw] max-sm:left-[2vw]  rounded-xl text-wrap ${
                          (i + 1) % 3 === 0
                            ? "ml-[-350px] max-xl:ml-[-25vw]"
                            : ""
                        }`}
                      >
                        {info.desc}
                      </div>
                    )}

                    <div
                      className={`${
                        d.Selected === true
                          ? `absolute z-50 font-normal bg-gray-50 mt-28 justify-center m-auto p-1 w-[400px]   max-xl:ml-[-25vw] max-sm:mx-2 max-sm:w-[85vw] max-sm:left-[2vw]  rounded-xl text-wrap ${
                              (i + 1) % 3 === 0
                                ? "ml-[-350px] max-xl:ml-[-25vw]"
                                : ""
                            }`
                          : "hidden"
                      }`}
                    >
                      {" "}
                      <span className="font-bold text-orange-500 text-2xl">
                        Choose product
                      </span>
                      {d.items.map((item, i) => {
                        return (
                          <div
                            className="my-5  flex flex-col m-auto justify-center"
                            key={i}
                          >
                            <label
                              className="bg-gradient-to-r bg-white
        hover:from-amber-50 hover:via-amber-100 
        hover:to-amber-50 text-[1rem] font-normal 
        justify-center m-auto p-1 w-[300px]  max-sm:m-2 max-sm:w-[80vw]
        hover:shadow-[0_10px_20px_rgba(255,193,150,0.9)]
        shadow-[0_10px_20px_rgba(231,229,228,0.9)]
        rounded-xl text-wrap"
                              htmlFor={i.toString()}
                            >
                              {item.Description}
                            </label>
                            <input
                              type="radio"
                              name={item.Item}
                              value={item.Rate}
                              id={i.toString()}
                              onClick={() => onChangeHandle(item)}
                              className="hidden"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleOptions(d)}
                  className="w-[240px] max-sm:w-[200px] h-[50px] p-2.5 bg-neutral-100 rounded-lg border border-orange-400 justify-start items-center gap-2.5 inline-flex transition-transform transform hover:scale-110"
                >
                  <div className="grow shrink basis-0 ">
                    {d.items.map((i) => {
                      if (d.Category === i.Category) {
                        return (
                          <span>
                            <span className="text-black text-sm font-bold font-['Anek Latin']">
                              INR
                            </span>{" "}
                            {i.Rate}
                            <span className="text-black text-sm font-light font-['Anek Latin']">
                              {" "}
                              {i.Unit}
                            </span>
                          </span>
                        );
                      }
                    })}
                  </div>
                </button>

                {(i + 1) % 3 !== 0 && i !== groupedItems.length - 1 && (
                  <div className=" max-lg:hidden w-[0px] h-[120px] absolute right-0 top-0 origin-top-left border border-stone-300"></div>
                )}
              </div>
            </>
          );
        })}
      </div>
      <div className="w-[800px] h-[0px] max-xl:w-[80vw] border border-stone-300"></div>

      <button
        onClick={handleReset}
        className="h-10 px-10 py-2.5 bg-white rounded-[20px] border border-orange-400 justify-center items-center gap-2.5 inline-flex transition-transform transform hover:scale-110"
      >
        <div className="text-orange-400 text-base font-normal font-['Anek Latin']">
          Reset Estimate
        </div>
      </button>
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div>
          <span className="text-orange-400 text-6xl font-bold font-['Anek Latin']">
            INR {costPerSqft}{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Anek Latin']">
            per sqft
          </span>
        </div>
        <div className="text-black text-2xl font-normal font-['Anek Latin']">
          Approximately {estimateValue} for your BUA (Built-Up-Area)
        </div>
      </div>
      <div className="w-[800px] h-[0px] max-xl:w-[60vw] border border-stone-300"></div>
      <div className="justify-start items-start gap-5 inline-flex flex-wrap">
        <button
          onClick={() => setStep(step - 1)}
          className="w-[113px] px-10 py-2.5 bg-white rounded-[20px] border border-orange-400 justify-center items-center gap-2.5 flex transition-transform transform hover:scale-110"
        >
          <div className="text-orange-400 text-base font-normal font-['Anek Latin']">
            Back
          </div>
        </button>
        <button
          onClick={handleProceed}
          className="w-[135px] px-10 py-2.5 bg-orange-400 rounded-[20px] justify-center items-center gap-2.5 flex transition-transform transform hover:scale-110"
        >
          <div className="text-white text-base font-normal font-['Anek Latin']">
            Proceed
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step3;
