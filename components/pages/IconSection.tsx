import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import MergeIcon from "@mui/icons-material/Merge";

import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import { StyledButtonPrimary } from "../ui/Styles";

export default function IconSection() {
  return (
    <Section className="relative z-50 -mt-32 py-12">
      <Container>
        <Card>
          <div className="flex flex-row flex-wrap justify-around">
            <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8">
              <TrendingUpIcon
                style={{ width: "4rem", height: "4rem", color: "rgb(var(--primary-dark))" }}
              />
              <h3>investice</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8">
              <HomeOutlinedIcon
                style={{ width: "4rem", height: "4rem", color: "rgb(var(--primary-dark))" }}
              />
              <h3>hypotéky</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8">
              <HealthAndSafetyOutlinedIcon
                style={{ width: "4rem", height: "4rem", color: "rgb(var(--primary-dark))" }}
              />
              <h3>pojištění</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8">
              <PaidOutlinedIcon
                style={{ width: "4rem", height: "4rem", color: "rgb(var(--primary-dark))" }}
              />
              <h3>úvěry</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8">
              <MergeIcon
                style={{ width: "4rem", height: "4rem", color: "rgb(var(--primary-dark))" }}
              />
              <h3>konsolidace</h3>
            </div>
          </div>
          <div className="flex justify-center">
            <StyledButtonPrimary href="#contact" variant="contained">
              MÁM ZÁJEM O SPOLUPRÁCI
            </StyledButtonPrimary>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
