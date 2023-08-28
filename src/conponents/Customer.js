import React from 'react'

function Customer({ id, 걸그룹, name, 생년월일, 출생지, 포지션, 소개 }) {
  return (
    <div>


      <CustomerProfiles id={id} ></CustomerProfiles>
      <CustomerInfo
      걸그룹 = {걸그룹} name = {name} 생년월일 = {생년월일}
      출생지 = {출생지} 포지션 = {포지션} 소개={소개}
      ></CustomerInfo>





    </div>
  )
}

function CustomerProfiles({ id }) {
  return (
    <div>

      <p>{id}</p>


    </div>
  )
}

function CustomerInfo({걸그룹, name, 생년월일, 출생지, 포지션,소개}) {

  return (
    <div>
      <h2>{name}</h2>
      <p>{걸그룹}</p>
      <p>{생년월일}</p>
      <p>{출생지}</p>
      <p>{포지션}</p>
      <p>{소개}</p>
    </div>
  )

}



export default Customer