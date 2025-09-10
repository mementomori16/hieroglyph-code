export interface User {
    id: number;
    login: string;
    password: string;
    name: string;
    email: string;
  }
  
  export const users: User[] = [
    {
      id: 1,
      login: 'user1',
      password: 'password1',
      name: 'John Doe',
      email: 'john@example.com',
    },
    {
      id: 2,
      login: 'user2',
      password: 'password2',
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
    // Add more users here
  ];