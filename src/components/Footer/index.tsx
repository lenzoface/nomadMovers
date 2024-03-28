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
              <br />
              <Para>Email: nomadmoversllc@gmail.com</Para>
              <Para>Phone Number: +1 650 547-7771</Para>

              <a href="/agreement">
                <Chat>{t(`Privacy Policy`)}</Chat>
              </a>
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
              <SocialLink
                href="https://maps.app.goo.gl/2rHAzLzD8eEgK2CL6?g_st=iw"
                src="google.svg"
              />
              <SocialLink
                href="https://www.yelp.com/biz/nomad-movers-llc-san-francisco"
                src="yelp.svg"
              />
              {/* <SocialLink
                href="https://web.whatsapp.com/send?phone=+16505477771"
                src="whatsapp.svg"
              /> */}
              {/* <SocialLink
                 href="https://t.me/NomadMovers"
                 src="telegram.svg"
              /> */}
              <SocialLink
                href="https://www.instagram.com/nomadmoversllc/"
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
