# minute-diff

[![npm](https://img.shields.io/npm/v/minute-diff.svg)](https://www.npmjs.com/package/minute-diff)

Get the difference of two dates in minutes

```js
minuteDiff(new Date('2012-12-21 00:00:00'), new Date('2012-12-21 00:30:00'));
// 30

minuteDiff(new Date('2012-12-21 00:00:00'), new Date('2012-12-21 00:00:30'));
// 0.5

minuteDiff(new Date('2012-12-21 00:00:00'));
// However many minutes from doomsday to now
```
