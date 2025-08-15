import FormGenerator from "@/components/global/form-generator";
import useZodForm from "@/hooks/use-zod-form";
import { customerSchema, Customer } from "./schema";
import { useMutationData } from "@/hooks/use-mutation-data";
import { Button } from "@/components/ui/button";
import { editCustomer, getCustomer, registerCustomer } from "@/actions";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

type Props = {
  isEdit?: boolean;
};

const CustomerForm = ({ isEdit }: Props) => {
  const params = useParams();
  const customerId = params.customerId as string;

  const { mutate, isPending } = useMutationData(
    isEdit ? ["edit-customer"] : ["register-customer"],
    (customer: Customer) =>
      isEdit ? editCustomer(customerId, customer) : registerCustomer(customer),
    () => {},
    isEdit ? [["customer", customerId]] : [["customers"]]
  );

  const { data } = useQuery({
    queryKey: ["customer", customerId],
    queryFn: () => getCustomer(customerId),
    enabled: isEdit,
  });
  const defaultValues = {
    name: data?.customer?.name,
    regNo: data?.customer?.regNo,
    mobileNo: data?.customer?.mobileNo,
    modelName: data?.customer?.modelName,
  };

  const { register, errors, onFormSubmit } = useZodForm(
    customerSchema,
    mutate,
    isEdit ? defaultValues : {}
  );

  return (
    <form onSubmit={onFormSubmit} className="flex flex-col  gap-y-6 p-3">
      <FormGenerator
        inputType="input"
        type="text"
        label="Name"
        placeholder="Enter Customer Name"
        name="name"
        register={register}
        errors={errors}
      />
      <FormGenerator
        inputType="input"
        type="text"
        label="Reg Number"
        placeholder="Enter Reg No"
        name="regNo"
        register={register}
        errors={errors}
      />
      <FormGenerator
        inputType="input"
        type="text"
        label="Mobile Number"
        placeholder="Enter Mobile No"
        name="mobileNo"
        register={register}
        errors={errors}
      />
      <FormGenerator
        inputType="input"
        type="text"
        label="Model Name"
        placeholder="Enter Model Name"
        name="modelName"
        register={register}
        errors={errors}
      />

      <Button
        type="submit"
        disabled={isPending}
        className="text-base w-[30%] cursor-pointer"
        variant="outline"
      >
        {isPending
          ? isEdit
            ? "Editing..."
            : "Registering..."
          : isEdit
          ? "Edit"
          : "Register"}
      </Button>
    </form>
  );
};

export default CustomerForm;
