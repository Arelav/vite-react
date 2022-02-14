import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";

const CustomCheckbox = styled(Checkbox)({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
});

export default CustomCheckbox;