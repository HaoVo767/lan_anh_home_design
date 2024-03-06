import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0F1E2B] md:flex justify-around p-5 py-10 mt-20">
        <div className="ml-10 md:ml-0">
          <div className="text-white text-xl mb-6">Thông tin liên hệ</div>
          <div className="text-white text-md">
            <span>
              <LocalPhoneIcon className="mb-1" />:
            </span>
            <span className="ml-2">123456789</span>
            <div className="text-white text-md mt-2">
              <span>
                <MailOutlineIcon className="mb-1" />:
              </span>
              <span className="ml-2">lananh@gmail.com</span>
            </div>
            <div className="text-white text-md mt-2">
              <span>
                <FacebookIcon className="mb-1" />:
              </span>
              <span className="ml-2">Facebook lan anh</span>
            </div>
            <div className="text-white text-md mt-2">
              <span>
                <LocationOnIcon className="mb-1" />:
              </span>
              <span className="ml-2">Đường phường quận thành phố</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white text-xl mb-6 ml-10 md:ml-0 mt-10 md:mt-0">Bản đồ</div>
          <iframe
            width="470"
            height="229"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=470&amp;height=229&amp;hl=en&amp;q=54%20%C4%91%C6%B0%E1%BB%9Dng%204%20tr%C6%B0%E1%BB%9Dng%20th%E1%BB%8D%20th%E1%BB%A7%20%C4%91%E1%BB%A9c%20Ho%20Chi%20Minh%20City+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=299813a709d3283136e72e3c251f257885db3e3e"
          ></script>
        </div>
      </div>
      <div className="bg-[#192B39] h-18"></div>
    </>
  );
};

export default Footer;
