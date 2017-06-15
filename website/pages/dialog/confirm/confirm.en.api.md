### slots
| name        | description |
| ----------- |-------------|
| default     | display main container |
| title       | display title container    |
| footer      |  display bottom button area, confirm button need add `mod-ok` directive, cancel button need add `mod-ok` directive |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  | the display status of component (if you set v-model do not set this value)  |
| content     |             |    String   |  main container，you can use the default slot instead |
| title       |             |    String   |  title container，you can use the title slot instead |
| width       |             |    [String, Number]   | you can set the percentage (80%), can also set number, when it is empty will automatically calculated size |
| btnOk       |  confirm    |    String   | confirm button text |
| btnNo       |  cancel     |    String   | cancel button text |
| btnOkStyle  |             |    Object   | styles for confirm button |
| btnNoStyle  |             |    Object   | styles for cancel button |
| onClick     |             |    Function | click to confirm(cancel) the callback, usually used with api |

### events
| name        | description |
| ----------- |-------------|
| onShow      | trigger on show |
| onHide      | trigger on hide |
| click       | trigger on click confrim button event, use `e.preventDefault` prevent the default hidden event. `e.result` identifies the click state, `true` confrim, `false` cancel |

### api
```javascript
this.$jsmod.confirm.show({
  content: 'create by api',
  onClick (e) {
    console.log('click result:' + (e.result ? 'confrim' : 'cancel'));
  }
})
```
