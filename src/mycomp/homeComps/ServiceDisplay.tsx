import AnimatedCounter from "./Counter";

function ServiceDisplay() {
  return (
    <div className=" bg-black flex flex-row flex-1 w-full text-white">
      <div className="flex-1 py-20">
        <div className="flex flex-col items-center justify-center text-5xl font-bold ">
          <AnimatedCounter target={4} />
          <p className="text-2xl font-bold">years of Service</p>
        </div>
      </div>
      <div className="flex-1 py-20">
        <div className="flex flex-col items-center justify-center text-5xl font-bold ">
          <AnimatedCounter target={20} />
          <p className="text-2xl font-bold">creative Experts</p>
        </div>
      </div>
      <div className="flex-1 py-20">
        <div className="flex flex-col items-center justify-center text-5xl font-bold ">
          <AnimatedCounter target={100} />
          <p className="text-2xl font-bold">happy fulfilled clients</p>
        </div>
      </div>
      <div className="flex-1 py-20">
        <div className="flex flex-col items-center justify-center text-5xl font-bold">
          <AnimatedCounter target={500} />
          <p className="text-2xl font-bold">projects delivered</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDisplay;
