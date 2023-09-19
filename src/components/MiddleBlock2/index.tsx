import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlock2Props {
  title: string;
  id: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock2 = ({ title, content, button, t, id }: MiddleBlock2Props) => {
  const initiateEmail = () => {
    window.location.href = "mailto:info.dmsmoving@gmail.com";
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <a href="mailto:info.dmsmoving@gmail.com">
                  <Button name="email" onClick={initiateEmail}>
                    {t(button)}
                  </Button>
                </a>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock2);
