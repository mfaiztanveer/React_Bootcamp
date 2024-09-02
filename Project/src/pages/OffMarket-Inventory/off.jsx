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
    { image: Image1, status: "Vacant", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image2, status: "Owner Occupied", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image3, status: "Tenant Occupied", investment: "$75,120", roi: "40%", text1: "Luxury Apartments", text2: "$350,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image4, status: "Owner Occupied", investment: "$55,000", roi: "35%", text1: "Luxury Apartments", text2: "$410,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image5, status: "Tenant Occupied", investment: "$60,000", roi: "55%", text1: "Luxury Apartments", text2: "$500,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image6, status: "Owner Occupied", investment: "$30,000", roi: "32%", text1: "Luxury Apartments", text2: "$399,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image7, status: "Tenant Occupied", investment: "$55,000", roi: "37%", text1: "Luxury Apartments", text2: "$459,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image8, status: "Owner Occupied", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
    { image: Image4, status: "Tenant Occupied", investment: "$45,000", roi: "37%", text1: "Luxury Apartments", text2: "$450,000", text3: "3 Bedroom | 1 Bathroom | 971 sq.ft", location: "Australia" },
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

        if (sortOption === 'Price (Low to High)') {
            sorted.sort((a, b) => parseInt(a.investment.replace(/[$,]/g, '')) - parseInt(b.investment.replace(/[$,]/g, '')));
        } else if (sortOption === 'Price (High to Low)') {
            sorted.sort((a, b) => parseInt(b.investment.replace(/[$,]/g, '')) - parseInt(a.investment.replace(/[$,]/g, '')));
        } else if (sortOption === 'A to Z') {
            sorted.sort((a, b) => a.text1.localeCompare(b.text1));
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
                                <MenuItem value="Type 4">Single-Family Residential</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="price-label" className="custom-input-label">
                                <img src={SettingsIcon} alt="Price Icon" className="filter-icon" /> Price
                            </InputLabel>
                            <Slider
                                value={price}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={1000000}
                                className="custom-slider"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2.4}>
                        <FormControl fullWidth className="custom-form-control">
                            <InputLabel id="sort-label" className="custom-input-label">
                                <img src={GarageIcon} alt="Sort Icon" className="filter-icon" /> Sort
                            </InputLabel>
                            <Select
                                labelId="sort-label"
                                value={sortOption}
                                onChange={handleSortChange}
                                className="custom-select"
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="Price (Low to High)">Price (Low to High)</MenuItem>
                                <MenuItem value="Price (High to Low)">Price (High to Low)</MenuItem>
                                <MenuItem value="A to Z">Alphabetical (A to Z)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </section>

            {/* Section 3: Off Market Items */}
            <section className="offmarket-container padding">
                <Grid container spacing={2}>
                    {sortedAndPagedItems().map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                            <Card
                                img={item.image}
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
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            variant="contained"
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
