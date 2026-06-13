export default function Partner() {
  return (
    <section className="py-20 bg-gray-50">

      {/* LOGO PREVIEW (VISUAL TRUST BOOST) */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>

        <p className="text-gray-600 mb-10">
          We collaborate with trusted institutions to deliver impact-driven programs.
        </p>

        {/* LOGOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* TVET */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition">
            <img
              src="https://www.rtb.gov.rw/fileadmin/user_upload/RTB/Background_Images/logortb.jpg"
              alt="TVET Rwanda"
              className="h-20 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">TVET Rwanda</h3>
            <p className="text-gray-500 text-sm text-center">
              Technical & vocational training support
            </p>
          </div>

          {/* RDB */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition">
            <img
              src="https://res.cloudinary.com/devex/image/fetch/ar_1:1,b_transparent,c_pad,f_auto,q_auto,w_160/https://neo-assets.s3.amazonaws.com/assets/0133/9936/rdb.png"
              alt="RDB Rwanda"
              className="h-20 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">RDB</h3>
            <p className="text-gray-500 text-sm text-center">
              Business & development collaboration
            </p>
          </div>

          {/* RGB */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition">
            <img
              src="https://www.rgb.rw/fileadmin/user_upload/RGB/News_Images/RGB_Logo__1_-01.png"
              alt="RGB Rwanda"
              className="h-20 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">RGB</h3>
            <p className="text-gray-500 text-sm text-center">
              NGO compliance & registration support
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}