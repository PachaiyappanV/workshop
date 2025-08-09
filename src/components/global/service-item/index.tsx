import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

type Props = {
  service: {
    serviceType: string;
    serviceDate: string;
    serviceKM: string | null;
    nextServiceKM: string | null;
    expiryDate: string | null;
    sparesDetails: string | null;
    sparesAmount: number | null;
    serviceCharge: number | null;
    totalCost: number | null;
  };
};

const ServiceItem = ({ service }: Props) => {
  const {
    serviceType,
    serviceDate,
    serviceKM,
    nextServiceKM,
    expiryDate,
    sparesDetails,
    sparesAmount,
    serviceCharge,
    totalCost,
  } = service;

  return (
    <div className="flex flex-col md:flex-row border rounded-md p-4 gap-6">
      {/* Left: Service Info */}
      <div className="flex-1">
        <h3 className="font-semibold mb-2">Service Details</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Type</TableCell>
              <TableCell>{serviceType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Date</TableCell>
              <TableCell>
                {new Date(serviceDate).toLocaleDateString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">KM</TableCell>
              <TableCell>{serviceKM || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Next KM</TableCell>
              <TableCell>{nextServiceKM || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Expiry</TableCell>
              <TableCell>
                {expiryDate ? new Date(expiryDate).toLocaleDateString() : "—"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Right: Service Cost */}
      <div className="flex-1">
        <h3 className="font-semibold mb-2">Service Cost</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Spares</TableCell>
              <TableCell>{sparesDetails || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Spares Amount</TableCell>
              <TableCell>₹{sparesAmount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Service Charge</TableCell>
              <TableCell>₹{serviceCharge}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="font-bold">₹{totalCost}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceItem;
