import { get, post, put, del } from './http';

// 示例API服务
export const exampleApi = {
  // 获取示例数据
  getExampleData: () => {
    return get<any>('/'); // 调用后端根路径接口
  },
  
  // 提交数据示例
  submitData: (data: any) => {
    return post<any>('/submit', data);
  },
  
  // 更新数据示例
  updateData: (id: string, data: any) => {
    return put<any>(`/update/${id}`, data);
  },
  
  // 删除数据示例
  deleteData: (id: string) => {
    return del<any>(`/delete/${id}`);
  }
};

// 导出类型定义供其他组件使用
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}