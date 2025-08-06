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
    const customers = (await prisma.customer.findMany()).toSorted((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    return {
      status: 200,
      customers,
    };
  } catch (error) {
    return { status: 500, message: "Failed to fetch customers." };
  }
};

export const getCustomer = async (regNo: string) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        regNo,
      },
      include: {
        services: {
          include: {
            serviceCost: true,
          },
        },
      },
    });

    if (!customer) {
      return { status: 404, message: "Customer not found." };
    }

    return {
      status: 200,
      customer,
    };
  } catch (error) {
    return { status: 500, message: "Failed to fetch customer." };
  }
};
