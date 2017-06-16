### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean  |  set default page, it's recommended to use `v-model` to bind to the index |
| pageCount   |             |    Number   |  set total page |
| maxShowPage |    3         |    Number   | page-label number of display |

### events
| name        | description |
| ----------- |-------------|
| active      | trigger when one page is actived {page: [Number]} |

#### page-label types
```javascript
this.$jsmod.pagination.PAGE_TYPE = {
  FIRST: 'FIRST',  // first page
  PRE: 'PRE', // pre page
  PAGE: 'PAGE', // normal page
  CURRENT: 'CURRENT', // current page
  NEXT: 'NEXT', // next page
  LAST: 'LAST', // last page
  OMIT: 'OMIT' // omit
};
```

#### scope data
```javascript
{
  type: [String], // page-label type
  disabled: [Boolean] // whether current page-label is disabled
}
```
