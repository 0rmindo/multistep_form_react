import React from 'react'

const UserForm = ({ data, updateFieldHandle }) => {
      return (<>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          name="text" 
          id="name" 
          placeholder="Digite o seu nome" 
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandle("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail:</label>
        <input
          type="email"
          name="email" 
          id="name" 
          placeholder="Digite o seu e-mail" 
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandle("email", e.target.value)}
        />
      </div>
    </>
  )
}

export default UserForm