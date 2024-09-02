import React, { useState } from 'react';
import './AddProperty.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, Button, TextareaAutosize } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const AddProperty = () => {
    const [propertyType, setPropertyType] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [leased, setLeased] = useState('');
    const [basement, setBasement] = useState('');
    const [garage, setGarage] = useState('');
    const [propertyManagement, setPropertyManagement] = useState('');
    const [showPackageFields, setShowPackageFields] = useState(false);
    const [opportunityType, setOpportunityType] = useState('');
    const [showBuyHoldFields, setShowBuyHoldFields] = useState(false);
    const [showManagementInfo, setShowManagementInfo] = useState(false);

    const handlePropertyTypeClick = (type) => {
        setPropertyType(type);
        setShowPackageFields(type === 'Package');
    };
    const handleOpportunityTypeChange = (e) => {
        const value = e.target.value;
        setOpportunityType(value);
        setShowBuyHoldFields(value === 'buy-sell');
    };

    const handlePropertyManagementChange = (e) => {
        const value = e.target.value;
        setPropertyManagement(value);
        setShowManagementInfo(value === 'yes');
    };

    

    return (
        <div className="add-property">
            <Navbar />
            <section className="padding h-sec1">
            <div className="h-sec1-mainHeading"><span>Sell and Buy</span> Property</div>
                <div className="h-sec1-text">Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments today</div>
            </section>
            <div className="add-property-container">
                <h1 className="heading">Add a Property</h1>
                <div className="form-container">
                    <h2 className="subheading">Property Type</h2>
                    <div className="property-type-buttons">
                        <Button 
                            variant={propertyType === 'condo' ? 'contained' : 'outlined'} 
                            onClick={() => handlePropertyTypeClick('condo')}
                            className="property-type-button"
                        >
                            Condo
                        </Button>
                        <Button 
                            variant={propertyType === 'commercial' ? 'contained' : 'outlined'} 
                            onClick={() => handlePropertyTypeClick('commercial')}
                            className="property-type-button"
                        >
                            Commercial
                        </Button>
                        <Button 
                            variant={propertyType === 'multi-family' ? 'contained' : 'outlined'} 
                            onClick={() => handlePropertyTypeClick('multi-family')}
                            className="property-type-button"
                        >
                            Multi-Family Residential
                        </Button>
                        <Button 
                            variant={propertyType === 'single-family' ? 'contained' : 'outlined'} 
                            onClick={() => handlePropertyTypeClick('single-family')}
                            className="property-type-button"
                        >
                            Single-Family Residential
                        </Button>
                        <Button 
                            variant={propertyType === 'Package' ? 'contained' : 'outlined'} 
                            onClick={() => handlePropertyTypeClick('Package')}
                            className="property-type-button"
                        >
                            Portfolio Package
                        </Button>
                    </div>

                    {showPackageFields && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="No of Units" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Target Area" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="ROI" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Price" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                        </Grid>
                    )}

                    <h2 className="subheading">Opportunity Type</h2>
                    <RadioGroup row className="radio-group" value={opportunityType} onChange={handleOpportunityTypeChange}>
                        <FormControlLabel value="buy-sell" control={<Radio />} label="Buy & Hold" />
                        <FormControlLabel value="flip" control={<Radio />} label="Flip Opportunity" />
                        <FormControlLabel value="new-build" control={<Radio />} label="Retail Owner-Occupant" />
                    </RadioGroup>
                    {showBuyHoldFields && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Current Rent" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Cap Rate" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Initial Investment" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Net Cash Flow Per Month" variant="outlined" margin="normal" className="input-field" />
                            </Grid>
                        </Grid>
                    )}

                    <h2 className="subheading">Property Address</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Street Address" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="City" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Zip Code" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="State" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                    </Grid>

                    <h2 className="subheading">Detail about your Listing</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel>Current Status</InputLabel>
                                <Select
                                    value={currentStatus}
                                    onChange={(e) => setCurrentStatus(e.target.value)}
                                    label="Current Status"
                                >
                                    <MenuItem value="owner-occupied">Owner-Occupied</MenuItem>
                                    <MenuItem value="tenant-occupied">Tenant-Occupied</MenuItem>
                                    <MenuItem value="vacant">Vacant</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel>Leased?</InputLabel>
                                <Select
                                    value={leased}
                                    onChange={(e) => setLeased(e.target.value)}
                                    label="Leased?"
                                >
                                    <MenuItem value="yes">Yes</MenuItem>
                                    <MenuItem value="no">No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel>Basement</InputLabel>
                                <Select
                                    value={basement}
                                    onChange={(e) => setBasement(e.target.value)}
                                    label="Basement"
                                >
                                    <MenuItem value="yes">Yes</MenuItem>
                                    <MenuItem value="no">No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Price" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Initial Investment" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Date" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Size(sqFt)" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Bedrooms" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Bathrooms" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel>Garage</InputLabel>
                                <Select
                                    value={garage}
                                    onChange={(e) => setGarage(e.target.value)}
                                    label="Garage"
                                >
                                    <MenuItem value="yes">Yes</MenuItem>
                                    <MenuItem value="no">No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel>Property Management Company</InputLabel>
                                <Select
                                    value={propertyManagement}
                                    onChange={handlePropertyManagementChange}
                                    label="Property Management Company"
                                >
                                    <MenuItem value="yes">Yes</MenuItem>
                                    <MenuItem value="no">No</MenuItem>
                                </Select>
                            </FormControl>
                            {showManagementInfo && (
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    label="Property Management Information" 
                                    variant="outlined" 
                                    margin="normal" 
                                    className="input-field" 
                                />
                            </Grid>
                        )}

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Cash on Cash Return" variant="outlined" margin="normal" className="input-field" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize minRows={4} placeholder="Additional Features & Benefits" className="textarea" />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <label htmlFor="file-upload" className="icon-label">
                            <CloudUploadIcon className="icon" />
                            <input type="file" id="file-upload" style={{ display: 'none' }} />
                            <span>Upload a File</span>
                            <span>Drag and drop files here</span>
                        </label>
                        </Grid>
                        <Grid item xs={12}>
                        <label htmlFor="video-upload" className="icon-label">
                            <CloudUploadIcon className="icon" />
                            <input type="file" id="video-upload" style={{ display: 'none' }} />
                            <span>Upload Video if any</span>
                            <span>Drag and drop files here</span>
                        </label>
                        </Grid>
                    </Grid>


                    <Button variant="contained" color="success" className="submit-button">
                        Submit
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddProperty;
