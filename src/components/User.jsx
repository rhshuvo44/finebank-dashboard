
import SocialShare from "./SocialShare";
const User = () => {
  return (
    <div className="flex items-center  w-full   rounded-md shadow-lg">
      <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="ripon.jpg" alt="user" />
          </div>
        </div>
      </section>

      <section className="block border-l border-gray-300 m-2">
        <div className="pl-2">
          <h3 className="text-gray-600 font-semibold text-sm">Ripon</h3>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-primary to-secondary text-xm ">
            Web Developer
          </h3>
        </div>
        <SocialShare />
      </section>
    </div>
  );
};

export default User;
