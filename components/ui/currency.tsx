"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface ICurrencyProps {
  value?: string | number;
}

const Currency: React.FC<ICurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null
  }
  return <div className="">{formatter.format(Number(value))}</div>;
};

export default Currency;
