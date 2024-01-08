import React, { Dispatch, SetStateAction } from "react";

interface step1Type {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setUa: Dispatch<SetStateAction<number>>;
  setBua: Dispatch<SetStateAction<number>>;
}
interface step2Type {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  quality: number;
  setQuality: Dispatch<SetStateAction<number>>;
  estimateValue: number;
  generateEstimate: () => void;
  rateSum: number;
}

interface step3Type {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  estimateValue: number;
  groupedItems: GroupedItemType[];
  setGroupedItems: Dispatch<SetStateAction<GroupedItemType[]>>;
  quality: number;
  rateSum: number;
}
interface step4Type {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  estimateValue: number;
  groupedItems: GroupedItemType[];
  setGroupedItems: Dispatch<SetStateAction<GroupedItemType[]>>;
  quality: number;
  rateSum: number;
  reset: () => void;
}

interface stepType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

interface eventType {
  // other props...
  onSelect: (e: ChangeEvent<HTMLElement>) => void;
}
interface ItemDetails {
  Item: string;
  Category: string;
  Description: string | number; // Allow both string and number for Description
  "Long Description": string;
  Rate: string | number;
  Unit?: string;
}
interface GroupedItemType {
  itemName: string;
  Category: string;
  Selected: boolean;
  items: ItemDetails[];
}

module.exports = {
  step1Type,
  step2Type,
  eventType,
  stepType,
  ItemDetails,
  GroupedItemType,
};