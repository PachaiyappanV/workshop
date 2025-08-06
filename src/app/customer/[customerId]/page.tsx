"use client";

import { getCustomer } from "@/actions";
import CustomerDetails from "@/components/global/customer-details";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CustomerPage = ({ params }: { params: { customerId: string } }) => {
  const { customerId } = React.use<{ customerId: string }>(params);

  const { data } = useQuery({
    queryKey: ["customer", customerId],
    queryFn: () => getCustomer(customerId),
  });
  const customer = {
    name: data?.customer?.name,
    regNo: data?.customer?.regNo,
    mobileNo: data?.customer?.mobileNo,
    modelName: data?.customer?.modelName,
  };

  return (
    <div>
      <CustomerDetails customer={customer} />
    </div>
  );
};

export default CustomerPage;
