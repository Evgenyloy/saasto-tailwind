import Container from "../ui/Container";
import screen from "/assets/images/analytics/screen.png";
import img1 from "/assets/images/analytics/img1.png";
import img2 from "/assets/images/analytics/img2.png";
import img3 from "/assets/images/analytics/img3.png";

const data = [
  {
    title: "Automatic event tracking",
    text: "Time Tracking is never been easier. n\
Just let the stopwatch run",
    image: img1,
  },
  {
    title: "Customizable dashboard",
    text: "Time Tracking is never been easier. n\
Just let the stopwatch run",
    image: img2,
  },
  {
    title: "Customizable dashboard",
    text: "Time Tracking is never been easier. n\
Just let the stopwatch run",
    image: img3,
  },
];

function Analytics() {
  return (
    <section className="py-50">
      <Container>
        <div
          className="flex gap-[50px]
            desktop:justify-center
            tablet:justify-center
       
        "
        >
          <img
            src={screen}
            alt=""
            className="mobile:hidden tiny:hidden tablet:block desktop:block tablet:w-[400px] "
          />
          <div className="desktop:max-w-[400px]">
            <h2 className="text-[24px] font-semibold mb-[16px] text-center">
              Analytics & Reporting Breakdown
            </h2>
            <p className="text-[#404040FF] text-[16px] mb-[36px] text-center">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula
            </p>

            {data.map((item) => (
              <div className="flex justify-between gap-[15px] mb-[25px]">
                <img src={item.image} alt="" className="w-[46px] h-[46px]" />
                <div className="">
                  <h3 className="text-[18px] font-semibold text-[#404040FF]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#404040FF]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Analytics;
