const base = {
  api_v1_url: 'https://api.locyanfrp.cn',
  api_v2_url: 'https://api-v2.locyanfrp.cn/api/v2',
  buildResponse: (res: any, useDataPath: boolean = true) => {
    const message =
      res.data?.data?.message ??
      res.data?.data?.msg ??
      res.data?.message ??
      res.data?.msg ??
      '未指定或请求失败'
    const data = (useDataPath ? res.data?.data : res.data) ?? {}
    const statusApi = useDataPath ? res.data?.status : res.status
    return {
      status: res.status as number,
      message: message,
      data: data,
      statusApi: statusApi
    }
  }
}

export default base
