import styled from "styled-components";

interface InputProps {
  type: "text" | "password";
  placeholder?: string;
  onChange?: () => any;
  [key: string]: any;
}

const InputTag = styled.input`
  margin-top: 5px;
  outline: none;
  width: 200px;
  max-width: 50vw;
  height: 25px;
  font-size: 18px;
`;

const Input = ({ type, placeholder, onChange, ...props }: InputProps) => {
  return (
    <InputTag
      type={type}
      placeholder={placeholder ?? ""}
      {...onChange}
      {...props}
    />
  );
};

export default Input;
