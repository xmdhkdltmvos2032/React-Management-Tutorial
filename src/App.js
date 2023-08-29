import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




function App() {

  const [data, setDate] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await axios.get("/api/hello");
      if (res) { setDate(res.data) }
    }

    get();
  }, [])



  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell align="right">걸그룹</TableCell>
            <TableCell align="right">생년월일</TableCell>
            <TableCell align="right">포지션</TableCell>
            <TableCell align="right">출생지</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.걸그룹}</TableCell>
              <TableCell align="right">{row.생년월일}</TableCell>
              <TableCell align="right">{row.포지션}</TableCell>
              <TableCell align="right">{row.출생지}</TableCell>
            </TableRow>
          )) :

            <TableRow>
              <TableCell colSpan="6" align='center'>
                <Box >
                  <CircularProgress></CircularProgress>
                </Box>
              </TableCell>
            </TableRow>


          }
        </TableBody>
      </Table>
    </TableContainer>

  );
}

export default App;