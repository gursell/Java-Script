import { writeFileSync, readFileSync } from 'fs';

class User {
    constructor(id, username, password, email, phone) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    static fromJson(jsonStr) {
        const data = JSON.parse(jsonStr);
        return new User(data.id, data.username, data.password, data.email, data.phone);
    }

    toJson() {
        return JSON.stringify(this);
    }

    static saveData(users) {
        const data = {
            users: users.map(user => user.toJson())
        };
        writeFileSync("userData.json", JSON.stringify(data));
    }

    static loadData() {
        try {
            const data = JSON.parse(readFileSync("userData.json"));
            return data.users.map(user => User.fromJson(JSON.stringify(user)));
        } catch (error) {
            // File not found or invalid JSON, return empty array.
            return [];
        }
    }
}

export default User;
