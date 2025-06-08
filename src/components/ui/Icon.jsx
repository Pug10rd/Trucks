const Icon = ({ name, width = 16, height = 16 }) => (
  <svg width={width} height={height}>
    <use href={`/src/assets/icons/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
