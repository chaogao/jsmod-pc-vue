### slots
| name        | description |
| ----------- |-------------|
| default     | the target of popover |
| content     | popover's content    |


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  | the display status of component (if you set v-model do not set this value)  |
| inline      | true        |    Boolean  | if set true popover's target will display as block element |
| trigger     | click       |    String  | the way to trigger display, the optional values has `click` `hover` `manual`. if choose `manual`, recommend to use v-model to control the display status |
| showDelay   | 200            |    Number   |  delay of show (need set trigger to `hover`)  |
| hideDelay  |  200   |    Number   | delay of hide (need set trigger to `hover`) |
| offset     |   {left: 0, top: 0}   |    Object   | the displayed position offset can be set to a negative value |
| targetType |     top  |    String   |  position relative to the target element. targetType parameter consists of three fields, each of which has an optional value of \`top \`, \`bottom \`, \`left \`, \`right \`, \`center \` (center can be omitted) |
| background |     #fff  |    [Boolean, String]   |  set popover's background, if set false there is no background |
| useFade    |    true   |    [Boolean]   |  whether to enable the opacity gradient effect |
| arrow       |  true    |    [Boolean]   |  whether to show the arrow |
| arrowColor |   #fff    |    [String]   |  arrow color |
| arrowBorderColor |    #ccc   |    [String]   | arrow border-color |
| arrowSize |    10   |    Number   | arrow size |

### events
| name        | description |
| ----------- |-------------|
| onShow      | trigger on show |
| onHide      | trigger on hide |
