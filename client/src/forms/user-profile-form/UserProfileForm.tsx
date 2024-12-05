import { Form } from 'react-hook-form';
import { z } from 'zod';
const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, 'name is required'),
  addressLine1: z.string().min(1, 'Address Line 1 is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  isLoading: Boolean;
  onSave: (userProfileData: UserFormData) => void;
};

const UserProfileForm = ({ onSave, isLoading }) => {
  return <Form></Form>;
};

export default UserProfileForm;
