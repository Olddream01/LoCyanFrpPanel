import base from '@/api/base'
//@ts-ignore
import { deleteReq } from '@/utils/request'

const all = async (user_id: number) => {
  const rs = await deleteReq(`${base.api_v2_url}/user/token/all`, {
    user_id: user_id
  })
  return base.buildResponse(rs)
}

export default all
