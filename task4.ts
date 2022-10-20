enum PAYMENT_METHODS {
    BANK_TRANSFER,
    OTHERS
}

//the interface
interface IRespProcessor<T>
{
    lastPage: boolean;
    numberOfPages: number;
    data: T
}

interface IProduct {
    id: number;
    name: string
    price: number;
    weight: string | number
}

interface IOrder {
    id: number;
    deliveryAddress: string
    paymentMethod: PAYMENT_METHODS;
    isNewCustomer: boolean;
}

// responces for cheking
const firstResponse: IRespProcessor<IProduct[]> = {
    lastPage: true,
    numberOfPages: 20,
    data: [
        { id: 1, name: 'Product1', price: 20, weight: '20g'},
        { id: 2, name: 'Product2', price: 30, weight: 3}
    ]
};

const secondResponse: IRespProcessor<IOrder> =  {
    lastPage: false,
    numberOfPages: 10,
    data: {
        id: 1,
        deliveryAddress: 'Chisinau',
        paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
        isNewCustomer: true
    }
}

