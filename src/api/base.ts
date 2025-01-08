const base = {
  api_v2_url: 'https://api.locyanfrp.cn/v2',
  // api_v2_url: 'http://localhost:18080',
  buildResponse: (res: any, useDataPath: boolean = true) => {
    const message =
      res.data?.message ??
      res.response?.data?.message ??
      res.data?.msg ??
      res.response?.data?.msg ??
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
