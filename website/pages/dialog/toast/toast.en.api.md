### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  | the display status of component (if you set v-model do not set this value)  |
| content     |             |    String   | main container，you can use the default slot instead |
| type        | default     |    String   | the state of `ModToast`, allow four states (\`default\` \`loading\` \`success\` \`error\`)|
| width       |             |    [String, Number]   | you can set the percentage (80%), can also set number, when it is empty will automatically calculated size |
| timeout     |             |    Number   | the time automatically hide after shown , 0 will not automatically hidden  |
| onHide      |             |    Function | callback on hidden  |

### events
| name        | description |
| ----------- |-------------|
| onShow      | trigger on show |
| onHide      | trigger on hide |
