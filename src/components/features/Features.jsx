import task from "/assets/images/features/task.png";
import bell from "/assets/images/features/bell.png";
import schedule from "/assets/images/features/schedule.png";
import Container from "../ui/Container";

const data = [
  { title: "Preset List of Task", img: task },
  { title: "Reminder of Task", img: bell },
  { title: "Complication Report", img: schedule },
];

function Features() {
  return (
    <section className="py-[50px]">
      <Container>
        <h2
          className="tiny:text-[24px] mobile:text-[24px] tablet:text-[24px] font-semibold mb-[14px] text-center
          desktop:text-[42px]
        "
        >
          Some Excellent Features For you
        </h2>
        <p
          className="tiny:text-[14px] mobile:text-[16px] tablet:text-[16px] text-[#404040FF] mb-[28px] text-center
          desktop:text-[18px] desktop:mb-[64px]
        "
        >
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>
        <div
          className="flex flex-col justify-center items-center
          desktop:flex-row desktop:gap-[32px] 
        "
        >
          {data.map(({ title, img }) => (
            <div
              className="flex flex-col bg-[#70d0dcFF] mb-20 p-20 rounded-3xl text-white"
              key={crypto.randomUUID()}
            >
              <div
                className="w-60 h-60 rounded-2xl bg-white/50 flex justify-center items-center mb-20
              desktop:mb-0
              "
              >
                <img src={img} alt="" className="w-40 h-40" />
              </div>
              <h3 className="font-bold text-[20px] mb-10">{title}</h3>
              <p className="text-[16px]">
                Make bill payments easily using the wallet app
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
