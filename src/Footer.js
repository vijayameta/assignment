import image from './footer.png';

function Footer() {
    return (
        <div className="bg-black-900 text-gray-500 py-12 text-center">
            <p>Leading the charge for Industries!</p>
            <img src={image} alt="Footer Image" style={{ justifyContent: "center" }} />
        </div>
    );
}

export default Footer;
