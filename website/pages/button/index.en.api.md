### slots
| name        | description |
| ----------- |-------------|
| default     | button content |
| loading     | the content of loading status, recommend in the span tag  |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| status      | default     |    String   | three status of button: `default` `loading` `disabeld` |
| backgroundColor |         |    String   | backgroundColor of button |
| color       |             |    String   | fontColor of button |
| borderColor |             |    String   | borderColor of button |
| inline      |   false     |    Boolean  | whether to display with `inline-block` |
| href        |             |    String   | button click link. if you want to handle with vue-router, on `click` event and deal it  |
| customStyle |             |    Object   | style-object of button  |


### events
| name        | description |
| ----------- |-------------|
| click       | trigger when click |
