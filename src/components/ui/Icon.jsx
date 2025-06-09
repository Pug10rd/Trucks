const Icon = ({ name, width = 16, height = 16, fill }) => (
  <svg width={width} height={height} fill={fill}>
    <use href={`/src/assets/icons/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
