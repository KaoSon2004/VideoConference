import { styled } from "@mui/system";
const Wrapper = styled("div")({
  //   marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});
const Label = styled("p")({
  fontSize: "16px",
  color: "#b9bbbe",
  fontWeight: "600",
  marginBottom: "7px",
});
const Input = styled("input")({
  //   flexGrow: "1",
  height: "40px",
  borderRadius: "5px",
  border: "1px solid #000",
  color: "#dcddde",
  background: "#35393f",
  fontSize: "16px",
  marginBottom: "12px",
  padding: "10px"
});

const InputWithLabel = (props) => {
  const { value, setValue, placeholder, type, label } = props;
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        type={type}
      />
    </Wrapper>
  );
};
export default InputWithLabel;
