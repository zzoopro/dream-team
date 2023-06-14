interface BoxProps {
  height?: number;
  width?: number | string;
}
const Box = ({ height = 0, width = "100%" }: BoxProps) => {
  return <div style={{ height, width }} />;
};

export default Box;
