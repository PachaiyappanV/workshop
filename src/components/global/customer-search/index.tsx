"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const CustomerSearch = () => {
  const router = useRouter();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const regNo = formData.get("regNo") as string;
    router.push(`/customer/${regNo.toLowerCase()}`);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex items-center gap-x-2 w-full max-w-[400px]"
    >
      <Input type="text" name="regNo" required placeholder="Enter RegNo" />
      <Button className="cursor-pointer" type="submit" variant="outline">
        Search
      </Button>
    </form>
  );
};

export default CustomerSearch;
