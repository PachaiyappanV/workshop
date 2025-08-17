"use server";
import { Customer } from "@/components/forms/customer-form/schema";
import { Service } from "@/components/forms/service-form/schema";
import { prisma } from "@/lib/prisma";

export const registerCustomer = async (customerData: Customer) => {
  try {
    const customer = await prisma.customer.create({
      data: customerData,
    });
    if (customer) {
      return {
        customer,
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

export const editCustomer = async (regNo: string, customerData: Customer) => {
  try {
    const customer = await prisma.customer.update({
      where: {
        regNo,
      },
      data: customerData,
    });
    if (customer) {
      return {
        status: 200,
        message: "Customer updated successfully",
      };
    }
  } catch (error) {
    return { status: 500, message: "Something went wrong." };
  }
};

export const getCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        updatedAt: "desc",
      },
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
          orderBy: {
            updatedAt: "desc",
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

export const addService = async (regNo: string, service: Service) => {
  try {
    const cust = await prisma.customer.findUnique({
      where: {
        regNo,
      },
      select: {
        id: true,
      },
    });
    // Find the last service number for this customer
    const lastService = await prisma.service.findFirst({
      where: { customerId: cust?.id },
      orderBy: { serviceNumber: "desc" },
      select: { serviceNumber: true },
    });

    const nextServiceNumber = lastService ? lastService.serviceNumber + 1 : 1;

    const customer = await prisma.customer.update({
      where: {
        regNo,
      },
      data: {
        services: {
          create: {
            serviceNumber: nextServiceNumber,
            serviceType: service.serviceType,
            serviceDate: service.serviceDate,
            expiryDate: service.expiryDate,
            serviceKM: service.serviceKM,
            nextServiceKM: service.nextServiceKM,
            sparesDetails: service.sparesDetails,
            sparesAmount: service.sparesAmount,
            serviceCharge: service.serviceCharge,
            totalCost: service.totalCost,
          },
        },
      },
    });

    if (customer) {
      return {
        status: 201,
        message: "Service added successfully",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong.",
    };
  }
};

export const editService = async (
  regNo: string,
  serviceId: string,
  service: Service
) => {
  try {
    const customer = await prisma.customer.update({
      where: {
        regNo,
      },
      data: {
        services: {
          update: {
            where: {
              id: serviceId,
            },
            data: {
              serviceType: service.serviceType,
              serviceDate: service.serviceDate,
              expiryDate: service.expiryDate,
              serviceKM: service.serviceKM,
              nextServiceKM: service.nextServiceKM,
              sparesDetails: service.sparesDetails,
              sparesAmount: service.sparesAmount,
              serviceCharge: service.serviceCharge,
              totalCost: service.totalCost,
            },
          },
        },
      },
      include: {
        services: {
          where: {
            id: serviceId,
          },
        },
      },
    });

    if (customer) {
      return {
        status: 200,
        message: `Service ${customer.services[0].serviceNumber} updated successfully`,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong.",
    };
  }
};

export async function getCustomerImage(regNo: string) {
  const customer = await prisma.customer.findUnique({
    where: { regNo },
    select: { image: true },
  });
  return customer?.image || null;
}

export async function updateCustomerImage(regNo: string, imageUrl: string) {
  await prisma.customer.update({
    where: { regNo },
    data: { image: imageUrl },
  });
  return { success: true };
}
