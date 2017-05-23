export default function (img, iwidth, iheight, scale) {
  if (scale == 'none') {
    return {};
  }

  let _w = img.width,
    _h = img.height,
    _scale = _h / _w,
    _finalWidth,
    _finalHeight,
    moveLeft,
    moveTop;

  let maxRatio = Math.max(iwidth / _w, iheight / _h);

  if (scale == 'contain') {
    maxRatio = Math.min(iwidth / _w, iheight / _h)
  }

  _finalWidth = parseInt(maxRatio * _w, 10) || iwidth;
  _finalHeight = parseInt(maxRatio * _h, 10) || iheight;

  moveTop = parseInt((iheight - _finalHeight) / 2, 10);
  moveLeft = parseInt((iwidth - _finalWidth) / 2, 10);

  return {
    width: _finalWidth + 'px',
    height: _finalHeight + 'px',
    marginTop: moveTop + 'px',
    marginLeft: moveLeft + 'px'
  }
};
