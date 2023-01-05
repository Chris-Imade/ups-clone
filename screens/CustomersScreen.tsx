import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStack';
import { TabStackParamsList } from '../navigation/TabNavigator';
import FrontImg from "../assets/pic-1.jpeg";
import { Input } from '@rneui/themed';
import { GET_CUSTOMERS } from '../graphql/queries';
import { useQuery } from "@apollo/client";
import { CustomerCard } from '../components';

export type CustomersScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList>,
  NativeStackNavigationProp<RootStackParamsList>
>

const CustomersScreen = () => {
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  const navigation = useNavigation<CustomersScreenNavigationProps>();

  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  
  return (
    <ScrollView style={{ backgroundColor: "#59c1cc"}}>
      <Image 
        source={FrontImg}
        style={tw(`w-full h-64`)}
        resizeMode={'cover'}
      />

      <Input 
        placeholder='Search by Customers'
        value={input}
        onChangeText={setInput}
        containerStyle={tw(`bg-white px-10 pt-5 pb-0`)}
      />

      {data?.getCustomers.map(({ name: ID, value: { email, name } }: CustomerResponse) => (
        <CustomerCard key={ID} name={name} email={email} user_id={ID} />
      ))}
    </ScrollView>
  )
}

export default CustomersScreen;