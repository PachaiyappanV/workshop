import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type Props = {
  customer: {
    name: string | undefined;
    regNo: string | undefined;
    mobileNo: string | undefined;
    modelName: string | undefined;
  };
  onEdit?: () => void; // Optional edit handler
};

const CustomerDetails = ({ customer, onEdit }: Props) => {
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
                <Button variant="outline" size="sm" onClick={onEdit}>
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerDetails;
