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
    <div className="flex flex-col sm:flex-row gap-6 sm:justify-between py-8">
      <Image
        src="/falcon.jpg"
        alt="falcon"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />

      <div className="w-full overflow-x-auto hidden sm:block">
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-semibold mb-4 ">Customer Info</h2>
          <EditCustomer />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Reg. No</TableHead>
              <TableHead>Mobile No</TableHead>
              <TableHead>Model Name</TableHead>
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
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex-1 sm:hidden">
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-semibold mb-4 ">Customer Info</h2>
          <EditCustomer />
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Name</TableCell>
              <TableCell className="capitalize">
                {customer.name || "—"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Reg. No</TableCell>
              <TableCell className="uppercase">
                {customer.regNo || "—"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Mobile No</TableCell>
              <TableCell>{customer.mobileNo || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Model Name</TableCell>
              <TableCell className="capitalize">
                {customer.modelName || "—"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerDetails;
