import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import EditCustomer from "../edit-customer";

type Props = {
  customer: {
    name: string | undefined;
    regNo: string | undefined;
    mobileNo: string | undefined;
    modelName: string | undefined;
  };
};

const CustomerDetails = ({ customer }: Props) => {
  return (
    <div className="flex gap-6 justify-between py-8">
      <Image
        src="/falcon.jpg"
        alt="falcon"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />

      <div className="w-full overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Customer Info</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Reg. No</TableHead>
              <TableHead>Mobile No</TableHead>
              <TableHead>Model Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="capitalize">
                {customer.name || "—"}
              </TableCell>
              <TableCell className="uppercase">
                {customer.regNo || "—"}
              </TableCell>
              <TableCell>{customer.mobileNo || "—"}</TableCell>
              <TableCell className="capitalize">
                {customer.modelName || "—"}
              </TableCell>
              <TableCell className="text-right">
                <EditCustomer />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerDetails;
