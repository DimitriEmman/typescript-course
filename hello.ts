class Hello {
    _firstName: string;
    lastName: string;
constructor (first: string, last:string) {
    this.firstName=first;
    this.lastName=last;
}

public getFirstname(): string {
    return this._firstName;
}
public set firstName(value: string) {
    this._firstName=value;
}
}

let hello= new Hello("hello", "hello");
hello.firstName="dimitri";
hello.lastName="yameogo";

