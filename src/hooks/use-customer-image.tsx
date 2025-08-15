import { getCustomerImage, updateCustomerImage } from "@/actions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useCustomerImage(customerId: string) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["customerImage", customerId],
    queryFn: () => getCustomerImage(customerId),
  });

  const mutation = useMutation({
    mutationFn: (url: string) => updateCustomerImage(customerId, url),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customerImage", customerId],
      });
    },
  });

  return { ...query, updateImage: mutation.mutateAsync };
}
