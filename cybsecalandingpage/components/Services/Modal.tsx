import React from "react";

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <>
    <div id="services" className="flex flex-col justify-center  align-middle mx-16 my-6 rounded-3xl hover:shadow-lg border-indigo-200 border-2 transition-shadow duration-300">
      <div className="flex flex-row  items-center p-6 space-x-4">
          <div className="bg-indigo-500 p-4  rounded-lg text-white justify-center">{icon}</div>
        <div className="flex items-center space-x-4 text-center content-center">
          <h3 className="text-xl font-semibold ">{title}</h3>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center rounded-3xl p-6 space-y-4  transition-shadow duration-300">
        <p className="text-gray-500">{description}</p>
        <button className="flex w-full justify-around text-gray-900 font-semibold px-5 py-3 border-2 border-gray-500 rounded-full hover:text-gray-950 hover:shadow-xl">
          Read More
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M18.5886 13.9583H0.833344V11.0416H18.5886L10.4219 2.87492L12.5 0.833252L24.1667 12.4999L12.5 24.1666L10.4219 22.1249L18.5886 13.9583Z"
              fill="#0C072D"
            />
          </svg>
        </button>
      </div>
    </div>
  </>
);

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-indigo-600 text-lg font-semibold">Our Services</h2>
        <h1 className="text-3xl font-bold">Best Services We Offer For You</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-0">
        <ServiceCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 35 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 40.125V24.7031L0.15625 14.8125L8.82812 0.75H26.1719L34.8438 14.8125L28.75 24.7031V40.125L17.5 36.375L6.25 40.125ZM10 34.9219L17.5 32.4375L25 34.9219V28.875H10V34.9219ZM10.9375 4.5L4.5625 14.8125L10.9375 25.125H24.0625L30.4375 14.8125L24.0625 4.5H10.9375ZM15.5312 22.4531L8.875 15.8438L11.5469 13.1719L15.5312 17.1562L23.4531 9.1875L26.125 11.8125L15.5312 22.4531Z"
                fill="white"
              />
            </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
        <ServiceCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 28.625C16.9375 28.625 12.7813 27.3516 9.03127 24.8047C5.28127 22.2578 2.56252 18.8438 0.875015 14.5625C2.56252 10.2812 5.28127 6.86719 9.03127 4.32031C12.7813 1.77344 16.9375 0.5 21.5 0.5C26.0625 0.5 30.2188 1.77344 33.9688 4.32031C37.7188 6.86719 40.4375 10.2812 42.125 14.5625C41.9375 15.0312 41.7422 15.4844 41.5391 15.9219C41.336 16.3594 41.1094 16.7813 40.8594 17.1875L37.9063 14.4219C36.3125 11.2969 34.0547 8.82031 31.1328 6.99219C28.211 5.16406 25 4.25 21.5 4.25C17.9688 4.25 14.7266 5.17969 11.7735 7.03906C8.82033 8.89844 6.56252 11.4062 5.00002 14.5625C6.56252 17.7188 8.82033 20.2266 11.7735 22.0859C14.7266 23.9453 17.9688 24.875 21.5 24.875C21.8438 24.875 22.1797 24.8672 22.5078 24.8516C22.836 24.8359 23.1719 24.7969 23.5156 24.7344C23.3906 25.3594 23.3281 26 23.3281 26.6562C23.3281 27.3125 23.3906 27.9531 23.5156 28.5781C23.1719 28.6094 22.836 28.625 22.5078 28.625H21.5ZM21.5 23C19.1563 23 17.1641 22.1797 15.5235 20.5391C13.8828 18.8984 13.0625 16.9062 13.0625 14.5625C13.0625 12.2188 13.8828 10.2266 15.5235 8.58594C17.1641 6.94531 19.1563 6.125 21.5 6.125C23.8438 6.125 25.836 6.94531 27.4766 8.58594C29.1172 10.2266 29.9375 12.2188 29.9375 14.5625C29.9375 14.7812 29.9297 14.9922 29.9141 15.1953C29.8985 15.3984 29.875 15.6094 29.8438 15.8281L26.9375 18.5C26.3438 19.0938 25.8125 19.7266 25.3438 20.3984C24.875 21.0703 24.4844 21.7812 24.1719 22.5312C23.7344 22.6875 23.2969 22.8047 22.8594 22.8828C22.4219 22.9609 21.9688 23 21.5 23ZM21.5 19.625C22.9063 19.625 24.1016 19.1328 25.086 18.1484C26.0703 17.1641 26.5625 15.9688 26.5625 14.5625C26.5625 13.1562 26.0703 11.9609 25.086 10.9766C24.1016 9.99219 22.9063 9.5 21.5 9.5C20.0938 9.5 18.8985 9.99219 17.9141 10.9766C16.9297 11.9609 16.4375 13.1562 16.4375 14.5625C16.4375 15.9688 16.9297 17.1641 17.9141 18.1484C18.8985 19.1328 20.0938 19.625 21.5 19.625ZM34.625 34.25C32.5313 34.25 30.7578 33.5156 29.3047 32.0469C27.8516 30.5781 27.1094 28.7969 27.0781 26.7031C27.0781 25.6719 27.2969 24.6875 27.7344 23.75C28.1719 22.8125 28.7656 21.9844 29.5156 21.2656L34.625 16.4375L39.6875 21.2656C40.4375 21.9844 41.0235 22.8047 41.4453 23.7266C41.8672 24.6484 42.0938 25.625 42.125 26.6562C42.125 28.7812 41.3906 30.5781 39.9219 32.0469C38.4531 33.5156 36.6875 34.25 34.625 34.25ZM34.625 30.5C35.6563 30.5 36.5391 30.125 37.2735 29.375C38.0078 28.625 38.3594 27.7188 38.3281 26.6562C38.3281 26.125 38.211 25.625 37.9766 25.1563C37.7422 24.6875 37.4375 24.2812 37.0625 23.9375L34.625 21.5938L32.1406 23.9375C31.7656 24.2812 31.4531 24.6953 31.2031 25.1797C30.9531 25.6641 30.8438 26.1719 30.875 26.7031C30.875 27.7656 31.2344 28.6641 31.9531 29.3984C32.6719 30.1328 33.5625 30.5 34.625 30.5Z"
                fill="white"
              />
            </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
        <ServiceCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.125 40.1875L11.5625 34.1875L4.8125 32.6875L5.46875 25.75L0.875 20.5L5.46875 15.25L4.8125 8.3125L11.5625 6.8125L15.125 0.8125L21.5 3.53125L27.875 0.8125L31.4375 6.8125L38.1875 8.3125L37.5313 15.25L42.125 20.5L37.5313 25.75L38.1875 32.6875L31.4375 34.1875L27.875 40.1875L21.5 37.4688L15.125 40.1875ZM16.7188 35.4062L21.5 33.3438L26.375 35.4062L29 30.9063L34.1562 29.6875L33.6875 24.4375L37.1562 20.5L33.6875 16.4688L34.1562 11.2188L29 10.0938L26.2812 5.59375L21.5 7.65625L16.625 5.59375L14 10.0938L8.84375 11.2188L9.3125 16.4688L5.84375 20.5L9.3125 24.4375L8.84375 29.7812L14 30.9063L16.7188 35.4062ZM19.5312 27.1562L30.125 16.5625L27.5 13.8438L19.5312 21.8125L15.5 17.875L12.875 20.5L19.5312 27.1562Z"
                fill="white"
              />
            </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
        <ServiceCard
          icon={
            <svg
            width="30"
            height="30"
            viewBox="0 0 35 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 40.125V24.7031L0.15625 14.8125L8.82812 0.75H26.1719L34.8438 14.8125L28.75 24.7031V40.125L17.5 36.375L6.25 40.125ZM10 34.9219L17.5 32.4375L25 34.9219V28.875H10V34.9219ZM10.9375 4.5L4.5625 14.8125L10.9375 25.125H24.0625L30.4375 14.8125L24.0625 4.5H10.9375ZM15.5312 22.4531L8.875 15.8438L11.5469 13.1719L15.5312 17.1562L23.4531 9.1875L26.125 11.8125L15.5312 22.4531Z"
              fill="white"
            />
          </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
        <ServiceCard
           icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 28.625C16.9375 28.625 12.7813 27.3516 9.03127 24.8047C5.28127 22.2578 2.56252 18.8438 0.875015 14.5625C2.56252 10.2812 5.28127 6.86719 9.03127 4.32031C12.7813 1.77344 16.9375 0.5 21.5 0.5C26.0625 0.5 30.2188 1.77344 33.9688 4.32031C37.7188 6.86719 40.4375 10.2812 42.125 14.5625C41.9375 15.0312 41.7422 15.4844 41.5391 15.9219C41.336 16.3594 41.1094 16.7813 40.8594 17.1875L37.9063 14.4219C36.3125 11.2969 34.0547 8.82031 31.1328 6.99219C28.211 5.16406 25 4.25 21.5 4.25C17.9688 4.25 14.7266 5.17969 11.7735 7.03906C8.82033 8.89844 6.56252 11.4062 5.00002 14.5625C6.56252 17.7188 8.82033 20.2266 11.7735 22.0859C14.7266 23.9453 17.9688 24.875 21.5 24.875C21.8438 24.875 22.1797 24.8672 22.5078 24.8516C22.836 24.8359 23.1719 24.7969 23.5156 24.7344C23.3906 25.3594 23.3281 26 23.3281 26.6562C23.3281 27.3125 23.3906 27.9531 23.5156 28.5781C23.1719 28.6094 22.836 28.625 22.5078 28.625H21.5ZM21.5 23C19.1563 23 17.1641 22.1797 15.5235 20.5391C13.8828 18.8984 13.0625 16.9062 13.0625 14.5625C13.0625 12.2188 13.8828 10.2266 15.5235 8.58594C17.1641 6.94531 19.1563 6.125 21.5 6.125C23.8438 6.125 25.836 6.94531 27.4766 8.58594C29.1172 10.2266 29.9375 12.2188 29.9375 14.5625C29.9375 14.7812 29.9297 14.9922 29.9141 15.1953C29.8985 15.3984 29.875 15.6094 29.8438 15.8281L26.9375 18.5C26.3438 19.0938 25.8125 19.7266 25.3438 20.3984C24.875 21.0703 24.4844 21.7812 24.1719 22.5312C23.7344 22.6875 23.2969 22.8047 22.8594 22.8828C22.4219 22.9609 21.9688 23 21.5 23ZM21.5 19.625C22.9063 19.625 24.1016 19.1328 25.086 18.1484C26.0703 17.1641 26.5625 15.9688 26.5625 14.5625C26.5625 13.1562 26.0703 11.9609 25.086 10.9766C24.1016 9.99219 22.9063 9.5 21.5 9.5C20.0938 9.5 18.8985 9.99219 17.9141 10.9766C16.9297 11.9609 16.4375 13.1562 16.4375 14.5625C16.4375 15.9688 16.9297 17.1641 17.9141 18.1484C18.8985 19.1328 20.0938 19.625 21.5 19.625ZM34.625 34.25C32.5313 34.25 30.7578 33.5156 29.3047 32.0469C27.8516 30.5781 27.1094 28.7969 27.0781 26.7031C27.0781 25.6719 27.2969 24.6875 27.7344 23.75C28.1719 22.8125 28.7656 21.9844 29.5156 21.2656L34.625 16.4375L39.6875 21.2656C40.4375 21.9844 41.0235 22.8047 41.4453 23.7266C41.8672 24.6484 42.0938 25.625 42.125 26.6562C42.125 28.7812 41.3906 30.5781 39.9219 32.0469C38.4531 33.5156 36.6875 34.25 34.625 34.25ZM34.625 30.5C35.6563 30.5 36.5391 30.125 37.2735 29.375C38.0078 28.625 38.3594 27.7188 38.3281 26.6562C38.3281 26.125 38.211 25.625 37.9766 25.1563C37.7422 24.6875 37.4375 24.2812 37.0625 23.9375L34.625 21.5938L32.1406 23.9375C31.7656 24.2812 31.4531 24.6953 31.2031 25.1797C30.9531 25.6641 30.8438 26.1719 30.875 26.7031C30.875 27.7656 31.2344 28.6641 31.9531 29.3984C32.6719 30.1328 33.5625 30.5 34.625 30.5Z"
                fill="white"
              />
            </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
        <ServiceCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.125 40.1875L11.5625 34.1875L4.8125 32.6875L5.46875 25.75L0.875 20.5L5.46875 15.25L4.8125 8.3125L11.5625 6.8125L15.125 0.8125L21.5 3.53125L27.875 0.8125L31.4375 6.8125L38.1875 8.3125L37.5313 15.25L42.125 20.5L37.5313 25.75L38.1875 32.6875L31.4375 34.1875L27.875 40.1875L21.5 37.4688L15.125 40.1875ZM16.7188 35.4062L21.5 33.3438L26.375 35.4062L29 30.9063L34.1562 29.6875L33.6875 24.4375L37.1562 20.5L33.6875 16.4688L34.1562 11.2188L29 10.0938L26.2812 5.59375L21.5 7.65625L16.625 5.59375L14 10.0938L8.84375 11.2188L9.3125 16.4688L5.84375 20.5L9.3125 24.4375L8.84375 29.7812L14 30.9063L16.7188 35.4062ZM19.5312 27.1562L30.125 16.5625L27.5 13.8438L19.5312 21.8125L15.5 17.875L12.875 20.5L19.5312 27.1562Z"
                fill="white"
              />
            </svg>
          }
          title="Our Services Cybseca"
          description="Islike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
