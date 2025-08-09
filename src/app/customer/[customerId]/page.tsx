"use client";

import { getCustomer } from "@/actions";
import AddService from "@/components/global/add-service";
import CustomerDetails from "@/components/global/customer-details";
import Services from "@/components/global/services";
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
    <div className="h-full w-full flex flex-col gap-2">
      <CustomerDetails customer={customer} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold ">Services</h1>
        <AddService />
      </div>

      <Services customerId={customerId} />
    </div>
  );
};

export default CustomerPage;
