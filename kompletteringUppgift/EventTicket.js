import { writeFileSync, readFileSync } from 'fs';


class EventTicket {
    constructor(id, eventName, price, eventTime, buyerId = null) {
        this.id = id;
        this.eventName = eventName;
        this.price = price;
        this.eventTime = eventTime;
        this.buyerId = buyerId;
    }

    static fromJson(jsonStr) {
        const data = JSON.parse(jsonStr);
        return new EventTicket(data.id, data.eventName, data.price, data.eventTime, data.buyerId);
    }

    toJson() {
        return JSON.stringify(this);
    }

    static saveData(eventTickets) {
        const data = {
            tickets: eventTickets.map(ticket => ticket.toJson())
        };
        writeFileSync("eventData.json", JSON.stringify(data));
    }

    static loadData() {
        try {
            const data = JSON.parse(readFileSync("eventData.json"));
            return data.tickets.map(ticket => EventTicket.fromJson(JSON.stringify(ticket)));
        } catch (error) {
            // File not found or invalid JSON, return empty array.
            return [];
        }
    }
}

export default EventTicket;




