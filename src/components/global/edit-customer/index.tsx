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
        <Button className="cursor-pointer" variant="outline" size="icon">
          <Pencil className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      }
    >
      <CustomerForm isEdit={true} />
    </Modal>
  );
};

export default EditCustomer;
