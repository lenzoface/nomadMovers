import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, Chat } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
            <br />
            <a href="/agreement">
                <Chat>{t(`Privacy Policy`)}</Chat>
              </a>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name (required)"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email (required)"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Enter any information here, such as assistance with preparing, special/heavy items, stairs/floors, etc."
                  value={values.details || ""}
                  name="details"
                  onChange={handleChange}
                />
                <ValidationType type="details" />
              </Col>

              <Col>
                <Input
                  type="tel"
                  name="Phone Number"
                  placeholder="Enter your Phone Number"
                  value={values.tel || ""}
                  onChange={handleChange}
                />
                <ValidationType type="tel" />
              </Col>

              <Col span={24}>
                <Input
                  type="date"
                  name="date"
                  placeholder="Preferred Date"
                  value={values.date || ""}
                  onChange={handleChange}
                />
                <ValidationType type="date" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="In what location do you need the service?"
                  placeholder="Pick Up Address"
                  value={values.pickup || ""}
                  onChange={handleChange}
                />
                <ValidationType type="pickup" />
              </Col>

              <Col span={24}>
                <Input
                  type="text"
                  name="Where are you moving to?"
                  placeholder="Drop Off Address"
                  value={values.dropoff || ""}
                  onChange={handleChange}
                />
                <ValidationType type="dropoff" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
