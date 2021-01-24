import React from 'react';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function Book(props) {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={props.row.bookID}>
            {
            props.columns.map((column) => {
                const value = props.row[column.id];

                return (
                    <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                    </>
                        );
             })}
        </TableRow>
    )}