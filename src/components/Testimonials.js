import React from "react";

function Testimonials() {
  let users = [
    "Charlie Howse",
    "Steve Jobs",
    "Mark Zuckerberg",
    "Elon Musk",
    "Taylor Swift",
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <div className="flex flex-row flex-wrap justify-center w-full p-12">
        {/* <!-- ======= Testimonials Section ======= */}
        {users.map((user) => {
          return (
            <div class="w-1/4 mx-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div class="w-full flex mb-4 items-center">
                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=4" alt="" />
                </div>
                <div class="flex-grow pl-3">
                  <h6 class="font-bold text-sm uppercase text-gray-600">
                    {user.name}
                  </h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto inventore voluptatum nostrum atque, corrupti, vitae
                  esse id accusamus dignissimos neque reprehenderit natus, hic
                  sequi itaque dicta nisi voluptatem! Culpa, iusto.
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;
