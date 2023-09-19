import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import MergeIcon from "@mui/icons-material/Merge";
import Button from "@mui/material/Button";

import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import { StyledButton } from "../ui/Styles";

export default function IconSection() {
  return (
    <Section className="relative z-50 -mt-32 py-12">
      <Container>
        <Card className="">
          <div className="flex flex-row flex-wrap justify-around">
            <div className="flex flex-col items-center justify-center space-y-3 p-5">
              <TrendingUpIcon fontSize="large" />
              <h3>investice</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-5">
              <HomeOutlinedIcon fontSize="large" />
              <h3>hypotéky</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-5">
              <GroupsOutlinedIcon fontSize="large" />
              <h3>pojištění</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-5">
              <PaidOutlinedIcon fontSize="large" />
              <h3>úvěry</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 p-5">
              <MergeIcon fontSize="large" />
              <h3>konsolidace</h3>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <StyledButton variant="contained">MÁM ZÁJEM O SPOLUPRÁCI</StyledButton>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
