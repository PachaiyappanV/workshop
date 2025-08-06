"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import Modal from "@/components/modal";
import CustomerForm from "@/components/forms/customer-form";

const RegisterCustomer = () => {
  return (
    <Modal
      title="Register Customer"
      description="Fill in the details to register a new customer."
      trigger={
        <Button
          variant="outline"
          className=" flex items-center text-base gap-2 py-6 px-4 rounded-xl cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Register Customer
        </Button>
      }
    >
      <CustomerForm />
    </Modal>
  );
};

export default RegisterCustomer;
