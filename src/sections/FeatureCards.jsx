import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border p-8 flex flex-col gap-4 relative z-10"
        >
          <div className="size-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white-50/15 to-blue-50/5 group-hover:from-white-50/25 group-hover:to-blue-50/15 transition-all duration-300">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2 group-hover:text-white-50 transition-colors duration-300">{title}</h3>
          <p className="text-white-50 text-lg group-hover:text-white transition-colors duration-300">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;