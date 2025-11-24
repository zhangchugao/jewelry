import { get, post, put, del } from './http';

// 示例API服务
export const restApi = {
  /**
   * 根据reportNum编码校验证书
   * @param reportNum 证书编码
   * @returns 证书详情
   */
  queryCertificate: (reportNum: string) => {
    return get<any>(`/rest/query/${reportNum}`); 
  },

  /**
   * 添加珠宝信息
   * @param data 珠宝信息
   * @returns 
   */
  addJewelry: (data: Record<string, any>) => {
    return put<any>('/rest/put', data);
  },
  
  /**
   * 更新珠宝信息
   * @param data 珠宝信息
   * @returns 
   */
  updateJewelry: (data: Record<string, any>) => {
    return post<any>('/rest/update', data);
  },
  
  /**
   * 批量更新珠宝信息
   * @param array 珠宝信息数组
   * @returns 
   */
  batchUpdateJewelry: (array: Record<string, any>[]) => {
    return post<any>('/rest/batchUpdate', array);
  },
  
  /**
   * 删除珠宝信息
   * @param id 珠宝ID
   * @returns 
   */
  deleteJewelry: (id: string) => {
    return del<any>(`/rest/delete/${id}`);
  },

  /**
   * 批量删除珠宝信息
   * @param array 珠宝ID数组
   * @returns 
   */
  batchDeleteJewelry: (array: string[]) => {
    return del<any>('/rest/batchDelete', array);
  }
};

// 导出类型定义供其他组件使用
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}