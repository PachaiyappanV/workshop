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
        <Button variant="outline" className="cursor-pointer">
          <Pencil className="w-4 h-4" />
        </Button>
      }
    >
      <ServiceForm serviceId={serviceId} />
    </Modal>
  );
};

export default EditService;
