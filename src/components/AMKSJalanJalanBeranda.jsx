import React from "react";

const MasonryCards = () => {
  const cards = [
    { image: "/imagesberanda/agustusan.png", title: "Karnaval kemerdekaan", subtitle: "Acara 17 san kampung Tahunan", layout: "vertikal" },
    { image: "/imagesberanda/badminton.png", title: "Badminton", subtitle: "kegiatan olahraga asrama", layout: "bottom" },
    { image: "/imagesberanda/futsal.jpg", title: "Futsal", subtitle: "kegiatan olahraga asrama", layout: "vertikal" },
    { image: "/imagesberanda/sholat.png", title: "Sholat berjamaah", subtitle: "kegiatan kerohanian asrama", layout: "vertikal" },
    { image: "/imagesberanda/GBS.jpg", title: "GBS", subtitle: "Gelar Budaya Sambas", layout: "vertikal" },
    { image: "/imagesberanda/pantai.jpg", title: "Mantai", subtitle: "Pantai Jungwook", layout: "bottom" },
    { image: "/imagesberanda/tirakatan.png", title: "Malam Tirakatan", subtitle: "Malam tirakatan", layout: "vertikal" },
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
            src="/imagesberanda/Asrama Mahasiswa kabupaten sambas.png"
            alt="Highlight"
            className="w-full h-130 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Masonry Grid for Cards */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        style={{
          gridAutoRows: "auto",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
              card.layout === "side" ? "col-span-2" : ""
            }`}
          >
            {/* Card Layout Handling */}
            {card.layout === "side" ? (
              <div className="flex items-center p-4 gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-24 h-24 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>
            ) : card.layout === "bottom" ? (
              <div className="p-1">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-auto rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.subtitle}</p>
              </div>
            ) : (
              /* Vertical Card Layout */
              <div className="p-1">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-auto rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">{card.title}</h3>
                <p className="text-sm text-gray-500 text-center">{card.subtitle}</p>
              </div>
            )}
          </div>
        ))}

        {/* Additional Cards */}
        <div className="space-y-4">
          {/* Card 1: Baju Adat */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="flex items-center p-4">
              <img
                src="/imagesberanda/melayu.jpg"
                alt="Baju adat"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Baju adat melayu AMKS</h3>
                <p className="text-sm text-gray-500">Baju melayu AMKS</p>
              </div>
            </div>
          </div>

          {/* Card 2: Renang di Sungai Mudal */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="flex items-center p-4">
              <img
                src="/imagesberanda/sungaimudal.png"
                alt="Renang di sungai mudal"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Renang di sungai mudal</h3>
                <p className="text-sm text-gray-500">kegiatan lahraga asrama</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg text-yellow-500 font-semibold">Tempat-Tempat yang sudah Asrama Kunjungi</h3>
      </div>
    </div>
  );
};

export default MasonryCards;
