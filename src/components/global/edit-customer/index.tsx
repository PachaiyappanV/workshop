"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import { Pencil } from "lucide-react";
import Modal from "@/components/modal";
import CustomerForm from "@/components/forms/customer-form";

const EditCustomer = () => {
  return (
    <Modal
      title="Edit Customer"
      description="Edit customer Details."
      trigger={
        <Button
          variant="outline"
          className="flex items-center text-base cursor-pointer ml-auto"
        >
          <Pencil className="w-4 h-4" />
          <p>Edit</p>
        </Button>
      }
    >
      <CustomerForm isEdit={true} />
    </Modal>
  );
};

export default EditCustomer;
