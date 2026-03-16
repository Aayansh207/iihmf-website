import React from 'react'
import "./CSS/PreIncubated.css";
import Navbar from "../Components/Navbar/Navbar";

import StartUpContainer from "../Components/StartUpContainer/StartUpContainer";

import Footer from "../Components/Footer/Footer";

import pis7 from "../Components/Assets/pis7.jpg"
import pis5 from "../Components/Assets/pis5.jpg"
import pis8 from "../Components/Assets/pis8.jpg"
const PreIncubated = () => {
    return (
        <div>
            <Navbar />
            <div className="pre-head"><h1>Our Pre-Incubated StartUps</h1></div>
            <div className="startup-dir-container">
                <StartUpContainer
                    head="Lipopest"
                    founder_name="Dr. Sangeeta Negi and Utpreksha Thapliyal"
                    core_area="Sustainable Technology"
                    img={pis8}
                    desc="The startup aims to develop a cutting-edge biopesticide that outperforms traditional chemical pesticides and adheres to environmental sustainability. Scalable and economically viable for farmers, it targets the red-rot disease of sugarcane caused by Colletotrichum falcatum, a major global threat to sugarcane productivity."
                    link="https://henixrehab.com/"
                />
                <StartUpContainer
                    head="GAJARI BRISK"
                    founder_name=" GAURAV BHAKAT  ISHITA JAIN"
                    core_area="AUTOMOTIVE SECTOR, GREEN ENERGY, SUSTAINABILITY"
                
                    img={pis5}
                    desc="Our ideation stage startup focuses on a Hybrid Auto-Rickshaw with dual electric and CNG powertrains. Competing with e-rickshaws and CNG autorickshaws, it aims to match market prices while increasing payload and capacity. This hybrid rickshaw promises to revolutionize the industry with a more efficient, eco-friendly transportation option nationwide.
Working towards SDG- 5 we aim to create an environment free from discrimination and violence for our womenfolk."
                />
                <StartUpContainer
                    head="TimeTable"
                    founder_name="Shreyas M. Sherekar"
                    areas="subscription system"
                    img={pis7}
                    desc="creating a time table using artificial intelligence."
                />
                
            </div>
            <Footer />
        </div>
    )
}

export default PreIncubated
