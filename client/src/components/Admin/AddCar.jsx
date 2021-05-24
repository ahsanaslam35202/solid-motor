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
import { DropzoneArea } from "material-ui-dropzone";
import React from "react";
import { addCar } from "../../services/carsService";
import Drawer from "../Common/Drawer";
import ToolBar from "../Common/ToolBar";
import TopBar from "../Common/TopBar";

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
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
  const [files, setFiles] = React.useState();
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExtendedFeaturesAdd = () => {
    const features = [...extendedFeatures];
    features.push(extendedFeature.value);
    setExtendedFeatures(features);
    setExtendedFeature({ value: "", error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files);
    const data = new FormData();
    for (let x = 0; x < files.length; x++) {
      data.append("file", files[x]);
    }
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
    data.append("extendedFeatures", extendedFeatures.value);
    // data.append("images", images);
    data.append("price", price.value);
    data.append("downPayment", downPayment.value);
    data.append("numberOfMonths", numberOfMonths.value);
    data.append("shippingCharges", shippingCharges.value);
    data.append("taxAndRegistrationCharges", taxAndRegistrationCharges.value);
    data.append("dealerFees", dealerFees.value);
    axios({
      method: "post",
      url: "http://localhost:3000/api/cars/",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            title="Add Car"
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
                  <TextField
                    variant="outlined"
                    label="Make"
                    fullWidth
                    size="small"
                    value={make.value}
                    onChange={(e) => {
                      setMake({ value: e.target.value });
                    }}
                    error={make.error}
                  />
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
                  <TextField
                    variant="outlined"
                    label="Fuel"
                    fullWidth
                    size="small"
                    value={fuel.value}
                    onChange={(e) => {
                      setFuel({ value: e.target.value });
                    }}
                  />
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
                  <TextField
                    variant="outlined"
                    label="Body"
                    fullWidth
                    size="small"
                    value={body.value}
                    onChange={(e) => {
                      setBody({ value: e.target.value });
                    }}
                  />
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
                  <TextField
                    variant="outlined"
                    label="Engine Type"
                    fullWidth
                    size="small"
                    value={engineType.value}
                    onChange={(e) => {
                      setEngineType({ value: e.target.value });
                    }}
                  />
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
                  <TextField
                    variant="outlined"
                    label="Transmission"
                    fullWidth
                    size="small"
                    value={transmission.value}
                    onChange={(e) => {
                      setTransmission({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    variant="outlined"
                    label="Drive Train"
                    fullWidth
                    size="small"
                    value={driveTrain.value}
                    onChange={(e) => {
                      setDriveTrain({ value: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
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
                      id="file"
                      onChange={(event) => {
                        const files = event.target.files;
                        setFiles(files);
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
    </div>
  );
};

export default AddCar;
