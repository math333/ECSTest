import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from "./styles";
import Book from "./Book/Book";
import clsx from 'clsx';

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const searchText = useSelector((state)=>state.search.searchString);
  const columnsSelected = useSelector((state)=>state.columnsVisible.selection);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let sortedRow = props.rows;
  const initial = searchText !== "" ? 0 : page * rowsPerPage ; 
  const last = searchText !== "" ? -1 : page * rowsPerPage + rowsPerPage ;
  const sortingType = useSelector((state)=>state.sortingType.sortType);
  const sortingDetail = sortingType.split('_');
  const columnIndexSort = sortingDetail[0];
  const sortType = sortingDetail[1];

  const columns = [
    { id: 'cover', label: 'Cover', visibility: true },
    { id: 'title', label: 'Title', visibility: columnsSelected[0], width:'100px' },
    { id: 'author', label: 'Author', visibility: columnsSelected[1] },
    { id: 'rating', label: 'Rating', visibility: columnsSelected[2] },
    { id: 'language', label: 'Language', visibility: columnsSelected[3] },
    { id: 'price', label: 'Price', align: 'right', format: (value) => value.toLocaleString('en-US'), visibility: columnsSelected[4]},
    { id: 'cartFuncButton', label: '', visibility: true },
  ];

  let compareFunc;
  let sortingColumn;
  sortingColumn = columnIndexSort === '1' ? 
                  'title' : columnIndexSort === '2' ? 
                  'author' : columnIndexSort === '3' ? 
                  'rating' : columnIndexSort === '4' ? 
                  'language' : columnIndexSort === '5' ? 
                  'price' : null; 

  if(sortType==='A'){
    compareFunc= (a,b)=>{
      if ((a[sortingColumn])> (b[sortingColumn])) return 1;
      if ((a[sortingColumn])< (b[sortingColumn])) return -1;
    return 0;
    } 
  }
  else if(sortType==='D'){
    compareFunc= (a,b)=>{
      if ((a[sortingColumn])< (b[sortingColumn])) return 1;
      if ((a[sortingColumn])> (b[sortingColumn])) return -1;
    return 0;
    } 
  }
  
  sortedRow.sort(compareFunc)
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size='small'>
          <TableHead>
            <TableRow>
              {columns.map((column,index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className = {clsx(!column.visibility && classes.makeInvisible)}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRow.slice(initial, last).map((row) => {
              return (
                <Book row = {row} columns= {columns}/>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={sortedRow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}