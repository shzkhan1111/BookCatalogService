export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    userType: 'Student' | 'Librarian';
  }