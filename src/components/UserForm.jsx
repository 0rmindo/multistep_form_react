import React from 'react'

const UserForm = () => {
      return (<>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="text" id="name" placeholder="Digite o seu nome" required/>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail:</label>
        <input type="email" name="email" id="name" placeholder="Digite o seu e-mail" required/>
      </div>
    </>
  )
}

export default UserForm