
export class Client {
  public id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNo: string;

  constructor(id: string,
              fName: string,
              lName: string,
              email: string,
              phoneNo: string) {
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.phoneNo = phoneNo;
  }
}
