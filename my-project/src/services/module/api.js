import request from '../request';

// 首页
export async function getNotesList() {
  // return request('https://jsonplaceholder.typicode.com/todos?_limit=20')
  return request('https://jsonplaceholder.typicode.com/comments?_limit=10');
}
// 发现
export async function getFindList() {
  return request('https://api.imgflip.com/get_memes');
}
