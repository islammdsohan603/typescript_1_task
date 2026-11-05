class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class Admin extends User {
  adminpermison: string[];

  constructor(name: string, email: string, adminpermison: string[]) {
    super(name, email);
    this.adminpermison = adminpermison;
  }
}

class Reporter extends User {
  publishArticle(): void {
    console.log("Article Published");
  }
}

const admin = new Admin("Sohan", "sohan@gmail.com", ["create", "deleted"]);

// admin.deleteUser();

console.log(admin);

// const reporter = new Reporter("Rahim", "rahim@gmail.com");

// reporter.login();
// reporter.publishArticle();
