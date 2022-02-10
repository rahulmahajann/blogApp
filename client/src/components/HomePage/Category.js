import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { categoryItems } from '../constants/categoryItems';

const useStyles = makeStyles({
    category__button: {
        margin: [20, "!important"],
        background: 'rgb(140, 15, 15) !important',
        color: 'black !important',
        width: '85%'
    },
    category__table: {
        border: '1px solid rgb(100, 92, 92)'
    },
    category__buttonLink: {
        color: 'inherit',
        textDecoration: 'none'
    }
});

function Category(){
    
    const classes = useStyles();

    return(
        <>
            <Link to = {'/createblog'} className = {classes.category__buttonLink}>
                <Button variant = 'contained' className = {classes.category__button} > Create Blog </Button>
            </Link>

            <Table className = {classes.category__table}>
                
                <TableHead>
                    <TableCell>
                        <Link to = {`/`} className = {classes.category__buttonLink}>
                            All Categories
                        </Link>
                    </TableCell>
                </TableHead>

                <TableBody>
                    {
                        categoryItems.map((elem) => 
                            <TableRow>
                                <TableCell>
                                    <Link to = {`/?category=${elem}`} className = {classes.category__buttonLink}>
                                        {elem}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>

            </Table>

        </>
    )
}

export default Category;