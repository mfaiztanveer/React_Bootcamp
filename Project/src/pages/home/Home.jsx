import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import Footer from '../../components/footer/Footer'
import { Grid } from '@mui/material'
import Card from '../../components/card/Card'
import Image1 from '../../assets/imgs/img3.png'
import Image2 from '../../assets/imgs/img4.png'
import Image3 from '../../assets/imgs/img5.png'
import image4 from '../../assets/imgs/img1.png'
import image5 from '../../assets/imgs/img2.png'
import Card2 from '../../components/card2/card2'


export default function Home() {
    return (
        <div>
            <Navbar />
            {/* section 1 : hero  */}
            <section className="padding h-sec1">
                <div className="h-sec1-subHeading">Insiders Off-Market Inventory</div>
                <div className="h-sec1-mainHeading"> Your <span>Next Opportunity</span> Awaits</div>
                <div className="h-sec1-text">Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments period.</div>
                <div className="h-sec1-btns">
                    <Btn
                        label='Submit an Off-Market Property'
                    />
                    <Btn
                        style={{
                            background: 'transparent',
                            color: '#4DAD49',
                            border: '1px solid #4DAD49'
                        }}
                        label='View our Off-Market Inventory'
                    />
                </div>
            </section>


            {/* section 2  */}


            <div className="padding main-heading1">Off-Market <span>Properties</span></div>
            <section className="padding">
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12}>
                        <Card
                            image={Image1}
                            status="Vacant"
                            investment="$45,000"
                            roi="37%"
                            text1="Luxury Apartments"
                            text2="$450,000"
                            text3="3 Bedroom | 1 Bathroom | 971 sq.ft"
                            location="Australia"
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card
                            image={Image2}
                            status="Owner Occupied"
                            investment="$45,000"
                            roi="37%"
                            text1="Luxury Apartments"
                            text2="$450,000"
                            text3="3 Bedroom | 1 Bathroom | 971 sq.ft"
                            location="Australia"

                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card
                            image={Image3}
                            status="Tenant Ocuupied"
                            investment="$45,000"
                            roi="37%"
                            text1="Luxury Apartments"
                            text2="$450,000"
                            text3="3 Bedroom | 1 Bathroom | 971 sq.ft"
                            location="Australia"

                        />
                    </Grid>
                </Grid>

            </section>

            {/* Section 3 */}

            <div className="padding main-heading2">Off-Market <span>Property Types</span></div>

            <section className="padding">
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12}>

                    <Card2 
                        image={image4}
                        types='Buy & Hold Properties'
                        details='Secure your future with our Buy & Hold properties, offering stability and long-term growth potential.'
                    />

                    </Grid>
                    <Grid item sm={4} xs={12}>
                    <Card2 
                        
                        image={image5}
                        types='Retail - Owner Occupant'
                        details='Tailored Retail Spaces for Owner-Occupied Success in Prime Locations.'
                        />

                    </Grid>
                    <Grid item sm={4} xs={12}>
                    <Card2 
                        
                        image={image4}
                        types='Flip Opportunities'
                        details='Seize Profit Potential: Explore High-Yield Flip Opportunities with Insiders Inventory.'
                        />

                    </Grid>
                </Grid>
            </section>




            <div className="h-sec2 padding"></div>
            {/* footer  */}
            <Footer />
        </div>
    )
}
