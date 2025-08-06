import CustomerList from "@/components/global/customer-list";

export default function Home() {
  return (
    <div className="container mx-auto px-7 pb-6">
      <h1 className="text-3xl font-bold my-8">Customer List</h1>
      <CustomerList />
    </div>
  );
}
