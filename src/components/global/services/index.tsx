"use client";

import { getCustomer } from "@/actions";
import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components/ui/skeleton";
import ServiceItem from "../service-item";

type Props = {
  customerId: string; // actually regNo from the action
};

const Services = ({ customerId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["customer", customerId],
    queryFn: () => getCustomer(customerId),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (!data || data.status !== 200 || !data.customer) {
    return <p className="text-red-500">Failed to load customer data.</p>;
  }

  const services = data.customer.services;

  return (
    <div className="flex flex-col flex-1 gap-4">
      {services.length === 0 ? (
        <p>No services found for this customer.</p>
      ) : (
        services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))
      )}
    </div>
  );
};

export default Services;
