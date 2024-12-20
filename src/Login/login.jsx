import {useForm} from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';

function Login(){
    //Some user account API thing idk

    const {register, handleSubmit} = useForm();
    const Navigate = useNavigate();

    return(
        <div>
            <div class="card">
                <h3>Login</h3>
                <form>
                    <div style={{textAlign: 'left'}}>
                    <label>Email</label><br/>
                    <input type="email" placeholder="johndoe@gmail.com" id="email" {...register("email",{
                    pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email'
                    }})}/>
                    <br/>
                    <lable>Password</lable><br/>
                    <input type="password" placeholder="" id="password"/>
                    <br/>
                    </div>
                    <button style={{marginTop:12}}>submit</button>

                </form>

                <hr/>
                
                <Link to="/signup" >New user? Sign up!</Link>
                <Link to="/homepage" style={{color: 'grey'}}>or continue as guest</Link>
                
            </div>
        </div>
    )
}

export default Login