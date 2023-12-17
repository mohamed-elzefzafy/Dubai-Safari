import FooterIcons from "./FooterIcons";
import "./footer.css";
import {languages , currencies} from "../../data";
import SelectBox from "./SelectBox";
const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-item select-box-wrabber">
  <SelectBox Items={languages} label={"Language"}/>
  <SelectBox Items={currencies} label={"Currency"}/>

    
    </div>
    <div className="footer-item">
      <h3 className="footer-item-title">Support</h3>
      <ul className="footer-item-list">
        <li className="footer-item-link">Contact</li>
        <li className="footer-item-link">Legal notice</li>
        <li className="footer-item-link">Privacy policy</li>
        <li className="footer-item-link">General terms</li>
        <li className="footer-item-link">Sitemap</li>
      </ul>
    </div>


    <div className="footer-item">
      <h3 className="footer-item-title">Company</h3>
      <ul className="footer-item-list">
        <li className="footer-item-link">About Us</li>
        <li className="footer-item-link">Careers</li>
        <li className="footer-item-link">Blog</li>
        <li className="footer-item-link">Press</li>
        <li className="footer-item-link">Gift Cards</li>
        <li className="footer-item-link">Magazine</li>
        <li className="footer-item-link">Travel Guides</li>
      </ul>
    </div>


    
    <div className="footer-item">
      <h3 className="footer-item-title">Work with us</h3>
      <ul className="footer-item-list">
        <li className="footer-item-link">Become A Supplier</li>
        <li className="footer-item-link">Become an Affiliate Partner</li>
    
      </ul>

<FooterIcons/>
<div className="footer-copy-right">
  Copy right &copy;  2023  Dubai Safari & Dev : Mohamed Elzefzafy 
</div>
    </div>
  </footer>
  )
}

export default Footer