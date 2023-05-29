interface FlexBoxProps {
  children: React.ReactNode[] | React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  styles?: any;
}

const ColumnBox = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  styles,
}: FlexBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default ColumnBox;
