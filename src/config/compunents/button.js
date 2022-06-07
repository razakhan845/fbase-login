import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function ARButton(props) {

    const { label, onClick, loading, disabled } = props;

    return <>
        <Button disabled={disabled || loading} 
        onClick={onClick} variant="contained">
        {loading && <CircularProgress size={25}/>} {label}
        </Button>
    </>
}

export default ARButton;