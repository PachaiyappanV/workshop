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
        <Button
          variant="outline"
          className="flex  items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </Button>
      }
    >
      <ServiceForm />
    </Modal>
  );
};

export default AddService;
