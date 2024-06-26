import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import GeographyChart from "../../components/geographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Box
        height="100vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;