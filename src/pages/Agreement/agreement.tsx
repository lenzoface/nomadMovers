import { ReviewsSection, Content, ContentWrapper } from "./styles";
import { Button } from "../../common/Button";

const Reviews = () => {
  return (
    <ReviewsSection>
      <ContentWrapper>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "90%", margin: "10px" }}>
            <h3>Privacy Policy</h3>
            <Content>
              At Nomad Movers, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy outlines how we collect, use, and safeguard
              the information you provide to us.
              <br />
              <br />
              <b>Information Collection</b>
              <br />
              We collect personal information from you when you fill out our
              moving quote form or contact us through our website or Google. This
              information may include your name, contact details, address,
              moving requirements, and any other details you choose to provide.
              <br />
              <br />
              <b>Use of Information</b>
              <br />
              The information we collect is used to provide you with moving
              quotes, schedule services, communicate with you about your move,
              and improve our services. We may also use your information to send
              you promotional materials or special offers if you have opted to
              receive such communications.
              <br />
              <br />
              <b>Data Security</b>
              <br />
              We take appropriate measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              Your information is stored securely and accessed only by
              authorized personnel.
              <br />
              <br />
              <b>Disclosure of Information</b>
              <br />
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent. However, we may
              share your information with trusted third-party service providers
              who assist us in operating our website, conducting our business,
              or servicing you.
              <br />
              <br />
              <b>Your Consent</b>
              <br />
              By using our website and requesting a quote via Google and providing us with your personal
              information, you consent to the collection and use of this
              information as outlined in this Privacy Policy.
              <br />
              <br />
              <b>Changes to Privacy Policy</b>
              <br />
              We reserve the right to update or modify this Privacy Policy at
              any time without prior notice. Any changes will be posted on this
              page, and your continued use of our website after such changes are
              made will constitute your acceptance of the revised Privacy
              Policy.
              <br />
              <br />
              If you have any questions or concerns about our Privacy Policy,
              please contact us at nomadmoversllc@gmail.com or call at (650)
              547-7771.
              <br />
              This Privacy Policy was last updated on 28th of March, 2024.
            </Content>
          </div>
        </div>
        <Button>
          <a
            href="https://business.google.com/v/nomad-movers/017796987443128711134/1932/_"
            style={{ color: "#FFFFFF" }}
            target="_blank"
            rel="noreferrer"
          >
            Visit our page on Google!
          </a>
        </Button>
        <br />
        <br />
      </ContentWrapper>
    </ReviewsSection>
  );
};

export default Reviews;
