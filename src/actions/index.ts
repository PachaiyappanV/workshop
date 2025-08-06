"use server";
import { Customer } from "@/components/forms/customer-form/schema";
import { prisma } from "@/lib/prisma";

export const registerCustomer = async (customerData: Customer) => {
  try {
    const customer = await prisma.customer.create({
      data: customerData,
    });
    if (customer) {
      return {
        status: 201,
        message: "Customer registered successfully",
      };
    }
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        status: 400,
        message: "Customer with this regNo or mobileNo already exists.",
      };
    }
    return { success: 500, message: "Something went wrong." };
  }
};

export const getCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return {
      status: 200,
      customers,
    };
  } catch (error) {
    return { status: 500, message: "Failed to fetch customers." };
  }
};
