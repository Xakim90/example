import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  useEffect(() => {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn !== undefined && nextBtn !== null) {
      nextBtn.removeAttribute('disabled');
    }
  });
  document.getElementById('nextBtn').removeAttribute('disabled');

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">About</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Hobby</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={props.data.name}>
              <TableCell component="th" scope="row">
                {props.data.name}
              </TableCell>
              <TableCell align="right">{props.data.email}</TableCell>
              <TableCell align="right">{props.data.price}</TableCell>
              <TableCell align="right">{props.data.currency}</TableCell>
              <TableCell align="right">{props.data.about}</TableCell>
              <TableCell align="right">{props.data.age}</TableCell>
              <TableCell align="right">{props.data.hobby}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
