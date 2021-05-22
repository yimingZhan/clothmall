import {request} from './request'

export function getRequest(){
  return request(
    {url:'/home/multidata'}
  )
}