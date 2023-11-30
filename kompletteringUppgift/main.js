import { createInterface } from 'readline';
import EventTicket, { saveData as _saveData, loadData as _loadData } from 'EventTicket.js';
import User, { saveData as __saveData, loadData as __loadData } from 'User.js';

class Program {
    constructor() {
        this.users = [];
        this.eventTickets = [];
        this.currentUser = null;
        this.rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    saveData() {
        __saveData(this.users);
        _saveData(this.eventTickets);
    }

    loadData() {
        this.users = __loadData();
        this.eventTickets = _loadData();
    }

    createUserAccount() {
        const id = this.users.length + 1;
        const username = this.rl.questionSync('Enter a username: ');
        const password = this.rl.questionSync('Enter a password: ');
        const email = this.rl.questionSync('Enter an email address: ');
        const phone = this.rl.questionSync('Enter a phone number: ');

        const newUser = new User(id, username, password, email, phone);
        this.users.push(newUser);
        console.log('Account created successfully!');
    }

    login() {
        const username = this.rl.questionSync('Enter your username: ');
        const password = this.rl.questionSync('Enter your password: ');

        this.currentUser = this.users.find(u => u.username === username && u.password === password);
        if (this.currentUser) {
            console.log(`Welcome, ${this.currentUser.username}!`);
        } else {
            console.log('Invalid username or password. Please try again.');
        }
    }

    buyTicket() {
        if (this.currentUser) {
            const id = this.eventTickets.length + 1;
            const eventName = this.rl.questionSync('Enter the event name: ');
            const price = parseFloat(this.rl.questionSync('Enter the ticket price: '));
            const eventTime = this.rl.questionSync('Enter the event time: ');

            const newTicket = new EventTicket(id, eventName, price, eventTime, this.currentUser.id);
            this.eventTickets.push(newTicket);

            console.log('Ticket purchased successfully!');
        } else {
            console.log('You need to log in first.');
        }
    }

    viewPurchasedTickets() {
        if (this.currentUser && this.currentUser.id) {
            const userTickets = this.eventTickets.filter(ticket => ticket.buyerId === this.currentUser.id);
            console.log('Your purchased tickets:');
            userTickets.forEach(ticket => {
                console.log(`Event: ${ticket.eventName}, Price: ${ticket.price}, Time: ${ticket.eventTime}`);
            });
        } else {
            console.log('You need to log in first.');
        }
    }

    run() {
        this.loadData();

        while (true) {
            console.log('\n1. Create Account\n2. Log In\n3. Buy Ticket\n4. View Purchased Tickets\n5. Exit');
            const choice = this.rl.questionSync('Enter your choice: ');

            switch (choice) {
                case '1':
                    this.createUserAccount();
                    break;
                case '2':
                    this.login();
                    break;
                case '3':
                    this.buyTicket();
                    break;
                case '4':
                    this.viewPurchasedTickets();
                    break;
                case '5':
                    this.saveData();
                    console.log('Exiting the program.');
                    return;
                default:
                    console.log('Invalid choice. Please choose a valid option.');
                    break;
            }
        }
    }
}

const program = new Program();
program.run();
