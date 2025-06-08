const Icon = ({ name, size = 20 }) => (
  <svg width={size} height={size}>
    <use href={`/src/assets/icons/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
