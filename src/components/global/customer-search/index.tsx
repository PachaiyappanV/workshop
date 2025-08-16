"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
      className="relative md:w-full max-sm:max-w-[170px] max-w-[350px]"
    >
      <Input
        type="text"
        name="regNo"
        required
        placeholder="Enter RegNo"
        className="pr-10" // extra padding for the icon space
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};

export default CustomerSearch;
