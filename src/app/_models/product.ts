export class Product{
    constructor(public id:string,
                public name:string,
                public price:number,
                public category:ProductCategory,
                public subCategory:ProductSubCategory,
                public description:string,
                public url:string,
                public created_at:Date=new Date(),
                public updated_at:Date=new Date()){}
}

export enum ProductCategory{
    MEN='Men',
    WOMEN='Women',
    CHILDREN='Children',
    BABY='Baby',
    ELECTRONICS='Electronics'
}

export enum ProductSubCategory{
    PANT='PANT',
    SHIRT='Shirts',
    TSHIRTS='T-Shirts',
    MOBILE='Mobile',
    LAPTOP='Laptop',
    TV="TV",
    EARPHONE="Earphone",
    WATCH="Watch",
    SHOES="Shoes",
    HAT="Hats",
    Camera="Camera",
    TOYS='Toys'
}