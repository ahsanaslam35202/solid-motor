import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import Drawer from "../Common/Drawer";
import ToolBar from "../Common/ToolBar";
import TopBar from "../Common/TopBar";
import Notification from "../Common/Notification";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  cardHeading: {
    textAlign: "center",
    fontSize: "36px !important",
  },
  featuresBox: {
    boxShadow: "2px 7px 12px 7px rgba(56,74,76,0.05)",
    borderRadius: "5px",
    margin: "0px 12px",
    padding: "50px !important",
    backgroundColor: "#f1f7f9",
  },
  chipMargin: {
    marginRight: theme.spacing(1),
  },
  submitButton: {
    float: "right",
    margin: "20px 0px",
  },
}));

const AddCar = (props) => {
  const classes = useStyles();
  const { location } = props;
  var car;
  if (location.state) car = location.state.car;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [make, setMake] = React.useState({ value: "", error: "" });
  const [name, setName] = React.useState({ value: "", error: "" });
  const [model, setModel] = React.useState({ value: "", error: "" });
  const [fuel, setFuel] = React.useState({ value: "", error: "" });
  const [milesDriven, setMilesDriven] = React.useState({
    value: "",
    error: "",
  });
  const [body, setBody] = React.useState({ value: "", error: "" });
  const [modelYear, setModelYear] = React.useState({ value: "", error: "" });
  const [exteriorColor, setExteriorColor] = React.useState({
    value: "",
    error: "",
  });
  const [interiorColor, setInteriorColor] = React.useState({
    value: "",
    error: "",
  });
  const [engineType, setEngineType] = React.useState({ value: "", error: "" });
  const [engineCapacity, setEngineCapacity] = React.useState({
    value: "",
    error: "",
  });
  const [transmission, setTransmission] = React.useState({
    value: "",
    error: "",
  });
  const [driveTrain, setDriveTrain] = React.useState({ value: "", error: "" });
  const [doors, setDoors] = React.useState({ value: "", error: "" });
  const [numberOfKeys, setNumberOfKeys] = React.useState({
    value: "",
    error: "",
  });
  const [vin, setVin] = React.useState({ value: "", error: "" });
  const [stock, setStock] = React.useState({ value: "", error: "" });
  const [vehicleId, setVehicleId] = React.useState({ value: "", error: "" });
  const [mpg, setMpg] = React.useState({ value: "", error: "" });
  const [extendedFeature, setExtendedFeature] = React.useState({
    value: "",
    error: "",
  });
  const [extendedFeatures, setExtendedFeatures] = React.useState([]);
  // const [images, setImages] = React.useState([]);
  const [displayImage, setDisplayImage] = React.useState();
  const [otherImages, setOtherImages] = React.useState();
  const [sendImages, setSendImages] = React.useState();
  const [downPayment, setDownPayment] = React.useState({
    value: "",
    error: "",
  });
  const [price, setPrice] = React.useState({ value: "", error: "" });
  const [numberOfMonths, setNumberOfMonths] = React.useState({
    value: "",
    error: "",
  });
  const [shippingCharges, setShippingCharges] = React.useState({
    value: "",
    error: "",
  });
  const [taxAndRegistrationCharges, setTaxAndRegistrationCharges] =
    React.useState({ value: "", error: "" });
  const [dealerFees, setDealerFees] = React.useState({ value: "", error: "" });
  const [brochureLink, setBrochureLink] = React.useState({
    value: "",
    error: "",
  });
  const [reportLink, setReportLink] = React.useState({ value: "", error: "" });

  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExtendedFeaturesAdd = () => {
    const features = [...extendedFeatures];
    features.push(extendedFeature.value);
    console.log(features);
    setExtendedFeatures(features);
    setExtendedFeature({ value: "", error: "" });
  };

  React.useEffect(() => {
    if (car) {
      setEdit(true);
      setMake({ value: car.make });
      setModel({ value: car.model });
      setName({ value: car.name });
      setFuel({ value: car.fuel });
      setMilesDriven({ value: car.milesDriven });
      setBody({ value: car.body });
      setModelYear({ value: car.modelYear });
      setExteriorColor({ value: car.exteriorColor });
      setInteriorColor({ value: car.interiorColor });
      setEngineType({ value: car.engineType });
      setEngineCapacity({ value: car.engineCapacity });
      setTransmission({ value: car.transmission });
      setDriveTrain({ value: car.driveTrain });
      setDoors({ value: car.doors });
      setNumberOfKeys({ value: car.numberOfKeys });
      setVin({ value: car.vin });
      setStock({ value: car.stock });
      setVehicleId({ value: car.vehicleId });
      setMpg({ value: car.mpg });
      setExtendedFeatures(car.extendedFeatures);
      setPrice({ value: car.price });
      setDownPayment({ value: car.downPayment });
      setNumberOfMonths({ value: car.numberOfMonths });
      setShippingCharges({ value: car.shippingCharges });
      setTaxAndRegistrationCharges({ value: car.taxAndRegistrationCharges });
      setDealerFees({ value: car.dealerFees });
      setReportLink({ value: car.reportLink });
      setBrochureLink({ value: car.brochureLink });
    }
  }, []);

  const handleSubmit = async (e) => {
    console.log(extendedFeatures);
    e.preventDefault();
    const data = new FormData();
    data.append("make", make.value);
    data.append("model", model.value);
    data.append("name", name.value);
    data.append("fuel", fuel.value);
    data.append("milesDriven", milesDriven.value);
    data.append("body", body.value);
    data.append("modelYear", modelYear.value);
    data.append("exteriorColor", exteriorColor.value);
    data.append("interiorColor", interiorColor.value);
    data.append("engineType", engineType.value);
    data.append("engineCapacity", engineCapacity.value);
    data.append("transmission", transmission.value);
    data.append("driveTrain", driveTrain.value);
    data.append("doors", doors.value);
    data.append("numberOfKeys", numberOfKeys.value);
    data.append("vin", vin.value);
    data.append("stock", stock.value);
    data.append("vehicleId", vehicleId.value);
    data.append("mpg", mpg.value);
    for (let x = 0; x < extendedFeatures.length; x++) {
      data.append("extendedFeatures", extendedFeatures[x]);
    }
    if (edit === false) {
      data.append("displayImage", displayImage);
      for (let x = 0; x < otherImages.length; x++) {
        data.append("otherImages", otherImages[x]);
      }
      for (let x = 0; x < sendImages.length; x++) {
        data.append("sendImages", sendImages[x]);
      }
    }
    // data.append("images", images);
    data.append("price", price.value);
    data.append("downPayment", downPayment.value);
    data.append("numberOfMonths", numberOfMonths.value);
    data.append("shippingCharges", shippingCharges.value);
    data.append("taxAndRegistrationCharges", taxAndRegistrationCharges.value);
    data.append("dealerFees", dealerFees.value);
    data.append("reportLink", reportLink.value);
    data.append("brochureLink", brochureLink.value);

    if (edit === false) {
      axios({
        method: "post",
        url: "http://www.solidmotors.com/api/cars/",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          setEdit(false);
          setMake({ value: "" });
          setModel({ value: "" });
          setName({ value: "" });
          setFuel({ value: "" });
          setMilesDriven({ value: "" });
          setBody({ value: "" });
          setModelYear({ value: "" });
          setExteriorColor({ value: "" });
          setInteriorColor({ value: "" });
          setEngineType({ value: "" });
          setEngineCapacity({ value: "" });
          setTransmission({ value: "" });
          setDriveTrain({ value: "" });
          setDoors({ value: "" });
          setNumberOfKeys({ value: "" });
          setVin({ value: "" });
          setStock({ value: "" });
          setVehicleId({ value: "" });
          setMpg({ value: "" });
          setExtendedFeatures([]);
          setPrice({ value: "" });
          setDownPayment({ value: "" });
          setNumberOfMonths({ value: "" });
          setShippingCharges({ value: "" });
          setTaxAndRegistrationCharges({ value: "" });
          setDealerFees({ value: "" });
          setReportLink({ value: "" });
          setBrochureLink({ value: "" });
          setNotify({
            isOpen: true,
            message: "Car Added Successfully.",
            type: "success",
          });
        })
        .catch((err) => {
          setNotify({
            isOpen: true,
            message: "Error adding car. Please try again.",
            type: "warning",
          });
        });
    } else {
      axios({
        method: "put",
        url: "http://www.solidmotors.com/api/cars/" + car._id,
        data: data,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // axios
    //   .post("http://localhost:3000/api/cars/", data)
    //   .then((res) => {
    //     // then print response status
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // const car = {
    //   make,
    //   model,
    //   name,
    //   fuel,
    //   milesDriven,
    //   body,
    //   modelYear,
    //   exteriorColor,
    //   interiorColor,
    //   engineType,
    //   engineCapacity,
    //   transmission,
    //   driveTrain,
    //   doors,
    //   numberOfKeys,
    //   vin,
    //   stock,
    //   vehicleId,
    //   mpg,
    //   extendedFeatures,
    // images,
    //   price,
    //   downPayment,
    //   numberOfMonths,
    //   shippingCharges,
    //   taxAndRegistrationCharges,
    //   dealerFees,
    // };
    // await addCar({ car })
    //   .then((res) => {
    //     console.log(res.statusText);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className={classes.container}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <ToolBar />
        <Card>
          <CardHeader
            title={edit === false ? "Add Car" : "Edit Car"}
            className={classes.cardHeading}
          ></CardHeader>
          <Divider />
          <CardContent>
            <form action="" encType="multipart/form-data">
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" component="h3" align="center">
                    Basic Information
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Make
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={make.value}
                      onChange={(e) => {
                        setMake({ value: e.target.value });
                      }}
                      label="Make"
                    >
                      <MenuItem value="Toyota">Toyota</MenuItem>
                      <MenuItem value="Audi">Audi</MenuItem>
                      <MenuItem value="Nissan">Nissan</MenuItem>
                      <MenuItem value="Mercedes">Mercedes</MenuItem>
                      <MenuItem value="Honda">Honda</MenuItem>
                      <MenuItem value="Kia">Kia</MenuItem>
                      <MenuItem value="MG">MG</MenuItem>
                      <MenuItem value="BMW">BMW</MenuItem>
                      <MenuItem value="Dodge">Dodge</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    label="Model"
                    fullWidth
                    size="small"
                    value={model.value}
                    onChange={(e) => {
                      setModel({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth
                    size="small"
                    value={name.value}
                    onChange={(e) => {
                      setName({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" component="h3" align="center">
                    Features
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Fuel
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={fuel.value}
                      onChange={(e) => {
                        setFuel({ value: e.target.value });
                      }}
                      label="Fuel"
                    >
                      <MenuItem value="Gas">GAS</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                      <MenuItem value="Electric">Electric</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Miles Driven"
                    fullWidth
                    size="small"
                    value={milesDriven.value}
                    onChange={(e) => {
                      setMilesDriven({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Body Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={body.value}
                      onChange={(e) => {
                        setBody({ value: e.target.value });
                      }}
                      label="Body Type"
                    >
                      <MenuItem value="SUV">SUV</MenuItem>
                      <MenuItem value="Sedan">Sedan</MenuItem>
                      <MenuItem value="Hatchback">Hatchback</MenuItem>
                      <MenuItem value="Convertible">Convertible</MenuItem>
                      <MenuItem value="Coupe">Coupe</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Model Year"
                    fullWidth
                    size="small"
                    value={modelYear.value}
                    onChange={(e) => {
                      setModelYear({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Exterior Color"
                    fullWidth
                    size="small"
                    value={exteriorColor.value}
                    onChange={(e) => {
                      setExteriorColor({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Interior Color"
                    fullWidth
                    size="small"
                    value={interiorColor.value}
                    onChange={(e) => {
                      setInteriorColor({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Engine Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={engineType.value}
                      onChange={(e) => {
                        setEngineType({ value: e.target.value });
                      }}
                      label="Engine Type"
                    >
                      <MenuItem value="2 Cylinder">2 Cylinder</MenuItem>
                      <MenuItem value="4 Cylinder">4 Cylinder</MenuItem>
                      <MenuItem value="6 Cylinder">6 Cylinder</MenuItem>
                      <MenuItem value="8 Cylinder">8 Cylinder</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Engine Capacity"
                    fullWidth
                    size="small"
                    value={engineCapacity.value}
                    onChange={(e) => {
                      setEngineCapacity({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Transmission
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={transmission.value}
                      onChange={(e) => {
                        setTransmission({ value: e.target.value });
                      }}
                      label="Transmission"
                    >
                      <MenuItem value="Automatic">Automatic</MenuItem>
                      <MenuItem value="Manual">Manual</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Drive Train
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={driveTrain.value}
                      onChange={(e) => {
                        setDriveTrain({ value: e.target.value });
                      }}
                      label="Drive Train"
                    >
                      <MenuItem value="FWD">FWD</MenuItem>
                      <MenuItem value="AWD">AWD</MenuItem>
                      <MenuItem value="RWD">RWD</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Doors"
                    fullWidth
                    size="small"
                    value={doors.value}
                    onChange={(e) => {
                      setDoors({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Number Of Keys"
                    fullWidth
                    size="small"
                    value={numberOfKeys.value}
                    onChange={(e) => {
                      setNumberOfKeys({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="VIN"
                    fullWidth
                    size="small"
                    value={vin.value}
                    onChange={(e) => {
                      setVin({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Stock"
                    fullWidth
                    size="small"
                    value={stock.value}
                    onChange={(e) => {
                      setStock({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Vehicle Id"
                    fullWidth
                    size="small"
                    value={vehicleId.value}
                    onChange={(e) => {
                      setVehicleId({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="MPG"
                    fullWidth
                    size="small"
                    value={mpg.value}
                    onChange={(e) => {
                      setMpg({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" component="h3" align="center">
                    Extended Features
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.featuresBox}>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item md={9}>
                        <TextField
                          variant="outlined"
                          label="Extended Feature"
                          fullWidth
                          size="small"
                          value={extendedFeature.value}
                          onChange={(e) => {
                            setExtendedFeature({ value: e.target.value });
                          }}
                        />
                      </Grid>
                      <Grid item md={3}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={handleExtendedFeaturesAdd}
                        >
                          Add
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        {extendedFeatures.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            onDelete={() => {
                              var features = [...extendedFeatures];
                              features = features.filter((e) => e !== feature);
                              setExtendedFeatures(features);
                            }}
                            className={classes.chipMargin}
                            color="primary"
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" component="h3" align="center">
                    Images
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.featuresBox}>
                  <Box>
                    {/* <Grid container spacing={3}>
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(files) => {
                          setFile(files);
                        }}
                      />
                    </Grid> */}
                    <input
                      type="file"
                      id="displayImage"
                      onChange={(event) => {
                        const displayImage = event.target.files[0];
                        setDisplayImage(displayImage);
                      }}
                    />
                    <input
                      type="file"
                      id="otherImages"
                      onChange={(event) => {
                        const otherImages = event.target.files;
                        setOtherImages(otherImages);
                      }}
                      multiple
                    />
                    <input
                      type="file"
                      id="sendImages"
                      onChange={(event) => {
                        const sendImages = event.target.files;
                        setSendImages(sendImages);
                      }}
                      multiple
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Typography variant="h5" component="h3" align="center">
                    Pricing
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Price"
                    fullWidth
                    size="small"
                    value={price.value}
                    onChange={(e) => {
                      setPrice({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Down Payment"
                    fullWidth
                    size="small"
                    value={downPayment.value}
                    onChange={(e) => {
                      setDownPayment({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Number Of Months
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={numberOfMonths.value}
                      onChange={(e) => {
                        setNumberOfMonths({ value: e.target.value });
                      }}
                      label="Number Of Months"
                    >
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={48}>48</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                      <MenuItem value={72}>72</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Shipping Charges"
                    fullWidth
                    size="small"
                    value={shippingCharges.value}
                    onChange={(e) => {
                      setShippingCharges({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Tax and Registration Charges"
                    fullWidth
                    size="small"
                    value={taxAndRegistrationCharges.value}
                    onChange={(e) => {
                      setTaxAndRegistrationCharges({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="Number"
                    variant="outlined"
                    label="Dealer Fees"
                    fullWidth
                    size="small"
                    value={dealerFees.value}
                    onChange={(e) => {
                      setDealerFees({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="text"
                    variant="outlined"
                    label="Report Link"
                    fullWidth
                    size="small"
                    value={reportLink.value}
                    onChange={(e) => {
                      setReportLink({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    type="text"
                    variant="outlined"
                    label="Brochure Link"
                    fullWidth
                    size="small"
                    value={brochureLink.value}
                    onChange={(e) => {
                      setBrochureLink({ value: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.submitButton}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Notification notify={notify} setNotify={setNotify}></Notification>
    </div>
  );
};

export default AddCar;
