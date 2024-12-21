import {useForm} from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';

function Login(){
    //Some user account API thing idk

    const {register, handleSubmit} = useForm();
    const Navigate = useNavigate();

    document.getElementById("logInNav").style.display = "none";

    document.querySelectorAll('.nav-link').forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById("logInNav").style.display = "block";
        });
    });

    return(
        
        <div>
            <div className="container-fluid">
                <form className="form-group">
                    <h3 ID="logInTitle">Login</h3>
                    <div style={{textAlign: 'left'}}>
                    <label>Email</label><br/>
                    <input className= "form-control logIn" type="email" placeholder="johndoe@gmail.com" id="email" {...register("email",{
                    pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email'
                    }})}/>
                    <br/>
                    <lable>Password</lable><br/>
                    <input className= "form-control logIn" type="password" placeholder="" id="password"/>
                    <br/>
                    </div>
                    <button style={{marginTop:12}}>Submit</button>

                </form>

                <hr/>
                
                <Link to="/signup" >New user? Sign up!</Link>
                <Link to="/homepage" style={{color: 'black'}}> or continue as guest</Link>

             </div>
        </div>
    )
}

export default Login