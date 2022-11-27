import React, { Component } from 'react'
 class App extends Component {
state={
  name:"",
  lastname:"",
  father:"",
  email:"",
  number:"",
  serh:"",

}

input=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

event=(e)=>{
 this.setState(this.state.name==="" || this.state.lastname==="" || this.state.father==="" || this.state.email===""  || this.state.number.length==11 ? alert("Duzgunlukden emin olun: butun xanalar doldurulmalidir(COMMENTDEN BASQA); nomre olcusu 10 simvoldan ibaret olmalidir"):alert("Her sey qayadasindadir, qeydiyyatdan ugurla kecdiniz"))
 document.write(`Dogrulugu yoxlayin,sehvlik varsa sehifeni yeniden yukleyin.
 
 ${JSON.stringify(this.state)}`)
}
  render() {
    console.log(JSON.stringify(this.state))
    
    return (
      <div className='div'>

<div >
        <label htmlFor='name'>FirstName:</label> <br></br>
        <input value={this.state.name} type="text" id="name" name="name" onChange={this.input} />
        
</div>
<br></br>
<div >
        <label htmlFor='lastname'>Lastname:</label> <br></br>
        <input value={this.state.lastname} type="text" id="lastname" name="lastname" onChange={this.input}/>
   
</div>
<br></br>
<div >
        <label htmlFor='father'>Father's name:</label> <br></br>
        <input value={this.state.father} type="text" id="father" name="father" onChange={this.input} />
       
</div>
<br></br>
<div>
        <label htmlFor='email'>E-mail:</label><br></br>
        <input value={this.state.email} type="text" id="email" name="email" onChange={this.input} />
</div>
<br></br>
        <div>
        <label htmlFor='number'>Number:</label><br></br>
        <input value={this.state.number} type="number" id="number" name="number" onChange={this.input} />
      </div>
<br></br>
<div>
<label htmlFor='serh'>Comment:</label> <br></br>
        <textarea className="serh" value={this.state.serh} type="text" id="serh" name="serh"   onChange={this.input} />
</div>
<br></br>
<button className ="but"  onClick={this.event}>Send</button>
 </div>
    )
  }
}
export default App
