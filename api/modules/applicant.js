import Request from '@/api/request'

export default {
  // 新增申请人
  create (data) {
    return Request ('/add/applicant', 'get', data)
  },
  // 修改申请人
  update (data) {
    return Request ('/edit/applicant', 'post', data)
  }
}
