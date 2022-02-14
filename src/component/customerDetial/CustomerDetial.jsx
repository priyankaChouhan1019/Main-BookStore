import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Footer from '../footer/Footer';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { getCart, editCustomerDetial } from '../../services/UserService'
import '../customerDetial/CustomerDetial.scss'

function CustomerDetial(props) {

    const [customer, setCustomerdata] = React.useState([]);
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [type, setType] = React.useState("");
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);

    const [addressObj, setAddressObj] = React.useState({

        addressType: type,
        fullAddress: address,
        city: city,
        state: state,
    });
    const takeAddressType = (event) => {
        setAddressObj({ ...addressObj, addressType: event.target.value });
    };
    const takeFullAddress = (event) => {
        setAddressObj({ ...addressObj, fullAddress: event.target.value });
    };
    const takeCity = (event) => {
        setAddressObj({ ...addressObj, city: event.target.value });
    };
    const takeState = (event) => {
        setAddressObj({ ...addressObj, state: event.target.value });
    };

    const loadCustomerdata = () => {
        getCart()
            .then((response) => {
                console.log(response, "data recieved");
                setCustomerdata(response.data.result[0].user_id);
            })
            .catch((err) => {
                console.warn(err);
            });
    };


    const updateCustomerdetails = () => {
        editCustomerDetial(addressObj)
            .then((response) => {
                console.log("updated address ", response);
            })
            .catch((err) => {
                console.warn(err);
            });
    };

    const continueOrder = () => {
        setOpenOrderSummery(!openOrderSummery)
    }


    React.useEffect(() => {
        loadCustomerdata();
    }, []);

    return (
        <div className="validation-box">
            <div className='ctm-heading'>
            <div className="customer-details-title">
                <span>Customer details</span>
                </div>
                <div className="addnewaddress">
                    <span>Add new Address</span>
                </div>
             
            </div>
            <div className="RadioButtons">
                <FormControl component="fieldset">
                    {/* <FormLabel style={{ paddingRight: "250px" }} component="legend">
                        Type
                    </FormLabel> */}
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                        onChange={takeAddressType}
                    >
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Home"
                            control={<Radio />}
                            label="Home"
                        />
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Office"
                            control={<Radio />}
                            label="Office"
                        />
                        <FormControlLabel
                            onChange={takeAddressType}
                            value="Other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className="inputfields-container">
                <div className="row-1">
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="fullname-1r"
                        value={customer.fullName}
                        helperText="Full Name"
                    />
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="mobilenum-1r"
                        value={customer.phone}
                        helperText="Mobile Number"
                    />
                </div>
                <div className="row-2">
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Address"
                        className="Address-2r"
                        onChange={takeFullAddress}
                    />
                </div>
                <div className="row-3">
                    <TextField
                        label="City/Town"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="city-3r"
                        onChange={takeCity}
                    />
                    <TextField
                        label="State"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        className="state-3r"
                        onChange={takeState}
                    />
                </div>
            </div>

            <div className="continue-button-container">
                <div className="continue-button" onClick={updateCustomerdetails}>
                    <p onClick={() => props.continueOrder(true)}>CONTINUE</p><br></br>
                </div>
            </div>

            {/* <div className='orderr'>
                <div className='summaryy'>
                    Order summary
                </div>
            </div>
            <div>
                <Footer />
            </div> */}
        </div>
    )
}

export default CustomerDetial
