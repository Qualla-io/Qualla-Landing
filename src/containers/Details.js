import React from "react";
import ContractDetail from "../components/Details/ContractDetail";
import DaiDetail from "../components/Details/DaiDetail";
import SubscriberDetail from "../components/Details/SubscriberDetail";

export default function Detais() {
  return (
    <>
      <ContractDetail />
      <SubscriberDetail />
      <DaiDetail />
    </>
  );
}
