import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";
import FAQSection from "../components/FAQSection";
import FeaturedResourcesSection from "../components/FeaturedResourcesSection";
import {
  AIMarketingSection,
  BlogSection,
  CaseStudiesSection,
} from "../components/ResourceSections";
import ResourceUsageSection from "../components/ResourceUsageSection";
import SectionHeading from "../components/SectionHeading";
import ScrollToSection from "../utils";

// images
import ResourceImage from "../assets/images/influencer-marketing.jpg";

export default function ResourcesOverview() {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-white text-gray-900"
      onMouseMove={handleMouseMove}
    >
      <section className="hero__section">
        <div className="hero__wrapper">
          <div className="hero__content">
            <SectionHeading
              variant="secondary"
              size="lg"
              className="text-white lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              Welcome to the Resources Overview Page for Sample.com
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.85 }}
              className="max-w-3xl mx-auto lg:mx-0 text-base sm:text-lg mb-8"
            >
              Here, you'll find a wealth of information and tools designed to
              help you get the most out of your social media advertising.
              Whether you're new to digital marketing or an experienced
              professional, our resources are here to guide you through every
              stage of the ad creation and optimization process.From blogs and
              case studies to AI marketing insights, we provide valuable content
              to keep you informed, inspired, and ready to achieve your
              advertising goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.85 }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                onClick={() => ScrollToSection("#why-explore-resources")}
              >
                Explore Resources
              </Button>
            </motion.div>
          </div>
          <div className="hero__animation">
            <motion.div
              className="seo-visualization"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotateY: mousePosition.x * 20,
                rotateX: mousePosition.y * -20,
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              style={{
                transition: "transform 0.1s ease-out",
              }}
            >
              <div
                className="keyword-bubble"
                style={{
                  width: "73.9247px",
                  height: "73.9247px",
                  left: "20%",
                  top: "20%",
                  transform: "translateZ(54.3316px)",
                  animationDelay: "0s",
                }}
              >
                SEO
              </div>
              <div
                className="keyword-bubble"
                style={{
                  width: "70.553px",
                  height: "70.553px",
                  left: "50%",
                  top: "20%",
                  transform: "translateZ(17.9131px)",
                  animationDelay: "0.3s",
                }}
              >
                Content
              </div>
              <div
                className="keyword-bubble"
                style={{
                  width: "61.6924px",
                  height: "61.6924px",
                  left: "80%",
                  top: "20%",
                  transform: "translateZ(54.281px)",
                  animationDelay: "0.6s",
                }}
              >
                Rankings
              </div>
              <div
                className="keyword-bubble"
                style={{
                  width: "60.2545px",
                  height: "60.2545px",
                  left: "20%",
                  top: "50%",
                  transform: "translateZ(17.9885px)",
                  animationDelay: "0.9s",
                }}
              >
                Analytics
              </div>
              <div
                className="keyword-bubble"
                style={{
                  width: "80.8925px",
                  height: "80.8925px",
                  left: "50%",
                  top: "50%",
                  transform: "translateZ(80.7116px)",
                  animationDelay: "1.2s",
                }}
              >
                Keywords
              </div>
              <div
                className="keyword-bubble"
                style={{
                  width: "86.8496px",
                  height: "86.8496px",
                  left: "80%",
                  top: "50%",
                  transform: "translateZ(46.8843px)",
                  animationDelay: "1.5s",
                }}
              >
                Traffic
              </div>
              <div
                className="ranking-bar"
                style={{
                  height: "177.58px",
                  left: "70%",
                  transform: "translateZ(0px)",
                }}
              />
              <div
                className="ranking-bar"
                style={{
                  height: "293.318px",
                  left: "75%",
                  transform: "translateZ(20px)",
                }}
              />
              <div
                className="ranking-bar"
                style={{
                  height: "223.347px",
                  left: "80%",
                  transform: "translateZ(40px)",
                }}
              />
              <div
                className="ranking-bar"
                style={{
                  height: "244.414px",
                  left: "85%",
                  transform: "translateZ(60px)",
                }}
              />
              <div
                className="ranking-bar"
                style={{
                  height: "181.278px",
                  left: "90%",
                  transform: "translateZ(80px)",
                }}
              />
              <div
                className="search-pulse"
                style={{ left: "50%", top: "50%", animationDelay: "0s" }}
              />
              <div
                className="search-pulse"
                style={{ left: "70%", top: "60%", animationDelay: "0.5s" }}
              />
              <div
                className="data-point"
                style={{
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "translateZ(49.9331px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "translateZ(46.383px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "translateZ(9.9082px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "44.6591%",
                  top: "8.63776%",
                  transform: "translateZ(14.4316px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "13.3527%",
                  top: "81.5437%",
                  transform: "translateZ(57.9808px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "translateZ(61.2952px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "translateZ(55.677px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "43.5277%",
                  top: "70.8517%",
                  transform: "translateZ(93.3897px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "15.9803%",
                  top: "42.4014%",
                  transform: "translateZ(29.0177px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "translateZ(78.0421px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "62.4838%",
                  top: "5.50098%",
                  transform: "translateZ(90.9985px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "83.1081%",
                  top: "91.9778%",
                  transform: "translateZ(19.9448px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "56.7229%",
                  top: "62.4058%",
                  transform: "translateZ(33.5708px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "97.4374%",
                  top: "8.91194%",
                  transform: "translateZ(19.506px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "translateZ(89.1633px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "translateZ(19.4485px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "93.6218%",
                  top: "55.3555%",
                  transform: "translateZ(29.4281px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "28.7524%",
                  top: "15.0207%",
                  transform: "translateZ(93.0125px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "2.56589%",
                  top: "27.6831%",
                  transform: "translateZ(25.6228px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "87.7173%",
                  top: "91.8211%",
                  transform: "translateZ(87.9624px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "77.2238%",
                  top: "0.0821249%",
                  transform: "translateZ(18.475px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "85.843%",
                  top: "45.4056%",
                  transform: "translateZ(66.8057px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "15.3764%",
                  top: "68.6445%",
                  transform: "translateZ(96.4086px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "75.6196%",
                  top: "85.0214%",
                  transform: "translateZ(20.464px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "58.6474%",
                  top: "64.8067%",
                  transform: "translateZ(38.2145px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "84.7517%",
                  top: "34.604%",
                  transform: "translateZ(8.15289px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "91.8224%",
                  top: "19.5626%",
                  transform: "translateZ(29.4725px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "62.8743%",
                  top: "23.2059%",
                  transform: "translateZ(90.5204px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "44.1316%",
                  top: "89.9262%",
                  transform: "translateZ(74.5723px)",
                }}
              />
              <div
                className="data-point"
                style={{
                  left: "98.2804%",
                  top: "83.1629%",
                  transform: "translateZ(56.7217px)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "17.1289%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(1.98771rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.6072%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(-3.10864rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "21.5583%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(0.137861rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "14.3662%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(0.984036rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "5.97691%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(-1.37887rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.9371%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(1.27705rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "20.8094%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(0.713113rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "21.732%",
                  left: "76.0837%",
                  top: "5.94929%",
                  transform: "rotate(2.22412rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "12.8471%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(-0.856102rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.8545%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(-3.04173rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.6915%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(-1.3902rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.9317%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(-0.950515rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.2642%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(-0.837517rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "6.38795%",
                  left: "41.0685%",
                  top: "84.3206%",
                  transform: "rotate(1.0707rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "7.05043%",
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "rotate(-2.57817rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "14.1936%",
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "rotate(-1.03595rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.1264%",
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "rotate(0.378911rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.4214%",
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "rotate(-0.819727rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.2191%",
                  left: "49.4883%",
                  top: "74.6172%",
                  transform: "rotate(1.90739rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.7126%",
                  left: "44.6591%",
                  top: "8.63776%",
                  transform: "rotate(0.487181rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "18.0986%",
                  left: "44.6591%",
                  top: "8.63776%",
                  transform: "rotate(-0.174196rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "17.1397%",
                  left: "44.6591%",
                  top: "8.63776%",
                  transform: "rotate(2.75999rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "23.3243%",
                  left: "44.6591%",
                  top: "8.63776%",
                  transform: "rotate(0.674608rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.0569%",
                  left: "13.3527%",
                  top: "81.5437%",
                  transform: "rotate(-1.41518rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "17.4338%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(-1.963rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "15.3426%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(-0.243455rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.9122%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(1.19021rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.9939%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(-1.21191rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.0676%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(0.958965rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "20.3054%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(0.694341rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.7672%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(-0.0900921rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "6.47281%",
                  left: "69.1475%",
                  top: "21.611%",
                  transform: "rotate(2.89263rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.1059%",
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "rotate(-1.51817rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "12.5384%",
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "rotate(-3.05024rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "7.98352%",
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "rotate(-2.97796rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "21.5546%",
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "rotate(-2.75633rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "10.3147%",
                  left: "95.5942%",
                  top: "93.1217%",
                  transform: "rotate(-1.30734rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "15.6668%",
                  left: "43.5277%",
                  top: "70.8517%",
                  transform: "rotate(-0.569362rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.2376%",
                  left: "43.5277%",
                  top: "70.8517%",
                  transform: "rotate(-3.06335rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.2833%",
                  left: "43.5277%",
                  top: "70.8517%",
                  transform: "rotate(-0.380341rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "19.0841%",
                  left: "43.5277%",
                  top: "70.8517%",
                  transform: "rotate(1.53914rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "19.9142%",
                  left: "15.9803%",
                  top: "42.4014%",
                  transform: "rotate(-2.30988rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.2501%",
                  left: "15.9803%",
                  top: "42.4014%",
                  transform: "rotate(1.5938rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "25.731%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(-2.34166rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "10.2948%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(-1.91262rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.3543%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(1.90704rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.6316%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(-2.09001rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.3072%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(2.39206rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "18.1485%",
                  left: "97.0727%",
                  top: "65.0546%",
                  transform: "rotate(1.50421rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "24.872%",
                  left: "62.4838%",
                  top: "5.50098%",
                  transform: "rotate(0.522464rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "15.7045%",
                  left: "62.4838%",
                  top: "5.50098%",
                  transform: "rotate(-0.352294rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "17.7092%",
                  left: "62.4838%",
                  top: "5.50098%",
                  transform: "rotate(1.54875rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "4.6119%",
                  left: "83.1081%",
                  top: "91.9778%",
                  transform: "rotate(-0.0339905rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "10.221%",
                  left: "83.1081%",
                  top: "91.9778%",
                  transform: "rotate(-2.39302rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "17.5471%",
                  left: "83.1081%",
                  top: "91.9778%",
                  transform: "rotate(-0.526325rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.434%",
                  left: "56.7229%",
                  top: "62.4058%",
                  transform: "rotate(-0.614106rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.4712%",
                  left: "56.7229%",
                  top: "62.4058%",
                  transform: "rotate(0.874747rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "3.07696%",
                  left: "56.7229%",
                  top: "62.4058%",
                  transform: "rotate(0.895121rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.142%",
                  left: "97.4374%",
                  top: "8.91194%",
                  transform: "rotate(2.55011rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.058%",
                  left: "97.4374%",
                  top: "8.91194%",
                  transform: "rotate(-2.72975rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.6533%",
                  left: "97.4374%",
                  top: "8.91194%",
                  transform: "rotate(2.02944rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "12.0402%",
                  left: "97.4374%",
                  top: "8.91194%",
                  transform: "rotate(2.05596rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.0994%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(1.73976rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "19.0881%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(-1.93582rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.5523%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(1.50523rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.7067%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(1.52805rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "7.95767%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(0.208873rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "21.8154%",
                  left: "84.0377%",
                  top: "17.9126%",
                  transform: "rotate(2.8965rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.9202%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(0.544043rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "6.80373%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(-0.176096rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.4172%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(2.41524rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.2396%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(-1.13347rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.86%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(-1.1323rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.4937%",
                  left: "79.1445%",
                  top: "46.5976%",
                  transform: "rotate(-2.17853rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "12.6297%",
                  left: "93.6218%",
                  top: "55.3555%",
                  transform: "rotate(-2.23434rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.5677%",
                  left: "93.6218%",
                  top: "55.3555%",
                  transform: "rotate(-1.97474rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "28.195%",
                  left: "93.6218%",
                  top: "55.3555%",
                  transform: "rotate(1.40481rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.0872%",
                  left: "28.7524%",
                  top: "15.0207%",
                  transform: "rotate(2.6912rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.8777%",
                  left: "87.7173%",
                  top: "91.8211%",
                  transform: "rotate(-2.62954rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "13.658%",
                  left: "87.7173%",
                  top: "91.8211%",
                  transform: "rotate(-0.686621rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "24.3436%",
                  left: "77.2238%",
                  top: "0.0821249%",
                  transform: "rotate(0.927681rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "27.2143%",
                  left: "77.2238%",
                  top: "0.0821249%",
                  transform: "rotate(2.12619rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "10.8566%",
                  left: "85.843%",
                  top: "45.4056%",
                  transform: "rotate(-1.67148rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.5257%",
                  left: "85.843%",
                  top: "45.4056%",
                  transform: "rotate(-1.34342rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "26.3949%",
                  left: "75.6196%",
                  top: "85.0214%",
                  transform: "rotate(-2.26922rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "22.7368%",
                  left: "75.6196%",
                  top: "85.0214%",
                  transform: "rotate(-0.081833rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.012%",
                  left: "58.6474%",
                  top: "64.8067%",
                  transform: "rotate(2.09478rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "16.6204%",
                  left: "84.7517%",
                  top: "34.604%",
                  transform: "rotate(-1.13137rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "24.6686%",
                  left: "84.7517%",
                  top: "34.604%",
                  transform: "rotate(-2.66129rad)",
                }}
              />
              <div
                className="connection-line"
                style={{
                  width: "29.1765%",
                  left: "91.8224%",
                  top: "19.5626%",
                  transform: "rotate(3.0164rad)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        {/* Why Explore Resources */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          id="why-explore-resources"
          className="py-12 sm:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <img
            src={ResourceImage}
            alt="Resource"
            className="w-full h-auto rounded-lg"
          />
          <div className="my-auto">
            <SectionHeading align="left">
              Why Explore Sample.com's Resources?
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true }}
              className="mb-6 text-base sm:text-lg lg:text-left"
            >
              <motion.div
                animate={{ height: isExpanded ? "auto" : "60px" }}
                className={`inline-block overflow-hidden transition-all duration-300`}
              >
                <p>
                  Social media advertising is an ever-evolving field, and
                  staying up-to-date on the latest trends, strategies, and tools
                  can be challenging. That's where our resources come in.
                  Sample.com's library of resources provides actionable
                  insights, best practices, and expert advice to help you create
                  effective campaigns, optimize ad performance, and make
                  data-driven decisions. By exploring these resources, you'll
                  gain a deeper understanding of the tools and techniques that
                  make social media advertising successful.
                </p>
              </motion.div>
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <small>{isExpanded ? "Read Less" : "Read More"}</small>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Resource Categories */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="bg-gray-50 py-12 sm:py-16 px-4"
        >
          <SectionHeading className="mb-8 sm:mb-12">
            What You'll Find in Our Resources Section
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg mb-12 sm:mb-16"
          >
            <p className="max-w-3xl mx-auto">
              Our Resources Overview page includes several key areas to explore,
              each tailored to provide you with unique insights and support for
              your campaigns.
            </p>
          </motion.div>

          <div>
            <BlogSection />
            <CaseStudiesSection />
            <AIMarketingSection />
          </div>
        </motion.section>

        {/* How to Use Resources */}
        <ResourceUsageSection title="How to Use Sample.com's Resources to Enhance Your Campaigns" />

        {/* Featured Resources */}
        <FeaturedResourcesSection title="Featured Resources" />

        {/* Why Invest Time */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 px-4 mx-auto"
        >
          <SectionHeading size="md">
            Why Invest Time in Learning and Improving?
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg"
          >
            Social media advertising is a highly competitive space. By exploring
            Sample.com's resources, you're equipping yourself with the knowledge
            and tools needed to adapt, innovate, and succeed.
          </motion.p>
        </motion.section>

        {/* FAQ */}
        <FAQSection title="Frequently Asked Questions About Our Resources" />

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="bg-blue-700 text-white py-12 sm:py-16 px-4 "
        >
          <SectionHeading variant="secondary" className="text-white">
            Get Started with Sample.com's Resources Today
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="mb-6 text-sm sm:text-base"
          >
            Take advantage of our comprehensive blog, in-depth case studies, and
            expert AI marketing insights. Discover how Sample.com can empower
            you to create smarter, more effective social media campaigns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Explore Resources
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
