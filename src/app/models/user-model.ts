export class User {
    constructor(
        public userName: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        public password: string,
        public address: Address

    ) {}
}
export class Address {
    constructor(
        public addressLine: string,
        public city: string,
        public country: string,
        public district: string,
        public pin: Number,
        public state: string
    ) {}
}
