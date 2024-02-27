import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      if (window.location.pathname === "/") {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      } else {
        window.location.href = `/#${id}`;
      }
    };
    const handleLinkClick = () => {
      window.open(
        "https://www.google.com/maps/uv?pb=!1s0x886dc48d48e24447%3A0xc28a89e5028eca50!5sNomad%20Movers!15sCgIgAQ&authuser=2&imagekey=!1e10!2sAF1QipPqGOPiYHTWs3hPI6-v4cMx8q6Bo3Yl9B8gVdDq",
        "_blank"
      );
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("moving")}>
          <Span>{t("Moving")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("pricing")}>
          <Span>{t("Pricing")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={handleLinkClick}>
          <Span>{t("Photos")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/reviews" onClick={() => setVisibility(false)}>
            <Span>{t("Reviews")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Free Quote")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
