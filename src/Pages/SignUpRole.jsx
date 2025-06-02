import { useNavigate } from "react-router-dom";
import ArtisanBg from "../assets/ArtisanBg.png";

export default function SignUpRole() {
  const navigate = useNavigate();

  return (
    <div
      className="flex  flex-col items-center justify-center h-screen relative"
      style={{ backgroundImage: `url("${ArtisanBg}")` }}
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>
      <div className="text-2xl font-semibold mb-12 ">Logo</div>
      <h1 className="text-xl md:text-2xl font-bold mb-8">Sign Up As</h1>
      <div className="space-y-4 w-full max-w-xs z-10">
        <button
          onClick={() => navigate("/client")}
          className="w-full px-6 py-3 bg-sky-600 text-white rounded-lg text-lg font-semibold transition-colors"
        >
          Worker
        </button>
        <button
          onClick={() => navigate("/cleaner")}
          className="w-full px-6 py-3 bg-white text-sky-600 border-2 border-sky-600 rounded-lg text-lg font-semibold hover:bg-sky-50 transition-colors"
        >
          Client
        </button>
      </div>
    </div>
  );
}
