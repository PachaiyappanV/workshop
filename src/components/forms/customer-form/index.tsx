import FormGenerator from "@/components/global/form-generator";
import useZodForm from "@/hooks/use-zod-form";
import { customerSchema, Customer } from "./schema";
import { useMutationData } from "@/hooks/use-mutation-data";
import { Button } from "@/components/ui/button";
import { registerCustomer } from "@/actions";

const CustomerForm = () => {
  const { mutate, isPending } = useMutationData(
    ["register-customer"],
    (customer: Customer) => registerCustomer(customer),
    () => {},
    [["customers"]]
  );

  const { register, errors, onFormSubmit } = useZodForm(customerSchema, mutate);
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
        {isPending ? "Registering..." : "Submit"}
      </Button>
    </form>
  );
};

export default CustomerForm;
