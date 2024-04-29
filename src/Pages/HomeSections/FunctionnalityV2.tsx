import CardFunctionnality from "../Components/CardFunctionnality"

const FunctionnalityV2 = () => {
  return (
    <div className="2xl:h-screen grid grid-cols-1 sm:grid-cols-5 gap-10">
      <div className="flex items-center col-span-2">
        <div className="space-y-10 text-center sm:text-start">
          <h1 className="text-2xl 2xl:text-3xl font-bold">
            Notre fonctionnalitées
          </h1>
          <p className="text-4xl 2xl:text-5xl">
            Qu'est ce que{" "}
            <span className="font-bold text-primary">Dreamean</span> ?
          </p>
          <div className="flex justify-center sm:justify-start">
            <p
              data-aos="fade-right"
              className="w-2/3 text-lg text-justify 2xl:text-xl border-b-4 sm:border-b-0 sm:border-l-4 border-secondary first-letter:text-3xl pl-2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              atque quo natus quam quas.
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-span-3 flex flex-col justify-center gap-[5%]"
        data-aos="zoom-in"
      >
        <div className="sm:flex justify-center sm:h-1/3">
          <CardFunctionnality />
        </div>
        <div className="sm:h-1/3 grid sm:flex justify-center gap-[5%]">
          <CardFunctionnality />
          <CardFunctionnality />
        </div>
      </div>
    </div>
  )
}

export default FunctionnalityV2
