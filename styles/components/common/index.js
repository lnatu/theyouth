export const setMargins = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
}) => ({
  margin: margin,
  marginTop: marginTop,
  marginRight: marginRight,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  margin: marginX ? `0 ${marginX}` : null,
  margin: marginY ? `${marginY} 0` : null,
});
