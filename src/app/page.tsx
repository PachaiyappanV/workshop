import CustomerList from "@/components/global/customer-list";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-8">Customers</h1>
      <CustomerList />
    </div>
  );
}
