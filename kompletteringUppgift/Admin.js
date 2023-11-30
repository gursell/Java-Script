class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    viewPurchasedTickets(users) {
        console.log("Purchased Tickets:");
        for (const user of users) {
            console.log(`User: ${user.username}`);
            for (const eventTicket of user.tickets) {
                console.log(`- Event: ${eventTicket.eventName}, Price: ${eventTicket.price}, Time: ${eventTicket.eventTime}`);
            }
        }
    }
}

