import { writeFileSync, readFileSync } from 'fs';

export default User;


class User {
    constructor(id, username, password, email, phone, balance) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.balance = balance;
        this.tickets = [];
    }

    buyTicket(eventTicket) {
        if (this.balance >= eventTicket.price) {
            this.tickets.push(eventTicket);
            this.balance -= eventTicket.price;
            console.log(`Ticket purchased for ${eventTicket.eventName}. Remaining balance: $${this.balance}`);
        } else {
            console.log(`Insufficient funds to buy a ticket for ${eventTicket.eventName}`);
        }

class Main {
    constructor() {
        this.eventTickets = [];
        this.users = [];
        this.admin = new Admin("admin", "adminpass"); // Default admin account
        this.currentUser = null;
    }

    addEventTicket(eventTicket) {
        this.eventTickets.push(eventTicket);
    }

    createUser(id, username, password, email, phone, balance) {
        const user = new User(id, username, password, email, phone, balance);
        this.users.push(user);
        return user;
    }

    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            this.currentUser = user;
            console.log(`Logged in as ${user.username}`);
            return true;
        }

        if (this.admin.username === username && this.admin.password === password) {
            this.currentUser = this.admin;
            console.log(`Logged in as Admin ${this.admin.username}`);
            return true;
        }

        console.log("Invalid username or password");
        return false;
    }

    buyTicket(eventId) {
        if (this.currentUser instanceof User) {
            const eventTicket = this.eventTickets.find(et => et.id === eventId);

            if (eventTicket) {
                this.currentUser.buyTicket(eventTicket);
            } else {
                console.log("Invalid event ticket ID");
            }
        } else {
            console.log("Only buyers can purchase tickets.");
        }
    }

    viewPurchasedTickets() {
        if (this.currentUser instanceof Admin) {
            this.currentUser.viewPurchasedTickets(this.users);
        } else {
            console.log("Only admins can view purchased tickets.");
        }
    }

    saveDataToJson() {
        const dataToSave = {
            eventTickets: this.eventTickets,
            users: this.users
        };
        const json = JSON.stringify(dataToSave, null, 2);
        writeFileSync('data.json', json);
        console.log('Data saved to data.json');
    }

    loadDataFromJson() {
        try {
            const data = readFileSync('data.json', 'utf8');
            const parsedData = JSON.parse(data);

            this.eventTickets = parsedData.eventTickets.map(eventTicket => Object.assign(new EventTicket(), eventTicket));
            this.users = parsedData.users.map(user => Object.assign(new User(), user));

            console.log('Data loaded from data.json');
        } catch (error) {
            console.error('Error loading data from data.json:', error.message);
        }
    }

  }
      }
    }