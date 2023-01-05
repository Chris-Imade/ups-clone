import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from '../graphql/queries';

const useCustomerOrders = (user_id: string) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const { loading, error, data } = useQuery(GET_ORDERS);

    useEffect(() => {
        if(!data) return;

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Lat: value.Lat,
            Lng: value.Lng,
            Address: value.Address,
            City: value.City
        }))

        const customerOrders = orders.filter((order) => order.trackingItems.customer_id === user_id);

        setOrders(customerOrders);
    }, [data, user_id])
  return { loading, error, orders };
}

export default useCustomerOrders;