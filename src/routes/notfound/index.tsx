import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import { AlertOctagon } from "preact-feather";

const Notfound: FunctionalComponent = () => {
  return (
    <div className="flex-mb-4 overflow-hidden">
      <div className="w-full h-12 p-12">
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

      <div className="mx-auto w-full h-12 p-8 ml-4 mr-4 object-center">
        <button className="rounded shadow inline-block border-2 bg-blue-400">
          <Link href="/" class="p-4 text-white mx-10">
            Go to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Notfound;
