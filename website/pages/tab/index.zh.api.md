### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| activeIndex | 0           |    Number   |  默认启用的项目索引 |
| trigger   |   click          |    String   |  触发选中项目的条件，可选值有 `click` `hover` |
| hoverDelay |    100         |    Number   |  `hover` 触发选中的延迟 |
| tabContainerClass |             |    String   |  为分类卡片容器增加样式类 |
| tabClass |             |    String   |  为分类项目增加样式类 |
| containerClass |             |    String   |  为内容容器增加样式类 |
| fade |        false     |    Boolean   |  切换时是否用透明度渐变 |

### events
| name        | description |
| ----------- |-------------|
| active     |  启用某个项目时触发 {activeIndex: [Number]} |


### 作用域插槽
使用方式参见实例

#### scope 提供数据
```javascript
{
  label: [String], // 项目的文案描述
  data: [Object], // 项目的扩展数据
  active: [Boolean] // 当前项目是否启用
}
```
