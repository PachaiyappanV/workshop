"use client";

import { useCustomerImage } from "@/hooks/use-customer-image";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

export default function CustomerImageUploader({ regNo }: { regNo: string }) {
  const { data: imageUrl, updateImage } = useCustomerImage(regNo);

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
      onSuccess={async (result) => {
        if (result?.info?.secure_url) {
          await updateImage(result.info.secure_url);
        }
      }}
      options={{
        multiple: false,
        cropping: true,
      }}
    >
      {({ open }) => (
        <Image
          onClick={() => {
            open();
          }}
          src={imageUrl || "/falcon.jpg"}
          alt="Customer"
          width={150}
          height={150}
          className="rounded-md object-cover"
        />
      )}
    </CldUploadWidget>
  );
}
