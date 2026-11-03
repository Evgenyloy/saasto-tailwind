import Container from "../ui/Container";

const data = [
  {
    number: "15k",
    info: "Active user",
  },
  {
    number: "30k",
    info: "Total Download",
  },
  {
    number: "10k",
    info: "Customer",
  },
];

function Statistics() {
  return (
    <section className="">
      <Container>
        <div
          className="flex tablet:flex-row flex-col justify-center items-center p-[40px] 
        tablet:justify-between desktop:justify-between"
        >
          {data.map((item) => (
            <div
              className="tablet:after:content-none desktop:after:content-none
              desktop:px-100 mobile:not-last:mb-98 tablet:not-last:mb-0 desktop:not-last:mb-0 tiny:not-last:mb-98
               flex flex-col justify-center items-center after:content-[''] 
                last:after:content-none after:h-[1px] after:w-200 after:bg-gray-300
                 after:top-0 after:right-0 after:translate-y-50 relative"
              key={crypto.randomUUID()}
            >
              <p className="text-[64px] font-bold mb-28 ">{item.number}</p>
              <p className="text-[#404040FF]/60 text-[18px]">{item.info}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;
