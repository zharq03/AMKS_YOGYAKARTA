import React from "react";

const MasonryCards = () => {
  
  const cards = [
    // { image: "/imagesberanda/agustusan.png", title: "Karnaval kemerdekaan", subtitle: "Acara 17 san kampung Tahunan", layout: "bottom" },
  ];

  return (
    <div className="px-4 py-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Kegiatan AMKS</h2>
          <p className="text-gray-100 mb-6">
            Berikut adalah kegiatan yang telah dilakukan oleh komunitas. Dari pantai hingga acara gathering, kami
            menjelajah segalanya!
          </p>
          <p className="text-gray-100">
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

        {/* Card 1 : boyro  */}
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="p-1">
              <img
                src="/imagesberanda/boyro.jpg"
                alt="boyro"
                className="object-cover w-full h-auto rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS X Rahadi Osman 1</h3>
                <p className="text-sm text-gray-500">Foto ketika ada kegiatan bersama asrama Ro 1</p>
              </div>
            </div>
          </div>

        <div className="space-y-4">
          {/* Card 2: Voli */}
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
                src="/imagesberanda/voly.jpg"
                alt="voly"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Main Voli</h3>
                <p className="text-sm text-gray-500">Olahraga Voli pantai</p>
              </div>
            </div>
          </div>

          {/* Card 3: Renang di Sungai Mudal */}
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
        {/* Card 4: Makrab */}
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="p-1">
              <img
                src="/imagesberanda/makrabroxdd.jpg"
                alt="Makrab"
                className="object-cover w-full h-auto rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Makrab asrama AMKSxROxDD</h3>
                <p className="text-sm text-gray-500">Acara Besar yaitu GBS</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
          {/* Card 5: Baju Adat */}
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

          {/* Card 6: Idul Adha */}
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
                src="/imagesberanda/iduladha.jpg"
                alt="Idul Adha"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Idul Adha besame</h3>
                <p className="text-sm text-gray-500">Kegiatan kerohanian sholat id bareng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Agustusan */}
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="p-1">
              <img
                src="/imagesberanda/agustusan.png"
                alt="Agustusan"
                className="object-cover w-full h-auto rounded-lg mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Karnaval Desa Tahunan</h3>
                <p className="text-sm text-gray-500">memperingati hari kemerdekaan Indonesia</p>
              </div>
            </div>
          </div>

        <div className="space-y-4">
          {/* Card 7: ngaji */}
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
                src="/imagesberanda/ngaji.jpg"
                alt="ngaji"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Murojaah same AMKS</h3>
                <p className="text-sm text-gray-500">Kegiatan di setiap malam jumat</p>
              </div>
            </div>
          </div>

          {/* Card 8: Sholat */}
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
                src="/imagesberanda/sholat.png"
                alt="Sholat"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Sholat Berjamaah</h3>
                <p className="text-sm text-gray-500">kegiatan di setiap malam jumat asrama</p>
              </div>
            </div>
          </div>
        </div>

         {/* Card 9: Tirakatan */}
         <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="p-1">
              <img
                src="/imagesberanda/tirakatan.png"
                alt="Tirakatan"
                className="object-cover w-full h-auto rounded-lg mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Malam Tirakatan RT 12</h3>
                <p className="text-sm text-gray-500">Malam Tirakatan AMKS bersama warga RT 12 Tahunan</p>
              </div>
            </div>
          </div>

        <div className="space-y-4">
          {/* Card 10: GBS */}
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
                src="/imagesberanda/GBS.jpg"
                alt="GBSt"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Gelar Budaya Sambas</h3>
                <p className="text-sm text-gray-500">Kegiatan besar asrama </p>
              </div>
            </div>
          </div>

          {/* Card 8: Bubur pedas */}
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
                src="/imagesberanda/bbrpds.JPG"
                alt="Bubur pedas"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Bubur pedas</h3>
                <p className="text-sm text-gray-500">Ajang silaturahmi antar pelajar sambas di jogja</p>
              </div>
            </div>
          </div>
        </div>

         {/* Card 10: Pantai */}
         <div
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              maxWidth: "100%",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <div className="p-1">
              <img
                src="/imagesberanda/pantai.jpg"
                alt="Pantai"
                className="object-cover w-full h-auto rounded-lg mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Pagi Mantai</h3>
                <p className="text-sm text-gray-500">mantai same same</p>
              </div>
            </div>
          </div>
        
          <div className="space-y-4">
          {/* Card 11: Badminton */}
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
                src="/imagesberanda/badminton.png"
                alt="Badminton"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS main Badminton</h3>
                <p className="text-sm text-gray-500">kegiatan olahraga asrama </p>
              </div>
            </div>
          </div>

          {/* Card 12: Futsal */}
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
                src="/imagesberanda/futsal.jpg"
                alt="futsal"
                className="object-cover w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">AMKS Main Futsal</h3>
                <p className="text-sm text-gray-500">kegiatan olahraga asrama</p>
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
