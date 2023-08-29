import logo from './logo.svg';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const customers = [{

  "id": 1,
  "걸그룹": "있지",
  "name": "황예지",
  "생년월일": "20000526",
  "출생지": "전라북도전주",
  "포지션": "리더",
  "소개": "내가제일좋아하는아이돌!!!!"

},
{

  "id": 2,
  "걸그룹": "있지",
  "name": "이채령",
  "생년월일": "20010605",
  "출생지": "경기도용인시",
  "포지션": "메인댄서",
  "소개": "엉뚱한매력이넘치는아이돌!!!"



},
{
  "id": 3,
  "걸그룹": "있지",
  "name": "신유나",
  "생년월일": "20031209",
  "출생지": "경기도수원시",
  "포지션": "서브랩퍼",
  "소개": "팀에없어서는안되는사랑스러운막내!!!"
}

]

function App() {
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
          {customers.map((row) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

export default App;
