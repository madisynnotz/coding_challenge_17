// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name; // Customer's name
        this.email = email; // Customer's email
        this.purchaseHistory = []; // Array to store the customer's purchases
    }

    // Method to add a purchase to the purchase history
    addPurchase(amount) {
        this.purchaseHistory.push(amount); // Adds the purchase amount to the history array
    }

    // Method to calculate the total amount spent by the customer
    getTotalSpent() {
        // Sums up all purchase amounts in the purchaseHistory array
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Example of creating a new customer and adding purchases
const customer1 = new Customer("Alice", "alice@email.com");
customer1.addPurchase(100); // Alice makes a purchase of $100
customer1.addPurchase(50); // Alice makes a purchase of $50

// Log Alice's total spending to the console
console.log(`${customer1.name} has spent a total of $${customer1.getTotalSpent()}`);