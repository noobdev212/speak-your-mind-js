import api from './api.module.ts'
import type { HttpResponse } from './types.d.ts'

export async function getSync(): Promise<HttpResponse> {
  const response = await api.get<HttpResponse>('/test/sync/connect');
  return response;
}

export async function postAck(): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/test/ack', { data: 'connect post' });
  return response;
}
