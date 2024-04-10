import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "../../components/lineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="100vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;