"use client"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      {/* Payment Form */}
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value= "Your Public API Key" />
        <input type="hidden" name="tx_ref" value="lodestone-tx-12345678s7s9" />
        <input type="hidden" name="amount" value="10000" />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value="santafantaye@gmail.com" />
        <input type="hidden" name="first_name" value="Sintayehu" />
        <input type="hidden" name="last_name" value="Fantaye" />
        <input type="hidden" name="title" value="Let us do this" />
        <input type="hidden" name="description" value="Paying with Confidence with chapa" />
        <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
        <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
        <input type="hidden" name="return_url" value="https://lodestone.et" />
        <input type="hidden" name="meta[title]" value="test" />
        <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-2xl shadow-lg">
          Donate
        </button>
      </form>

   

      {/* Moving Text */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        {/* First Text */}
        <div className="whitespace-nowrap animate-marquee text-8xl font-bold">
          <span>I Love Donating &#x2022; I Love Donating &#x2022; </span>
        </div>
        {/* Second Text */}
        <div className="whitespace-nowrap animate-marquee-reverse text-8xl font-bold">
          <span>I Love Donating &#x2022; I Love Donating &#x2022; </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
