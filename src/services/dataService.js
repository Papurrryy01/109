const catalog = [
    {
        "Title": "Orange",
        "category": "Fruits",
        "price": 5.00,
        "image": "orange.png",
        "_id": "1"
    },
    {
        "Title": "Chocolate",
        "category": "Sweets",
        "price": 5.00,
        "image": "chocolate.png",
        "_id": "2"
    },
    {
        "Title": "Milk",
        "category": "Dairy",
        "price": 5.00,
        "image": "Milk.png",
        "_id": "3"
    },
    {
        "Title": "Strawberry",
        "category": "Fruits",
        "price": 5.00,
        "image": "Strawberry.png",
        "_id": "4"
    }
];

class DataService {
    getProducts() {
        return catalog;
    }
}
export default DataService;