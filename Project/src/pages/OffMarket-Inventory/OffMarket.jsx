import React, { useState } from 'react';
import './OffMarket.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Grid, Button, MenuItem, FormControl, Select, InputLabel, Slider } from '@mui/material';
import Card from '../../components/card/Card';
import Image1 from '../../assets/imgs/img3.png';
import Image2 from '../../assets/imgs/img4.png';
import Image3 from '../../assets/imgs/img5.png';
import Image4 from '../../assets/imgs/img5.png';
import Image5 from '../../assets/imgs/img6.png';
import Image6 from '../../assets/imgs/img7.png';
import Image7 from '../../assets/imgs/img8.png';
import Image8 from '../../assets/imgs/img9.png';
import Image9 from '../../assets/imgs/img10.png';
import Image10 from '../../assets/imgs/img11.png';
import Image11 from '../../assets/imgs/img12.png';
import LocationIcon from '../../assets/imgs/locationIcon.png'; 
import HouseIcon from '../../assets/imgs/homeIcon.png';
import SettingsIcon from '../../assets/imgs/opportunityIcon.png'; 
import GarageIcon from '../../assets/imgs/garageIcon.png';
import basementIcon from '../../assets/imgs/basementIcon.png';
import BedIcon from '../../assets/imgs/bedroomIcon.png'; 
import BathIcon from '../../assets/imgs/bathroomIcon.png'; 
import SizeIcon from '../../assets/imgs/sizeIcon.png'; 
import Map from '../../components/map/Map';

