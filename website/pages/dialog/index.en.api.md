### slots
| name        | description |
| ----------- |-------------|
| default     | display main container   |
| header     |  display header container |
| footer     |  display footer container    |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  | the display status of component (if you set v-model do not set this value)  |
| html        |             |    String   | main container，you can use the default slot instead |
| header      |             |    String   | header container，you can use the header slot instead|
| footer      |             |    String   | header container，you can use the footer slot instead |
| useMask     |      true   |    Boolean   | whether to display mask  |
| isMaskClickHide |      true  |    Boolean   |  when click mask, whether to hide  |
| contentScrollable|    true   |     Boolean   |  whether the content cann scroll |
| width       |             |    [String, Number]   | you can set the percentage (80%), can also set number, when it is empty(0) will automatically calculated size |
| height      |             |    [String, Number]   | you can set the percentage (80%), can also set number, when it is empty(0) will automatically calculated size |
| offsetTop         |       |    Number   |  offset vertical position |
| backgroundColor|    #fff   |    [String, Boolean]   |  background color, set false no background |
| soltBackgroundColor|    false   |    [String, Boolean]   |  The background color of the content area (excluding the header, footer area) |

### events
| name        | description |
| ----------- |-------------|
| onShow      | trigger on show |
| onHide      | trigger on hide |

### api
```javascript
this.$jsmod.dialog.show({
  content: 'hello world'
});
```
