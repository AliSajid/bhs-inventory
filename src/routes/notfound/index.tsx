import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";

const Notfound: FunctionalComponent = () => {
  return (
<div class="max-w-sm rounded overflow-hidden shadow-lg origin-center">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <Link href="/" activeClassName="text-center button">Back to Home</Link>
  </div>
</div>
  );
};

export default Notfound;
