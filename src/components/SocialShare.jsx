import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const SocialShare = () => {
  return (
    <div className="flex gap-2 pt-2 pl-2">
      <BsGithub className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-primary " />
      <BsFacebook className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-primary " />
      <BsTwitter className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-primary " />
      <BsLinkedin className="w-6 hover:scale-125 duration-200 hover:cursor-pointer fill-primary " />
    </div>
  );
};

export default SocialShare;
