class IdGenerator {
    static guid() {
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let id = "";
        for (let i = 0; i < 16; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        return id;
    }
}

export default IdGenerator;
