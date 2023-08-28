import logo from './logo.svg';
import './App.css';
import Customer from './conponents/Customer';

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
    <div className="back">

      {
        customers.map((v, i) => {
          return (

            <Customer

              key={i}
              id={v.id}
              걸그룹={v.걸그룹}
              name={v.name}
              생년월일={v.생년월일}
              출생지={v.출생지}
              포지션={v.포지션}
              소개={v.소개}


            ></Customer>
          )



        })
      }

    </div>
  );
}

export default App;
