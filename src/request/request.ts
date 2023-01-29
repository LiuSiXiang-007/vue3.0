import axios from 'axios';
import router from '@/router';

/** axios 的取消请求 */
const CancelToken:any = axios.CancelToken;

let token = localStorage.getItem('token')

