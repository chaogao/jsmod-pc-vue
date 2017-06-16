### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| current     |        0    |   Number    | the default index |
| list        |             |   Array     | data source of banner `[{src: 'http://xxx.jpg', href: 'http://xxx.com'}]` |
| fade        |     false   |   Booleam   | whether to enable fade effect |
| height      |             |   [Number, String]   | height of banner, you can set the percentage (80%), can also set number |
| ratio       |             |   Number    | height relative to the width of the ratio, for example, set 0.5, then the width of 100px picture, the height of 50px | |
| interval    |     0       |   Number    | the interval of autoplay, set 0 to disabe autoplay |
| loadedStep  |     2       |   Number    | the number of preloaded images |
| scale       |     cover   |   String    | picture zoom mode: `contain ` `cover ` `default`. when set to `default`, there is no zoom |
| showCircle  |     true    |   Boolean   | whether to show the bottom circle indicator |
| circleColor |     true    |   Boolean   | the color of circle indicator |
| showPager   |     true    |   Boolean   | whether to show the pager |
| controlSize |     16px    |   String    | pre, next button size |
| background  |             |   String    | if set scale `contain`, the background color of image |


### events
| name        | description |
| ----------- |------------------ |
| swiped      | trigger when activate a `mod-carousel-item` |
