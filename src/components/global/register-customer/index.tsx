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
        <div>
          <Button
            variant="outline"
            className="hidden sm:flex  items-center text-base cursor-pointer "
          >
            <Plus className="h-[1.2rem] w-[1.2rem]" />
            <p>Register</p>
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer sm:hidden"
            size={"icon"}
          >
            <Plus className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      }
    >
      <CustomerForm />
    </Modal>
  );
};

export default RegisterCustomer;
