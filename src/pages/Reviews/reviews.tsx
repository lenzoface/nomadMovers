import { ReviewsSection, Content, ContentWrapper } from "./styles";
import { Button } from "../../common/Button";

const Reviews = () => {
  return (
    <ReviewsSection>
      <ContentWrapper>
        <h1 style={{ fontSize: "3.5em" }}>What our customers say</h1>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "90%", margin: "10px" }}>
            <h3>Krista K.</h3>
            <Content>
              These guys were AMAZING! We found out the week before that we had
              to move and were scrambling to find movers. Honestly, we were a
              bit nervous to use people that didn't have a ton of reviews
              yet...but we were desperate!
              <br />
              They were so quick to respond. They gave us packing advice. They
              responded (quickly) to every msg I sent. And when it came to the
              actual day, THEY CRUSHED IT!
              <br />
              <br />
              To put this into perspective, it took 5 guys, 11hrs to move our
              home. LOTS of stuff!! They didn't stop! They were professional.
              They were thorough. They were careful. I had a lot of large
              furniture that was very important to me and they moved the items
              with the same care I would. <br />
              And if all that wasn't enough, they were just the nicest people!
              Definitely recommend these guys!!!!!
              <br /><br />
            </Content>
          </div>
          <div style={{ width: "90%", margin: "10px" }}>
            <h3>Raphael K.</h3>
            <Content>
              My experience with Davidson Moving went very well. The price was
              fair and cheaper than a lot of other quotes. Took a chance by
              booking them without any reviews. But everything worked out. The
              two guys who helped me were nice and professional. They wrapped
              everything well. Boxed stuff up. I had no issues with the company.
              Their response times were good. Kept me informed. Easy. Highly
              recommend. Fantastic especially considering the price being lower
              than other quotes.<br /><br />
            </Content>
          </div>
          <div style={{ width: "90%", margin: "10px" }}>
            <h3>Cami H.</h3>
            <Content>
              We needed to move some furniture out of a house and decided at the
              last minute on a Saturday afternoon to try to hire someone to help
              us. I messaged Davidson Moving, and they responded quickly and
              worked with me to agree on a price. They were able to come to the
              house with just a couple hours' notice, and they were ready to
              work! They quickly loaded the furniture in the truck, and then
              when we had a refrigerator that wouldn't fit through the doorway,
              they knew how to take the doors off the refrigerator so it would
              fit.
              <br />
              They were super helpful and worked quickly. My husband said that
              was the best money spent because they were so efficient and he
              didn't have to worry about a thing.<br /><br />
            </Content>
          </div>
          <div style={{ width: "90%", margin: "10px" }}>
            <h3>Diana K.</h3>
            <Content>
              I cannot speak highly enough about Davidson Moving and Storage and
              their exceptional team. Their staff exhibited remarkable expertise
              and efficiency during my recent move. From the moment they
              arrived, I could tell they were experienced professionals. Their
              packing techniques were top-notch, and they took care to secure
              even the most delicate items. Moreover, their friendly demeanor
              and positive attitude made the entire experience enjoyable. Thanks
              to Davidson Moving and Storage my move was seamless, and I am
              extremely satisfied with their services. If you're searching for a
              moving company that prioritizes customer satisfaction and delivers
              outstanding results, look no further than Davidson Moving and
              Storage!<br /><br />
            </Content>
          </div>
        </div>
        <Button>
          <a href="https://www.google.com/maps/place/Davidson+Moving+and+Storage/@37.823121,-122.368933,17z/data=!3m1!5s0x8085803267432993:0x8f26db6187afe3d2!4m8!3m7!1s0x895d986157053679:0x862d74e571769a32!8m2!3d37.823121!4d-122.368933!9m1!1b1!16s%2Fg%2F11ks2xhsbn?entry=ttu" style={{ color: "#FFFFFF"}} target="_blank" rel="noreferrer">Read or leave a review on Google</a>
        </Button>
        <br /><br />
      </ContentWrapper>
    </ReviewsSection>
  );
};

export default Reviews;
