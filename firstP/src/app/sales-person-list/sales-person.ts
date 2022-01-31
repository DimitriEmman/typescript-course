export class SalesPerson {
    firstName!: string
    lastName!: string
    email!: string
    salesVolume!: number

    constructor(firstName: string, lastName: string, email: string, salesVolume: number) {
          this.firstName=firstName
          this.lastName=lastName
          this.email=email
          this.salesVolume=salesVolume
    }
}
