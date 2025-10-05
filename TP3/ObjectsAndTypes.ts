interface User {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: false
};

interface Admin extends User {
  permissions: string[];
}
