import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { CustomersScreenNavigationProps } from '../screens/CustomersScreen';

type Props = {
  name: string;
  email: string;
  user_id: string;
}

const CustomerCard = ({ name, email, user_id }: Props) => {
  const { loading, error, orders } = useCustomerOrders(user_id); 
  const tw = useTailwind();
  
  const navigation = useNavigation<CustomersScreenNavigationProps>();

  return (
    <View>CustomerResponse</View>
  )
}

export default CustomerCard;