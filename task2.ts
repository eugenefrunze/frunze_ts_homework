interface IProduct {
    id: number;
    name: string;
    price: number;
    weight: number | string;
}

interface IOrder<T>{
    id: number;
    deliveryAddress: string;
    createdAt: string;
    updatedAt: string;
    products: T;
}

//order
const someOrder: IOrder<IProduct[]> = {
    id: 0,
    deliveryAddress: 'Tighina',
    createdAt: 'Drochia',
    updatedAt: 'Ialoveni',
    products: [
        { id: 0, name: 'Carnatei', price: 42, weight: 0.3}
    ]
}