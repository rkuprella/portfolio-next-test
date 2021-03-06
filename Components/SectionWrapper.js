import Image from "next/image";
import Photo from "../public/photo.jpg";

const SectionWrapper = ({ id, title, subtitle, text, about, children }) => {
  return (
    <section
      id={id}
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-4 mx-auto">
        <div
          className={`max-w-[1000px] w-full grid ${
            text && "sm:grid-cols-2"
          } gap-6 sm:place-content-center`}
        >
          <div
            className={`pl-8 border-l-4 flex flex-col ${
              text
                ? "items-start sm:items-end sm:text-right"
                : "sm:items-center"
            } border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0 sm:translate-y-[-60px]`}
          >
            <div className="inline pb-2 text-4xl font-bold border-b-4 border-orange-600 text-cyan-100 sm:px-2 sm:mb-6">
              {title}
            </div>
            <div
              className={`${
                text ? "justify-end" : "text-center"
              } flex flex-col font-bold font-dance text-2xl sm:text-3xl text-orange-300`}
            >
              <p className="sm:max-w-[350px] self-end">{subtitle}</p>
              {about && (
                <div className="mt-8 max-w-[200px] self-end">
                  <Image
                    src={Photo}
                    alt=""
                    width={936}
                    height={1233}
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </div>

          {text && (
            <div>
              <p className="p-4 text-xl leading-relaxed lg:text-2xl text-slate-100">
                {text}
              </p>
            </div>
          )}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
