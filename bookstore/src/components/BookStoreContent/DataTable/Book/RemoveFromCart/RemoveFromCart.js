import { Button } from '@material-ui/core';

export default RemoveCartButton(props) {
    return(
        <Button variant="contained" color="secondary" onClick={props.cartWork}>
            REMOVE FROM CART
        </Button>
    )
  }