### slots
| name        | description |
| ----------- |-------------|
| default     | display main container |
| title       | display title container    |
| footer      |  display bottom button area, confirm button need add `mod-confirm` directive |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  | the display status of component (if you set v-model do not set this value)  |
| content     |             |    String   | main container，you can use the default slot instead |
| title       |             |    String   | title container，you can use the title slot instead |
| width       |  520        |    [String, Number]   | you can set the percentage (80%), can also set number, when it is empty(0) will automatically calculated size |
| btn         |  ok         |    String   | confirm button text |
| buttonCustomStyle  |      |    Object   | styles for confirm button  |
| onClick     |             |    Function | click to confirm the callback, usually used with api |

### events
| name        | description |
| ----------- |-------------|
| onShow      | trigger on show |
| onHide      | trigger on hide |
| click       | trigger on click confrim button event, use `e.preventDefault` prevent the default hidden event |

### api
```javascript
this.$jsmod.alert.show({
  content: 'api alert'
});
```
