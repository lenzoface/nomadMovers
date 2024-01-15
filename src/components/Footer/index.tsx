import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
        <Row justify="space-between">
  <Col lg={8} md={10} sm={24} xs={24}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any questions? Feel free to reach out.`)}
              </Para>
              <a href="mailto:nomadmoversllc@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
              <a href="tel:+16505477771">
                <Chat>{t(`Or Call Us`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={24} xs={24}>
              {/* <Empty /> */}
              <Language>{t("Address")}</Language>
              {/* <Para>35 Paloma Ave</Para> */}
              <Para>San Francisco</Para>
              <Para>Californa, USA</Para>
              {/* <Para>CA 94127</Para> */}
              <Empty />
              <Para>Email: nomadmoversllc@gmail.com</Para>
              <Para>Phone Number: +1 650 547-7771</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
            {/* <SocialLink
                href="https://www.google.com/maps/place/Davidson+Moving+and+Storage/@37.823121,-122.368933,17z/data=!3m1!5s0x8085803267432993:0x8f26db6187afe3d2!4m8!3m7!1s0x895d986157053679:0x862d74e571769a32!8m2!3d37.823121!4d-122.368933!9m1!1b1!16s%2Fg%2F11ks2xhsbn?entry=ttu"
                src="google.svg"
              /> */}
              <SocialLink
                href="https://www.yelp.com/biz/nomad-movers-llc-san-francisco"
                src="yelp.svg"
              />
              {/* <SocialLink
                href="https://web.whatsapp.com/send?phone=+16505477771"
                src="whatsapp.svg"
              /> */}
              {/* <SocialLink
                 href="https://t.me/DavidsonMoving"
                 src="telegram.svg"
              /> */}
              <SocialLink
                href="https://www.instagram.com/nomadmovers/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/people/Nomad-Movers/"
                src="facebook.svg"
              />            
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