const items = [
    { image: Image1, status: "Vacant", investment: "$45,004", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image2, status: "Owner Occupied", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$452,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image3, status: "Tenant Occupied", investment: "$75,120", roi: "40%", text1: "Luxury Apartments", text2: "$350,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image4, status: "Owner Occupied", investment: "$55,000", roi: "35%", text1: "Luxury Apartments", text2: "$410,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image5, status: "Tenant Occupied", investment: "$60,000", roi: "55%", text1: "Luxury Apartments", text2: "$500,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image6, status: "Owner Occupied", investment: "$30,000", roi: "32%", text1: "Luxury Apartments", text2: "$399,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image7, status: "Tenant Occupied", investment: "$55,000", roi: "37%", text1: "Luxury Apartments", text2: "$459,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image8, status: "Owner Occupied", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image4, status: "Tenant Occupied", investment: "$45,001", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image9, status: "Tenant Occupied", investment: "$75,000", roi: "97%", text1: "Luxury Apartments", text2: "$459,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image10, status: "Owner Occupied", investment: "$90,000", roi: "37%", text1: "Luxury Apartments", text2: "$780,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image11, status: "Owner Occupied", investment: "$98,000", roi: "30%", text1: "Luxury Apartments", text2: "$980,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" }
];

export default function OffMarket() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('');
    const itemsPerPage = 6;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

  
    const [price, setPrice] = useState([0, 1000000]);
    

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    const sortedItems = () => {
        let sorted = [...items];

        if (sortOption === '4956 W Red Oaks (A to Z)') {
            sorted.sort((a, b) => a.status.localeCompare(b.status));
        }
        else if (sortOption === 'Price (High to Low)') {
            sorted.sort((a, b) => {
                const priceA = parseInt(a.text2.replace(/[$,]/g, ''));
                const priceB = parseInt(b.text2.replace(/[$,]/g, ''));
                if (priceB === priceA) {
                    return parseInt(b.investment.replace(/[$,]/g, '')) - parseInt(a.investment.replace(/[$,]/g, ''));
                }
                return priceB - priceA;
            });
        }  
        else if (sortOption === 'Price (Low to High)') {
            sorted.sort((a, b) => {
                const priceA = parseInt(a.text2.replace(/[$,]/g, ''));
                const priceB = parseInt(b.text2.replace(/[$,]/g, ''));
                if (priceB === priceA) {
                    return parseInt(a.investment.replace(/[$,]/g, '')) - parseInt(b.investment.replace(/[$,]/g, ''));
                }
                return priceA - priceB;
            });
        } 

        return sorted;
    };

    const sortedAndPagedItems = () => {
        const sorted = sortedItems();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sorted.slice(startIndex, endIndex);
    };
    

    
    return (
        <div>
            <Navbar />
            {/* Section 1: Hero */}
            <section className="padding h-sec1">
                <div className="h-sec1-mainHeading"><span>Off-Market</span> Inventory</div>
                <div className="h-sec1-text">Our off-market inventory features unique opportunities tailored to your needs. Contact us to explore these hidden gems today.</div>
            </section>

            {/* Section 2: Filters */}
            <section className="filters-container padding">
                <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="location-label" className="custom-input-label">
                            <img src={LocationIcon} alt="Location Icon" className="filter-icon" /> Location
                            </InputLabel>
                            <Select labelId="location-label" label="Location" className="custom-select">
                                <MenuItem value="Location 1">Karachi</MenuItem>
                                <MenuItem value="Location 2">Hyderabad</MenuItem>
                                <MenuItem value="Location 3">Islamabad</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="property-type-label" className="custom-input-label">
                            <img src={HouseIcon} alt="Property Type Icon" className="filter-icon" /> Property Type
                            </InputLabel>
                            <Select labelId="property-type-label" label="Property Type" className="custom-select">
                                <MenuItem value="Type 1">Condo</MenuItem>
                                <MenuItem value="Type 2">Commercial</MenuItem>
                                <MenuItem value="Type 3">Multi-Family Residential</MenuItem>
                                <MenuItem value="Type 4">Single_Famly Residential</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="opportunity-type-label" className="custom-input-label">
                            <img src={SettingsIcon} alt="Opportunity Type Icon" className="filter-icon" /> Opportunity Type
                            </InputLabel>
                            <Select labelId="opportunity-type-label" label="Opportunity Type" className="custom-select">
                                <MenuItem value="Opportunity 1">Buy & Hold</MenuItem>
                                <MenuItem value="Opportunity 2">Flip Opportunity</MenuItem>
                                <MenuItem value="Opportunity 3">Retail Owner-Occupant</MenuItem>
                                <MenuItem value="Opportunity 4">All</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="garage-label" className="custom-input-label">
                            <img src={GarageIcon} alt="Garage Icon" className="filter-icon" /> Garage
                            </InputLabel>
                            <Select labelId="garage-label" label="Garage" className="custom-select">
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="basement-label" className="custom-input-label">
                            <img src={basementIcon} alt="Basement Icon" className="filter-icon" /> Basement
                            </InputLabel>
                            <Select labelId="basement-label" label="Year Built" className="custom-select">
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </section>
             {/* Section 3: Filters */}
            <section className="filters-container padding">
                <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="bedrooms-label"className="custom-input-label">
                            <img src={BedIcon} alt="bed Icon" className="filter-icon" /> Bedroom
                            </InputLabel>
                            <Select labelId="bedrooms-label" label="Bedrooms"
                            className="custom-select">
                                <MenuItem value="1">2</MenuItem>
                                <MenuItem value="2">3</MenuItem>
                                <MenuItem value="3">4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="bathrooms-label" className="custom-input-label"><img src={BathIcon} alt="Date Icon" className="filter-icon" />Bathrooms</InputLabel>
                            <Select labelId="bathrooms-label" label="Bathrooms"className="custom-select">
                                <MenuItem value="1">2</MenuItem>
                                <MenuItem value="2">3</MenuItem>
                                <MenuItem value="3">4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="size-label" className="custom-input-label"><img src={SizeIcon} alt="Date Icon" className="filter-icon" />BedroomSize(SqFt)</InputLabel>
                            <Select labelId="size-label" label="Size (SqFt)" className="custom-select">
                                <MenuItem value="500-1000">500-1000</MenuItem>
                                <MenuItem value="1000-1500">1000-1500</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="price-slider">
                            <span>Price: </span>
                            <Slider
                                value={price}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={1000000}
                                step={10000}
                                marks={[
                                    { value: 0, label: '$0' },
                                    { value: 1000000, label: '$1,000,000' },
                                ]}
                            />
                        </div>
                    </Grid>
                </Grid>

            <div className="properties-sort-section">
                    <div className="properties-count">Showing 1-25 of 480 properties</div>
                    <FormControl className="sort-by">
                        <InputLabel>Sort By</InputLabel>
                        <Select
                                labelId="sort-label"
                                value={sortOption}
                                onChange={handleSortChange}
                                className="custom-select"
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="4956 W Red Oaks (A to Z)">4956 W Red Oaks (A to Z)</MenuItem>
                                <MenuItem value="Price (Low to High)">Price (Low to High)</MenuItem>
                                <MenuItem value="Price (High to Low)">Price (High to Low)</MenuItem>  
                            </Select>
                    </FormControl>
                </div>
            </section>

                 {/* Section 5: Pagination */}       
                <section className="padding">
                <Grid container spacing={3}>
                {sortedAndPagedItems().map((item, index) => (
                        <Grid  xs={12} sm={6} md={4} lg={4} key={index}>
                            <Card
                                image={item.image}
                                status={item.status}
                                investment={item.investment}
                                roi={item.roi}
                                text1={item.text1}
                                text2={item.text2}
                                text3={item.text3}
                                location={item.location}
                            />
                        </Grid>
                    ))}
                </Grid>
                <div className="pagination">
                    <Button 
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button 
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button 
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </Button>
                </div>
            </section>
            
            {/* Map Section */}
            <Map />

            {/* Footer */}
            <Footer />
        </div>
    );
}