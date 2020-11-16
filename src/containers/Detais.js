import { Container } from "@material-ui/core";
import React from "react";
import ContractDetail from "../components/ContractDetail";
import DaiDetail from "../components/DaiDetail";
import SubscriberDetail from "../components/SubscriberDetail";

export default function Detais() {
  return (
    <>
      <ContractDetail />
      <SubscriberDetail />
      <DaiDetail />
    </>
  );
}
