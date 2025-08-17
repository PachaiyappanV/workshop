import {
  MutationFunction,
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<any, any>,
  onSuccess?: () => void,
  queryKeys?: string[][]
) => {
  const client = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess(data) {
      if (onSuccess) onSuccess();

      if (data?.status == 200 || data?.status == 201) {
        toast.success(data?.message);
        console.log(data);
        if (data?.customer?.regNo) {
          router.push(`/customer/${data?.customer?.regNo}`);
        }
      } else {
        toast.error(data?.message);
      }
    },
    onSettled: async () => {
      if (queryKeys && queryKeys[0]) {
        await client.invalidateQueries({
          queryKey: queryKeys[0],
          exact: true,
        });
      }

      if (queryKeys && queryKeys[1]) {
        await client.invalidateQueries({
          queryKey: queryKeys[1],
          exact: true,
        });
      }
    },
  });

  return { mutate, isPending };
};
