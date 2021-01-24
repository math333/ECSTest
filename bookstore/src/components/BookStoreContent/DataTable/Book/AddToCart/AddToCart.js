import { Button } from '@material-ui/core';

export default function AddCartButton(props) {
    return(
        <Button variant="contained" color="primary" onClick={props.cartWork}>
            ADD TO CART
        </Button>
    )
  }