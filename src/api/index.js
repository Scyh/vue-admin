import { get } from '@/utils/request'

export const test = data => get('/test')

export const getTable = data => get('/table', data);