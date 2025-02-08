import React from "react";

const MasonryCards = () => {
  const cards = [
    { image: "/imagesberanda/1.jpg", title: "India", subtitle: "Travel community", layout: "vertical" },
    { image: "/imagesberanda/2.jpg", title: "Beach", subtitle: "Travel community", layout: "bottom" },
    { image: "/imagesberanda/3.jpg", title: "Travel Talk", subtitle: "Travel community", layout: "side" },
    { image: "/imagesberanda/4.jpg", title: "Event", subtitle: "Travel community", layout: "bottom" },
    { image: "/imagesberanda/5.jpg", title: "Gathering", subtitle: "Travel community", layout: "side" },
    { image: "/imagesberanda/6.jpg", title: "Community", subtitle: "Travel community", layout: "vertical" },
    { image: "/imagesberanda/7.jpg", title: "Celebration", subtitle: "Travel community", layout: "side" },
    { image: "/imagesberanda/8.jpg", title: "Team", subtitle: "Travel community", layout: "bottom" },
    { image: "/imagesberanda/9.jpg", title: "Group", subtitle: "Travel community", layout: "side" },
  ];

  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Kegiatan AMKS</h2>
          <p className="text-gray-600 mb-6">
            Berikut adalah kegiatan yang telah dilakukan oleh komunitas. Dari pantai hingga acara gathering, kami
            menjelajah segalanya!
          </p>
          <p className="text-gray-600">
            Kami percaya bahwa pengalaman bersama menciptakan kenangan yang berharga. Jelajahi cerita kami dari
            perjalanan yang tak terlupakan.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src="/imagesberanda/highlight.jpg"
            alt="Highlight"
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Masonry Grid for Cards */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{
          gridAutoRows: "auto",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              display: "inline-block",
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            {/* Card Layout Handling */}
            {card.layout === "side" ? (
              <div className="flex items-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-24 h-24 rounded-md mr-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>
            ) : card.layout === "bottom" ? (
              <>
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-auto rounded-t-lg"
                />
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </>
            ) : (
              /* Vertical Card Layout */
              <div className="p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-40 h-56 rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">{card.title}</h3>
                <p className="text-sm text-gray-500 text-center">{card.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg text-yellow-500 font-semibold">Tempat-Tempat yang sudah Asrama Kunjungi</h3>
      </div>
    </div>
  );
};

export default MasonryCards;
