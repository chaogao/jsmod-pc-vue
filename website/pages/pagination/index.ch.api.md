### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  设置当前显示的页码，建议使用 `v-model` 对页面进行双向绑定 |
| pageCount   |             |    Number   |  总页数 |
| maxShowPage |    3         |    Number   |  配置控制分页显示的个数 |

### events
| name        | description |
| ----------- |-------------|
| active     |  启用某个页码时触发 {page: [Number]} |


### 作用域插槽
#### 分页类型
```javascript
const PAGE_TYPE = {
  FIRST: 'FIRST',  // 首页
  PRE: 'PRE', // 上一页
  PAGE: 'PAGE', // 普通的页码
  CURRENT: 'CURRENT', // 当前页
  NEXT: 'NEXT', // 下一页
  LAST: 'LAST', // 最后一页
  OMIT: 'OMIT' // 省略号
};
```

#### scope 提供数据
```javascript
{
  type: [String], // 分页的类型
  disabled: [Boolean] // 页码功能是否可用
}
```
