import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    // onSuccess: ({ user }) => {
    onSuccess: () => {
      toast.success('User successfully updated');
      // The following line of code is for immediately updating the avatar if it doesn't happen
      // queryClient.setQueryData(['user'], user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
