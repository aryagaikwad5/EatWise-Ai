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
desc:"Rich in fiber and antioxidants.",
supported:true
},

{
name:"Banana",
img:banana,
desc:"High in potassium and energy.",
supported:true
},

{
name:"Orange",
img:orange,
desc:"Excellent source of Vitamin C.",
supported:true
},

{
name:"Mango",
img:mango,
desc:"Support Coming Soon",
supported:false
},

{
name:"Pineapple",
img:pineapple,
desc:"Support Coming Soon",
supported:false
},

{
name:"Kiwi",
img:kiwi,
desc:"Support Coming Soon",
supported:false
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
   🍎 Currently Supported
</span>

<h2>

Currently Supported

<span>  Fruits</span>

</h2>

<p>
  EatWise AI currently supports freshness analysis for
  <strong> Apple, Banana and Orange.</strong>
  <br />
  Support for Mango, Pineapple and Kiwi is coming in future updates.
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

{
!fruit.supported &&
<span className="coming-soon">
Coming Soon
</span>
}

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