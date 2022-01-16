import React from 'react';
import cleaner from '../../ingredients/cleaner';
import analyze from '../../ingredients/analyze';
import detector from '../../ingredients/detector';

import ResultListing from './resultlisting';
import ProductListing from './productlisting';
import Link from 'gatsby-link'
import others from '../../ingredient-data/others';


import { Button, Form, FormGroup, Label, Input, FormText, Card, CardTitle, CardText, CardSubtitle} from 'reactstrap';

/* todo
     ReactGA.event({
        category: 'curlsbot',
        action: text,
        label: notCG
      });
      */

      class Results extends React.Component {

        render() {
          let results = this.props.data;
          let parabens = false;
          let soap = false;
          let witch=false;

          if (results.other.caution.includes("witch")){
           witch = true;
         }

         if (results.other.caution.includes("parabens")){
           parabens = true;
         }

         if (results.other.caution.includes("soap")){
           soap = true;
         }
         return (
          <div >

          {results.silicones.bad.length > 0 &&
            <Card body outline color="danger">
            <CardTitle>Silicones Detected</CardTitle>
            <CardSubtitle>I'm 99% sure these are curl unfriendly silicones, which means they are not water soluble and can build up in your hair.</CardSubtitle>
            <CardText><ResultListing list={results.silicones.bad}/>

            </CardText>
            </Card>

          }
          {results.silicones.caution.length > 0 &&
            <Card body outline color="warning">
            <CardTitle>Water Soluble Silicones</CardTitle>
            <CardSubtitle>These silicones are water soluble because they contain the prefixes ppg or peg. They may be fine for many people, but some curly hair experts don't recommend them.</CardSubtitle>
            <CardText><ResultListing list={results.silicones.caution}/></CardText>
            </Card>
          }
          {results.silicones.unknown.length > 0 &&
            <Card body outline color="warning">
            <CardTitle>Unknown Silicones</CardTitle>
            <CardSubtitle>I don't know these silicones yet, but if you <a href="http://m.me/curlsbot">message me I'll take a personalized look and get back to you ASAP!</a>:</CardSubtitle>
            <CardText>
            <ResultListing list={results.silicones.unknown}/>
            </CardText>
            </Card>
          }

          {results.sulfates.bad.length > 0 &&
           <Card body outline color="danger">
           <CardTitle>Harsh Sulfates or other Detergents detected</CardTitle>
           <CardSubtitle>Yikes! These are either sulfates or other harsh non-sulfate detergents that the curly hair community considers drying. See our <Link to="/cleansers" className="btn btn-secondary">cleansers article for more info</Link>:</CardSubtitle>
           <CardText><ResultListing list={results.sulfates.bad}/>

           </CardText>
           </Card>
         }

         {results.sulfates.caution.length > 0 &&
           <Card body outline color="warning">
           <CardTitle>More research recommended</CardTitle>
           <CardSubtitle>Some consider these curl-friendly, others do not. They may be fine in low amounts or for clarifying. See our <Link to="/cleansers" className="btn btn-secondary">cleansers article for more info</Link>:</CardSubtitle>
           <CardText><ResultListing list={results.sulfates.caution}/>

           </CardText>
           </Card>
         }

         {results.sulfates.unknown.length > 0 &&
          <Card body outline color="warning">
          <CardTitle>Unknown Cleansers</CardTitle>
          <CardSubtitle>These may be misspelled sulfates or they may be fine, but if you <a href="http://m.me/curlsbot">message me I'll take a personalized look and get back to you ASAP!</a></CardSubtitle>
          <CardText>
          <ResultListing list={results.sulfates.unknown}/>
          </CardText>
          </Card>

        }

        {results.sulfates.good.length > 0 &&
          <Card body outline color="success">
          <CardTitle>curly hair Approved Cleansers</CardTitle>
          <CardSubtitle>These are considered gentle by most of the curly hair community:</CardSubtitle>
          <CardText><ResultListing list={results.sulfates.good}/></CardText>
          </Card>
        }


        {results.alcohol.bad.length > 0 &&
          <Card body outline color="danger">
          <CardTitle>Harsh Alcohols Detected</CardTitle>
          <CardSubtitle>These alcohols will dry out your hair, they are not curly hair approved:</CardSubtitle>
          <CardText><ResultListing list={results.alcohol.bad}/>

          </CardText>
          </Card>

        }

        {results.alcohol.good.length > 0 &&
          <Card body outline color="success">
          <CardTitle>curly hair Approved Alcohols</CardTitle>
          <CardSubtitle>These alcohols won't dry our your hair, they are curly hair approved:</CardSubtitle>
          <CardText><ResultListing list={results.alcohol.good}/></CardText>
          </Card>
        }
        {results.alcohol.unknown.length > 0 &&
          <Card body outline color="warning">
          <CardTitle>Unknown Alcohols</CardTitle>
          <CardSubtitle>I don't know anything about these alcohols, but if you <a href="http://m.me/curlsbot">message me I'll take a personalized look and get back to you ASAP!</a></CardSubtitle>
          <CardText>
          <ResultListing list={results.alcohol.unknown}/>
          </CardText>
          </Card>

        }

        {results.wax.good.length > 0 &&
          <Card body outline color="success">
          <CardTitle>Ok Waxes & Oils</CardTitle>
          <CardSubtitle>These have been modified to make them water soluble: </CardSubtitle>
          <CardText><ResultListing list={results.wax.good}/></CardText>
          </Card>

        }

        {results.wax.bad.length > 0 &&
          <Card body outline color="danger">
          <CardTitle>Non-curly hair Waxes and Oils Detected </CardTitle>
          <CardSubtitle>These waxes and oils can cause buildup that is difficult to remove and keeps your hair from absorbing moisture properly:</CardSubtitle>
          <CardText><ResultListing list={results.wax.bad}/>

          </CardText>
          </Card>

        }

        {results.wax.unknown.length > 0 &&
          <Card body outline color="warning">
          <CardTitle>Unknown Waxes and Oils</CardTitle>
          <CardSubtitle>These are some waxes and castor oil types I don't know about, but if you <a href="http://m.me/curlsbot">message me I'll take a personalized look and get back to you ASAP!</a> </CardSubtitle>
          <CardText>
          <ResultListing list={results.wax.unknown}/>
          </CardText>
          </Card>
        }

        {results.other.caution.length > 0 &&
          <Card body outline color="warning">
          <CardTitle>More research recommended</CardTitle>

          <CardText>


          {parabens && <div>
            <strong>Parabens</strong>: Lorraine Massey cautions against these in the curly hair <a href="https://amzn.to/2Y0pqDb">Handbook</a> saying "In recent years, they’ve become controversial as experts question whether they are safe. (Some say they may be linked to cancer.)" We recommend we do your own research.
            </div> }

            {witch && <div>
              <strong>Witch Hazel</strong>: Most types of witch hazel contain alcohol. Contact the manufacturer to see if the witch hazel in this product contains alcohol. Even if it does not contain alcohol, many people find witch hazel drying. Use with caution if you have hair prone to dryness.
              </div> }


            {soap && <div>
              <strong>Is this soap?</strong>. <br />
              This product contains at least one of the following which could mean it has soap:
              <br />
              <ul>
              <ResultListing list={others.soaps.sort()}/>
              </ul>

              We recommend doing more research and contacting the manufacturer to find out. Soap is as harsh as sulfates. In addition many soap products are not properly pH balanced which can further damage hair. Check out our <Link to="/shampoo-bars-are-not-cg/" className="btn btn-secondary">article on soap</Link> for more info. <a href="http://m.me/curlsbot">If you don't think this contains soap, please message me and let me know.</a>
              </div>

            }

            </CardText>
            </Card>

          }




          </div>
          );

}

}


export default Results;


