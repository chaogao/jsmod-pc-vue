### slots
| name        | description |
| ----------- |-------------|
| default     | nesting the content area of the image  |
| error       | the content when load image failed  |

### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| src         |             | String      | picture source  |
| scale       | cover       | String      | picture zoom mode: `contain ` `cover ` `default`. when set to `default`, there is no zoom |
| width       |             | [String, Number] | you can set the percentage (80%), can also set number, when it is empty will automatically calculated size |
| height      |             | [String, Number] | you can set the percentage (80%), can also set number, when it is empty will automatically calculated size |
| ratio       |             |  Number     | picture height relative to the width of the ratio, for example, set 0.5, then the width of 100px picture, the height of 50px |
| lazy        | false       |  Boolean    | whether to enable lazyload |
| auto        | true        |  Boolean    | whether to enable autoload, use it can manually load  |
| clickReload | false       |  Boolean    | whether to click reload picture, when picture load failed |
| showLoading | true        |  Boolean    | whether to enable loading image  |
| loadingUrl  |             |  String     | set the source of loading image  |
| loadingStyle|             |  Object     | style-object is used to customize the loading of image container  |


### events
| name        | description |
| ----------- |------------ |
| loaded      | trigger when picture loaded |
