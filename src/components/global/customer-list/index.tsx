"use client";
import { getCustomers } from "@/actions";
import { useQuery } from "@tanstack/react-query";
import CustomerCard from "../customer-card";

const CustomerList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });
  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8  min-w-full mt-8">
      {data?.customers?.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </section>
  );
};

export default CustomerList;
