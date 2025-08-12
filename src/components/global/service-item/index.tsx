import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import EditService from "../edit-service";

type Props = {
  service: {
    id: string;
    serviceType: string;
    serviceDate: string;
    serviceKM: string | null;
    nextServiceKM: string | null;
    expiryDate: string | null;
    sparesDetails: string | null;
    sparesAmount: number | null;
    serviceCharge: number | null;
    totalCost: number | null;
    serviceNumber: number;
  };
};

const ServiceItem = ({ service }: Props) => {
  const {
    id,
    serviceType,
    serviceDate,
    serviceKM,
    nextServiceKM,
    expiryDate,
    sparesDetails,
    sparesAmount,
    serviceCharge,
    totalCost,
    serviceNumber,
  } = service;

  return (
    <div className="border rounded-md p-4 flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">Service {serviceNumber || 0}</p>
        <EditService serviceId={id} />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Service Info */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 ">Details</h3>
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
          <h3 className="font-bold text-lg mb-2">Cost</h3>
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
    </div>
  );
};

export default ServiceItem;
