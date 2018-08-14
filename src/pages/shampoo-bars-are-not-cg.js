import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'



const bars = () => (
  <div>
    <Helmet
      title="Are Shampoo Bars Curly Girl?"
      meta={[
        { name: 'description', content: 'Shampoo bars are growing in popularity, but how good are they for curly hair?' },
        { name: 'keywords', content: 'products, curly girl, shampoo bars, ph balance, sulfates' },
        {
          property: 'og:image',
          content: 'http://www.curlsbot.com/img/icon.png'
        }
      ]}
    />
    <h1>Shampoo Bars + Curly Girl</h1>
    <p>Shampoo bars are growing in popularity. Many are touted as being environmentally friendly, natural, and budget friendly. But not all shampoo bars are made alike. </p>
    <p>
      There are two main types of shampoo bars: those made with <em>soap and those that are essentially like regular shampoo in a bar form. </em>
    </p>
    <h2>Why You Should Avoid Soap On Your Hair</h2>
    <p>Soap is much worse for your hair than sulfates. Not only is it a harsh detergent, it is often extremely alkaline. The pH of hair is 5.5 and most good quality cleansers are around that as well. But soap is usually 8 or more. This can <a href="https://www.facebook.com/swiftcraftymonkey/photos/a.1872648986308817.1073741829.1841354482771601/2108742819366098/?type=3">damage hair badly, leaving it dull and dry</a>. For skin soap can be fine, as skin can recover from the damage. But hair is not "alive" and cannot.</p>
    <p>In addition <a href="http://science-yhairblog.blogspot.com/2016/03/hard-water-and-your-hair.html">if you have hard water, soap can leave residue on your hair that's difficult to remove. Most soaps also contain heavy waxes and oils that leave even more buildup.</a></p>
    <p>Many proponents of soap-based shampoo bars recommend using baking soda to remove this residue which does <a href="https://abetterwaytothrive.com/what-years-of-baking-soda-no-poo-did-to-my-long-healthy-hair-or-when-a-natural-living-experiment-fails/">further damage to your hair.</a></p>
    <p>Initially this type of routine may make your hair look nice. But over time buildup and damage take their toll.</p>
    <h2>Other Types of Shampoo Bars</h2>
    <p>I messaged Lorraine Massey about shampoo bars and she said that she believes they are just as damaging as traditional shampoo. But are a few out there made with gentler detergents (sodium cocoyl isethionate for example), but I recommend always asking the manufactrer to confirm they are ph balanced and <strong>not made with soap</strong> since labeling can be deceptive.</p>
    <p>Here is a post with <a href="https://swiftcraftymonkey.blog/questions-and-answers-about-shampoo-bars-the-master-list/"> details about soap and pH testing.</a></p>
    <h2>Depceptive Labeling of Soap (and why Curlsbot fails)</h2>
    <p>Curlsbot can detect some shampoo bars but not all based on the ingredients lists. Curlsbot only works if it contains "saponified" in the ingredients list, but not all shampoo bar lists do. For example this list would show up OK on Curlsbot</p> 
    <blockquote className="blockquote">
    ingredients: extra virgin olive oil, *avocado oil, castor oil, *coconut oil, pumpkinseed oil, *fair trade shea butter, purified water, sodium hydroxide, *sweet orange (citrus sinesis) essential oil, lime (citrus aurantifolia) essential oil, infused herbs: *marshmallow root, *catnip, *chamomile, * lavender
    </blockquote>
    <p>Even though it's soap! I hope to eventually train Curlsbot better to detect these patterns. Sodium hydroxide + oils is a clue but that pattern is also in many OK non-bar products, also some just list the oils especially if they are on Etsy. For now I recommend if you want to stick with CG, just avoid bar products. </p>



    
  </div>
)

export default bars
