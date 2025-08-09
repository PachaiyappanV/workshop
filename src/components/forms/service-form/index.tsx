"use client";

import FormGenerator from "@/components/global/form-generator";
import useZodForm from "@/hooks/use-zod-form";
import { useMutationData } from "@/hooks/use-mutation-data";
import { Button } from "@/components/ui/button";
import { addService } from "@/actions";
import { Service, serviceSchema } from "./schema";
import { useParams } from "next/navigation";

const ServiceForm = () => {
  const params = useParams();
  const customerId = params.customerId as string;
  const { mutate, isPending } = useMutationData(
    ["add-service"],
    (service: Service) => addService(customerId, service),
    () => {},
    [["customer", customerId]]
  );

  const { register, errors, onFormSubmit } = useZodForm(serviceSchema, mutate);
  return (
    <form onSubmit={onFormSubmit} className="flex gap-4">
      <div className="flex flex-col  gap-y-6 p-3 w-1/2 ">
        <FormGenerator
          inputType="input"
          type="text"
          label="Service Type"
          placeholder="Enter Service Type"
          name="serviceType"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="date"
          label="Service Date"
          placeholder="Enter Service Date"
          name="serviceDate"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="text"
          label="ServiceKM"
          placeholder="Enter ServiceKM"
          name="serviceKM"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="text"
          label="Next ServiceKM"
          placeholder="Enter Next ServiceKM"
          name="nextServiceKM"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="date"
          label="Expiry Date"
          placeholder="Enter Expiry Date"
          name="expiryDate"
          register={register}
          errors={errors}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="text-base w-[30%] cursor-pointer"
          variant="outline"
        >
          {isPending ? "Submitting" : "Submit"}
        </Button>
      </div>
      <div className="flex flex-col w-1/2  gap-y-6 p-3">
        <FormGenerator
          inputType="input"
          type="text"
          label="Spares Details"
          placeholder="Enter spares details"
          name="sparesDetails"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="number"
          label="Spares Amount"
          placeholder="Enter spares amount"
          name="sparesAmount"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="number"
          label="Service Charge"
          placeholder="Enter service charge"
          name="serviceCharge"
          register={register}
          errors={errors}
        />
        <FormGenerator
          inputType="input"
          type="number"
          label="Total Cost"
          placeholder="Enter total cost"
          name="totalCost"
          register={register}
          errors={errors}
        />
      </div>
    </form>
  );
};

export default ServiceForm;
