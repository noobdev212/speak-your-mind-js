import api from './api.module.ts'
import type {
  UserPayload,
  HttpResponse
} from './types.d.ts'

export async function register(payload: UserPayload): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/user/register', payload);
  return response;
}

export async function login(payload: UserPayload): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/user/login', payload);
  return response;
}

