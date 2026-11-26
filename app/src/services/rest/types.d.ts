export interface HttpResponse {
  success: boolean;
  message: string;
  payload?: any;
}

export interface UserPayload {
  email: string;
  password: string;
  repassword?: string;
  role?: string;
}
