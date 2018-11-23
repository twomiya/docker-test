import request from '@/utils/request';
export async function fakeSubmitForm(params) {
    return request('/api/teacher_token', {
        method: 'POST',
        body: params,
      });
  }