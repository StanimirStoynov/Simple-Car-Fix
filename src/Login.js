import React from 'react'


export const Login = () => (
  <div>
  <form>
  <label>
    Name:
            <input type="text" name="name" />
             </label>
             <label>
                 password:
             <input type="password" name="password" />
             </label> 
             <input type="submit" value="Submit" />
             <input type="submit" value="Register"/>
        </form>
     </div>
)
