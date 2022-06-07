import TextField from '@mui/material/TextField';

function ARInput(props) {

    const {label, type, required, onChange, value}= props;

    return <>
        <TextField id="outlined-basic"
         type={type} 
        label={label}
        required={required} 
        onChange={onChange}
        value={value}
        variant="outlined" />
    </>
}

export default ARInput;