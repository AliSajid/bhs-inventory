import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import { AlertOctagon } from "preact-feather";

const Notfound: FunctionalComponent = () => {
  return (
    <div className="flex-mb-8 overflow-hidden h-screen bg-gray-100">
      <div className="w-full h-12 p-12 left-0">
        <h1 className="mx-auto text-red-600 font-bold text-center text-4xl">
          Page Not Found
        </h1>
      </div>

      <div className="w-full h-12 p-8">
        <AlertOctagon size={56} className="mx-auto" />
      </div>
      <div className="w-full h-12 p-12">
        <p className="text-center text-xl">
          You've landed on a page that doesn't exist. <br />
          We apologize for the inconvenience.
        </p>
      </div>
      <div className="w-full h-12 p-12 text-center">
        <Link href="/" class="shadow m-2 bg-blue-500 p-2 border-2 text-white rounded-md hover:bg-blue-100 hover:text-black hover:border-black">
           Go To Home
        </Link>
</div>
    </div>
  );
};

export default Notfound;
