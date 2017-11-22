### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| activeIndex | 0           |    Number   |  the default active index (if you set v-model do not set this value)  |
| trigger     |   click     |    String   |  set trigger method `click` `hover` |
| hoverDelay  |    100      |    Number   |  delay of active (need set trigger to `hover`)   |
| tabContainerClass |       |    String   |  set class for tab container |
| tabClass    |             |    String   |  set class for tab-item |
| containerClass |          |    String   |  set class for Tab-Content group container |
| fade        |   false     |    Boolean  |  whether to use fade effect, if set true the item will has auto height |

### events
| name        | description |
| ----------- |-------------|
| active      | trigger when actived one tab-item {activeIndex: [Number]} |


#### scope data
```javascript
{
  label: [String],  // tab text
  data: [Object],   // tab custom data
  active: [Boolean] // if current tab is actived
}
```
