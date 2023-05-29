interface FlexBoxProps {
  children: React.ReactNode[] | React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  styles?: any;
}

const RowBox = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  styles,
}: FlexBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default RowBox;
