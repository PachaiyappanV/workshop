"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Modal from "@/components/modal";
import ServiceForm from "@/components/forms/service-form";

type Props = {
  serviceId: string;
};
const EditService = ({ serviceId }: Props) => {
  return (
    <Modal
      title="Edit Service"
      description="Edit the service details and cost."
      className="sm:max-w-3xl"
      trigger={
        <Button className="cursor-pointer" variant="outline" size="icon">
          <Pencil className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      }
    >
      <ServiceForm serviceId={serviceId} />
    </Modal>
  );
};

export default EditService;
