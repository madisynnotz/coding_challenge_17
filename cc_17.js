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

//Task 2: Create a SalesRep Class

class SalesRep {
    constructor(name) {
        this.name = name; // Sales rep's name
        this.clients = []; // Array to store clients (instances of Customer)
    }

    // Method to add a new client (Customer) to the list of clients
    addClient(customer) {
        this.clients.push(customer); // Adds the provided customer to the clients array
    }

    // Method to get the total spent by a specific client by their name
    getClientTotal(name) {
        // Finds the customer by their name in the clients array
        const client = this.clients.find(c => c.name === name);
        
        // If customer is found, return their total spending, otherwise return a message
        if (client) {
            return client.getTotalSpent();
        } else {
            return "Client not found."; // If client does not exist, return this message
        }
    }
}

// Example of creating a sales rep and assigning clients to them
const salesRep = new SalesRep("John");
salesRep.addClient(customer1); // John adds Alice as a client

// Log John's client list and Alice's total spending to the console
console.log(`${salesRep.name} managed a total of $${salesRep.getClientTotal("Alice")}`);

//Task 3: Create a VIPCustomer Class (extends Customer)

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); // Calls the parent class (Customer) constructor to initialize name and email
        this.vipLevel = vipLevel; // Additional property to store the VIP level (e.g. Gold, Platinum)
    }

    // Override the getTotalSpent method to apply a 10% loyalty bonus to the total spent
    getTotalSpent() {
        const totalSpent = super.getTotalSpent(); // Calls the parent class method to get the regular total
        return totalSpent + totalSpent * 0.10; // Adds a 10% bonus to the total spent
    }
}

// Example of creating a VIP customer
const vipCustomer = new VIPCustomer("Bob", "bob@email.com", "Gold");
vipCustomer.addPurchase(200); // Bob makes a purchase of $200
vipCustomer.addPurchase(300); // Bob makes another purchase of $300

// Log Bob's total spending (with bonus) to the console
console.log(`${vipCustomer.name} has spent a total of $${vipCustomer.getTotalSpent()} with bonus.`);