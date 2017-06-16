### slots
| name        | description |
| ----------- |-------------|
| default     | content of custom elements  |


### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       |             |   Number    | set default index, it's recommended to use `v-model` to bind to the index |
| fade        |     false   |   Booleam   | whether to enable fade effect |
| height      |             |   [Number, String]   | height of carousel, you can set the percentage (80%), can also set number |
| ratio       |             |   Number    | height relative to the width of the ratio, for example, set 0.5, then the width of 100px picture, the height of 50px |
| direction   |  horizontal |   String    | the direction of carousel, the optional value is：`horizontal` `vertical` |
| loop        |     false   |     Boolean | whether to enable loop display |
| interval    |     0       |     Number  | the interval of autoplay, set 0 to disabe autoplay |
| duration    |     300     |     Number  | animation time |


### events
| name        | description |
| ----------- |------------------ |
| swiped      | trigger when activate a `mod-carousel-item` |
