import { Button } from "@mui/material";

const CustomPrimaryButton = ({
  additionalStyles,
  onClick,
  disabled,
  label,
}) => {
  return (
    <Button
      sx={{
        width: "100%",
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "500",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
