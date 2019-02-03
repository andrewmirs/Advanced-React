import { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import CartCount from './CartCount';
import Signout from './Signout';
import User from './User';

const Nav = () => (
    <User>
        {({ data: { me } }) => (
            <NavStyles data-test="nav">
                <Link href="/items">
                    <a>Shop</a>
                </Link>
                {me && (
                    <Fragment>
                        <Link href="/sell">
                            <a>Sell</a>
                        </Link>
                        <Link href="/orders">
                            <a>Orders</a>
                        </Link>
                        <Link href="/me">
                            <a>Account</a>
                        </Link>
                        <Signout />
                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                            {(toggleCart) => (
                                <button onClick={toggleCart}>
                                    My Cart
                                    <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)} />
                                </button>
                            )}
                        </Mutation>
                    </Fragment> 
                )}
                {!me && (
                    <Link href="/signup">
                        <a>Sign In</a>
                    </Link>
                )}
                
            </NavStyles>
        )}
    </User>      
);

export default Nav;