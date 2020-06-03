import react from 'react';

class Car 
{
    id: number;
    brand: string;
    make: string;
    year: number;
    imageUrl: string;
    price: number;
    isNew: boolean;
    constructor(id: number, brand: string, make: string, year: number, imageUrl: string, price: number, isNew: boolean){
        this.id = id;
        this.brand = brand;
        this.make = make;
        this.year = year;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isNew = isNew;
    }
}

export default Car;