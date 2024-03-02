import logo from './logo.svg';
import './App.css';
import { Table} from "react-bootstrap"

function App() {
  const users=[
    {name:"IMTISAL",email:"imti@gmail.com",address:[
      {Hno:"597", city:"HYD",country:"Pakistan"},
      {Hno:"576", city:"KHI",country:"Pakistan"},
      {Hno:"768", city:"ISL",country:"Pakistan"},
      {Hno:"987", city:"LAH",country:"Pakistan"},
    ]},

    {name :"ALI", email:"ali@gmail.com" , address:[
      {Hno:"101", city:"NIGERIA",country:"INDIA"},
      {Hno:"123", city:"NOIDA",country:"INDIA"},
      {Hno:"345", city:"MUMBAI",country:"INDIA"},
      {Hno:"231", city:"klkta",country:"INDIA"},
    ]},
    {name :"ALI", email:"ali@gmail.com", address:[
      {Hno:"101", city:"NIGERIA",country:"INDIA"},
      {Hno:"123", city:"NOIDA",country:"INDIA"},
      {Hno:"345", city:"MUMBAI",country:"INDIA"},
      {Hno:"231", city:"klkta",country:"INDIA"},
    ]},
    {name :"ALI", email:"ali@gmail.com", address:[
      {Hno:"101", city:"NIGERIA",country:"INDIA"},
      {Hno:"123", city:"NOIDA",country:"INDIA"},
      {Hno:"345", city:"MUMBAI",country:"INDIA"},
      {Hno:"231", city:"klkta",country:"INDIA"},
    ]},
    
  ]
  return (
    <div className="App">
      
      <h1>Nested list with nested Array</h1>

<Table variant='dark' striped>
<tbody>
  <tr>
    <td>S.N</td>
    <td>NAME</td>
    <td>EMAIL</td>
    <td>AdreSS</td>
  </tr>


{
  users.map((item,i)=>
  <tr key={i}>
    
    <td>{i+1}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    
    <td>
      <Table variant='dark' striped>
        <tbody>{
      item.address.map((data)=>
      <tr>
        <td>{data.Hno}</td>
        <td>{data.city}</td>
        <td>{data.country}</td>
      </tr>
      )

          }
          
          
        </tbody>
      </Table>
    </td>




  </tr>
  )
}
</tbody>
</Table>

    </div>
  );
}

export default App;
 