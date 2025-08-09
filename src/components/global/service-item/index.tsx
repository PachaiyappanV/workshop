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
        <h3 className="font-bold text-lg mb-2">Service Details</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Type</TableCell>
              <TableCell>{serviceType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Date</TableCell>
              <TableCell>
                {new Date(serviceDate).toLocaleDateString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">KM</TableCell>
              <TableCell>{serviceKM || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Next KM</TableCell>
              <TableCell>{nextServiceKM || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Expiry</TableCell>
              <TableCell>
                {expiryDate ? new Date(expiryDate).toLocaleDateString() : "—"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Right: Service Cost */}
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-2">Service Cost</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Spares</TableCell>
              <TableCell>{sparesDetails || "—"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Spares Amount</TableCell>
              <TableCell>₹{sparesAmount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Service Charge</TableCell>
              <TableCell>₹{serviceCharge}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="font-bold">₹{totalCost}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceItem;
