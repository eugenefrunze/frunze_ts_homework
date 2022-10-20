class Product {
    constructor(id: number, name: string, price: number, weight: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
    }

    id: number;
    name: string;
    price: number;
    weight: number;
}

class Order {
    constructor(id: number, deliveryAddress: string, createdAt: string, updatedAt: string, products: Product[]){
        this.id = id;
        this.deliveryAddress = deliveryAddress;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.products = products;
    }
    id: number;
    deliveryAddress: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
}