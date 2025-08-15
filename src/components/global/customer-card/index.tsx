import Image from "next/image";
import Link from "next/link";

type Props = {
  customer: {
    name: string;
    id: string;
    regNo: string;
    mobileNo: string;
    modelName: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

const CustomerCard = ({ customer }: Props) => {
  return (
    <Link href={`/customer/${customer.regNo}`}>
      <div className="bg-white/[3%] rounded-lg overflow-hidden relative">
        <div className="relative w-full h-48">
          <Image
            src={customer.image || "/falcon.jpg"}
            alt={customer.name}
            fill
            objectFit="cover"
            className="w-full h-full transform transition-transform duration-300 
          ease-in-out hover:scale-110 hover:cursor-pointer"
          />
        </div>

        <div className=" p-6 ">
          <h2 className="text-2xl capitalize font-semibold">{customer.name}</h2>
          <p className="text-xl text-white/75 uppercase">{customer.regNo}</p>
          <p className="text-md capitalize text-white/50 mt-2">
            {customer.modelName}
          </p>
        </div>
        <div
          className="absolute top-3 left-3 bg-black/30 backdrop-blur 
      px-3 py-1 rounded-lg flex flex-col items-center"
        >
          <p className="text-xl font-bold">
            {new Date(customer.updatedAt).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-white/70">
            {new Date(customer.updatedAt).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CustomerCard;
