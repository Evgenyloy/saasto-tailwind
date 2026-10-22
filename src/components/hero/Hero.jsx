import Container from "../ui/Container";

function Hero() {
  return (
    <section className="bg-[#fff8f2FF]">
      <Container>
        <h1 className="text-[28px] font-bold mb-[12px] capitalize leading-[1.6] tracking-wider">
          A collaborative
          <br />
          Time Tracking that
          <br />
          you Need
        </h1>
        <p className="text-[16px] text-[#40201eFF] leading-[2.25] mb-[40px]">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>
        <button className="px-48 py-24 bg-[#ff553eFF] rounded-[100px] text-white font-[500] text-[18px]">
          Start 14 Days Trial
        </button>
      </Container>
    </section>
  );
}

export default Hero;
