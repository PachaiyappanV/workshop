"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Modal from "@/components/modal";
import ServiceForm from "@/components/forms/service-form";

const AddService = () => {
  return (
    <Modal
      title="Add Service"
      description="Fill in the details to add a new service."
      className=" sm:max-w-xl md:max-w-3xl max-sm:px-2"
      trigger={
        <Button className="cursor-pointer" variant="outline" size="icon">
          <Plus className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      }
    >
      <ServiceForm />
    </Modal>
  );
};

export default AddService;
