import "./SupportedFruits.css";
import { motion } from "framer-motion";

import apple from "../../../assets/images/apple.png";
import banana from "../../../assets/images/banana.png";
import orange from "../../../assets/images/orange.png";
import mango from "../../../assets/images/mango.png";
import pineapple from "../../../assets/images/pineapple.png";
import kiwi from "../../../assets/images/kiwi.png";

const fruits = [

{
name:"Apple",
img:apple,
desc:"Rich in fiber and antioxidants."
},

{
name:"Banana",
img:banana,
desc:"High in potassium and energy."
},

{
name:"Orange",
img:orange,
desc:"Excellent source of Vitamin C."
},

{
name:"Mango",
img:mango,
desc:"Loaded with vitamins and minerals."
},

{
name:"Pineapple",
img:pineapple,
desc:"Supports digestion naturally."
},

{
name:"Kiwi",
img:kiwi,
desc:"Boosts immunity and heart health."
}

];

function SupportedFruits(){

return(

<motion.section

className="supported"

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:.8}}

viewport={{once:true}}

>

<span className="section-tag">
🍓 Supported Fruits
</span>

<h2>

AI Can Analyze

<span> These Fruits</span>

</h2>

<p>

Upload any of these fruits and instantly receive freshness,
nutrition and storage recommendations.

</p>

<div className="fruit-grid">

{

fruits.map((fruit,index)=>(

<motion.div

className="fruit-card"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.12,
duration:.5
}}

viewport={{once:true}}

>

<img src={fruit.img} alt={fruit.name}/>

<h3>{fruit.name}</h3>

<p>{fruit.desc}</p>

</motion.div>

))

}

</div>

</motion.section>

)

}

export default SupportedFruits;